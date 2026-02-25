import { NextRequest, NextResponse } from 'next/server'

import { PAGES } from './shared/config/page.config'

export async function proxy(req: NextRequest, res: NextResponse) {
  if (!req.cookies.get('accessToken')) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, req.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*']
}
