import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Only instantiate a real client when credentials are present. Callers
// should check `isSanityConfigured` (from ../env) before using this, and
// fall back to local content (lib/content.ts) otherwise.
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});
