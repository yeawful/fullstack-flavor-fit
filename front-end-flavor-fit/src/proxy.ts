import { NextRequest, NextResponse } from 'next/server'

import { PAGES } from './shared/config/page.config'
import { getTokens } from './shared/lib/server/get-tokens.server'
import { jwtVerifyServer } from './shared/lib/server/jwt-verify.server'

export async function proxy(req: NextRequest, res: NextResponse) {
  const tokens = await getTokens(req)

  if (!tokens) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, req.url))
  }

  if ('isRefreshedToken' in tokens) {
    const response = NextResponse.next()

    if (tokens.setCookie) {
      response.headers.set('Set-Cookie', tokens.setCookie)
    }

    return response
  }

  const verifiedData = await jwtVerifyServer(tokens.accessToken)
  if (!verifiedData) {
    return NextResponse.redirect(new URL(PAGES.LOGIN, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
