import { getAuth } from "@hono/clerk-auth";
import { createMiddleware } from "hono/factory";

export const shouldBeUser = createMiddleware<{
    Variables: {
        userId: string;
    }
}>(async (context, next) => {
    const auth = getAuth(context);

    if (!auth?.userId) {
      return context.json({
        message: "You are not logged in.",
      });
    }

    context.set("userId", auth.userId)
    await next();
})