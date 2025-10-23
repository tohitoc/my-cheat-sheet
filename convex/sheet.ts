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
