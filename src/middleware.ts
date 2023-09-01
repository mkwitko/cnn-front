import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookies = request.cookies.getAll().map((each) => {
    return each.name;
  });

  let isAuth = false;
  if (cookies.length > 0)
    cookies.forEach((e: any) => {
      if (e.match('auth')) isAuth = true;
    });

  if (!isAuth) {
    const loggedRoutes = ['/home', '/consult'];
    const hasLoggedRoute = loggedRoutes.some((route) => {
      return request.url.includes(route);
    });
    if (hasLoggedRoute) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (isAuth) {
    if (request.url.includes('/login')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: '/((?!.*\\.).*)' };
