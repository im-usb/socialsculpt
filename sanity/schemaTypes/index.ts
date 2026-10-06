import { type SchemaTypeDefinition } from "sanity";
import caseStudy from "./caseStudy";
import post from "./post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, post],
};
