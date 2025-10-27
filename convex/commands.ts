import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const addRow = mutation({
  args: {
    command: v.string(),
    description: v.string(),
    sheetName: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("commands", {
      command: args.command,
      description: args.description,
      sheetName: args.sheetName,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("commands"),
    field: v.string(),
    value: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, field, value } = args;
    const existing = await ctx.db.get(id);
    if (!existing) return;
    await ctx.db.patch(id, { [field]: value });
  },
});

export const remove = mutation({
  args: { id: v.id("commands") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const search = query({
  args: { inputText: v.string(), sheetName: v.string() },
  handler: async (ctx,{ inputText, sheetName }) => {
    if (inputText.length === 0) {
      const allCommands = await ctx.db
        .query("commands")
        .withIndex("by_sheetName", (q) => q.eq("sheetName", sheetName))
        .collect();
      return allCommands;
    }
    return await ctx.db
      .query("commands")
      .withSearchIndex("search_cmd", (q) => 
        q.search("command", inputText).eq("sheetName", sheetName),
      )
      .collect();
  },
});
