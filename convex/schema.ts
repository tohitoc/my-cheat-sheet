import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sample: defineTable({
    command: v.string(),
    description: v.string(),
  }).searchIndex("search_cmd", {
    searchField: "command",
  }),
  sheet: defineTable({
    name: v.string(),
  }),
});
