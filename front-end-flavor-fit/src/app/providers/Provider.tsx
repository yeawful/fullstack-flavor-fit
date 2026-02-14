'use client'

import { getApolloClient } from '@/shared/lib/apollo/apollo-client'
import { ApolloProvider } from '@apollo/client/react'

const apollo = getApolloClient()

export function Provider({ children }: { children: React.ReactNode }) {
	return <ApolloProvider client={apollo}>{children}</ApolloProvider>
}
