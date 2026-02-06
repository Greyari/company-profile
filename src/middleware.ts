import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;

  console.log("🧭 PATH:", pathname);
  console.log("🌍 COOKIE LOCALE:", localeCookie);

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
