import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

const PUBLIC_FILE = /\.(.*)$/;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
};
