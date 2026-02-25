'use server'

import { jwtVerify } from 'jose'

import { Role } from '@/__generated__/graphql'

type TAuthTokerData = {
  id: string
  role: Role
}

export async function jwtVerifyServer(accessToken: string) {
  try {
    const { payload }: { payload: TAuthTokerData } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    )
    return payload
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes('exp claim timestamp check failed')
    ) {
      console.log('Token has expired')
      return null
    }

    console.log('Error verifying JWT', error)
    return null
  }
}
