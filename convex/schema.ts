import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  commands: defineTable({
    command: v.string(),
    description: v.string(),
    sheetName: v.string(),
    tokenIdentifier: v.string(),
  })
    .index("by_sheetName_token", ["sheetName", "tokenIdentifier"])
    .searchIndex("search_cmd", {
      searchField: "command",
      filterFields: ["sheetName", "tokenIdentifier"],
    }),
  sheet: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
});
