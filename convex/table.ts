import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const addRow = mutation({
  args: {
    command: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("sample", {
      command: args.command,
      description: args.description,
    });
  },
});
