import type { TypedPocketBase } from "~/types";
import PocketBase from "pocketbase";

export const api = new PocketBase(
  import.meta.env.PUBLIC_BASE_API_URL,
) as TypedPocketBase;
