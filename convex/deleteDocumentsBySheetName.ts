import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const deleteBySheetName = mutation({
  args: { sheetName: v.string() },
  handler: async (ctx, { sheetName }) => {
    const docs = await ctx.db
      .query("commands")
      .withIndex("by_sheetName", (q) => q.eq("sheetName", sheetName))
      .collect();
    
    for (const doc of docs) {
      await ctx.db.delete(doc._id)
    }
  },
});
