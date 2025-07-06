import type { TypedPocketBase } from "~/types";
import type { APIContext } from "astro";
import { defineMiddleware } from "astro/middleware";
import PocketBase from "pocketbase";

export const onRequest = defineMiddleware(
  async ({ locals, cookies }: APIContext, next: () => any) => {
    const token = cookies.get("token");
    const pocketbase = new PocketBase(
      import.meta.env.PUBLIC_BASE_API_URL,
    ) as TypedPocketBase;

    if (token) {
      pocketbase.authStore.save(token.value);
      try {
        pocketbase.authStore.isValid &&
          (await pocketbase.collection("users").authRefresh());
      } catch (error) {
        pocketbase.authStore.clear();
      }
    }

    locals.api = pocketbase;
    locals.user = null;
    locals.token = null; // Will store the cookie string for client-side hydration

    if (token && pocketbase.authStore.isValid) {
      try {
        // Refresh token if nearing expiry, not strictly necessary here as authRefresh already called
        // but good practice if we weren't sure.
        // await pocketbase.collection("users").authRefresh(); // Already called above

        locals.user = pocketbase.authStore.model;
        // Store the full cookie string for the client to use
        locals.token = pocketbase.authStore.exportToCookie({ httpOnly: false });
      } catch (_) {
        // This can happen if the token is invalid or fails to refresh
        pocketbase.authStore.clear();
        // locals.user and locals.token remain null
      }
    }

    const response = await next();

    // Set the cookie on the response if the authStore is valid
    // This ensures the browser's cookie is updated/kept in sync, especially after OAuth or token refresh
    if (pocketbase.authStore.isValid) {
      response.headers.append(
        "set-cookie",
        pocketbase.authStore.exportToCookie({ httpOnly: false }), // Ensure httpOnly is false for client-side access if needed, though primary hydration is via locals.token
      );
    } else {
      // If auth is not valid (e.g., after logout or if token became invalid),
      // ensure the cookie is cleared.
      // The "token" cookie specifically might have been cleared by Navbar.astro client-side,
      // but this handles the pb_auth cookie PocketBase itself uses.
      const pastDate = new Date(0).toUTCString();
      response.headers.append(
        "set-cookie",
        `pb_auth=; Path=/; Expires=${pastDate}; SameSite=Lax; Secure; HttpOnly`
      );
       response.headers.append(
        "set-cookie",
        `token=; Path=/; Expires=${pastDate}; SameSite=Lax; Secure; HttpOnly`
      );
    }

    return response;
  },
);
