'use client'

import { ApolloProvider } from '@apollo/client/react'

import { getApolloClient } from '@/shared/lib/apollo/apollo-client'

const apollo = getApolloClient()

export function Provider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={apollo}>{children}</ApolloProvider>
}
