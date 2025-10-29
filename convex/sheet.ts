import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addSheet = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated")
    }
    await ctx.db.insert("sheet", { name: args.name, tokenIdentifier: identity.tokenIdentifier });
  },
});

export const getSheetList = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated")
    }
    const sheetList = await ctx.db
      .query("sheet")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .collect();
    return sheetList;
  },
});

export const remove = mutation({
  args: { id: v.id("sheet") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
