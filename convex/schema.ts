import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  commands: defineTable({
    command: v.string(),
    description: v.string(),
    sheetName: v.string(),
  })
    .index("by_sheetName", ["sheetName"])
    .searchIndex("search_cmd", {
      searchField: "command",
      filterFields: ["sheetName"],
    }),
  sheet: defineTable({
    name: v.string(),
  }),
});
