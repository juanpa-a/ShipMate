/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { TypedPocketBase } from "./types";

declare global {
  namespace App {
    interface Locals extends Record<string, any> {
      api: TypedPocketBase;
      user: RecordAuthResponse<UsersResponse> | null;
      token: string | null;
    }
  }
}
