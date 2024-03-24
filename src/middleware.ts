import { NextResponse, NextRequest } from "next/server";
// import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let token = request.cookies.get("token");

  // const req = NextRequest.next()

  // console.log(req, "<< req");
  
  // console.log(request, "<< request");
  

  // already login
  if (token) {
    if (request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/login") && !token) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  // if (request.nextUrl.pathname.startsWith('/change_password') && !token) {
  //   return NextResponse.rewrite(new URL('/change_password', request.url))
  // }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
