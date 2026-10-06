"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
  schema,
  plugins: [
    structureTool(),
    // Vision lets you run GROQ queries directly inside the Studio — useful
    // for testing queries before wiring them into the site.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
