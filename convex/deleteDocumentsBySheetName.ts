import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const deleteBySheetName = mutation({
  args: { sheetName: v.string() },
  handler: async (ctx, { sheetName }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated")
    }

    const docs = await ctx.db
      .query("commands")
      .withIndex("by_sheetName_token", (q) => 
        q.eq("sheetName", sheetName).eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .collect();
    
    for (const doc of docs) {
      await ctx.db.delete(doc._id)
    }
  },
});
