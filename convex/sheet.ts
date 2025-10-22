import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addSheet = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("sheet", { name: args.name });
  },
});
