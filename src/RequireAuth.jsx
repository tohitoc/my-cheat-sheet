import { RedirectToSignIn } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";

export default function RequireAuth({ children }) {
  return (
    <>
      <Unauthenticated>
        <RedirectToSignIn />
      </Unauthenticated>

      <Authenticated>
        {children}
      </Authenticated>
    </>
  );
}
