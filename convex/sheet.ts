import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addSheet = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("sheet", { name: args.name });
  },
});

export const getSheetList = query({
  handler: async (ctx) => {
    const sheetList = await ctx.db.query("sheet").collect();
    return sheetList;
  },
});

export const remove = mutation({
  args: { id: v.id("sheet") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});

export const update = mutation({
  args: {
    id: v.id("sheet"),
    name: v.string(),
  },
  handler: async (ctx, { id, name }) => {
    const existing = await ctx.db.get(id);
    if (!existing) return;
    await ctx.db.patch(id, { name: name });
  },
});
