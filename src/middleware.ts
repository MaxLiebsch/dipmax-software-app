import { routing } from "@/src/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
  matcher: ["/", "/(de|en)/:path*"],
};
