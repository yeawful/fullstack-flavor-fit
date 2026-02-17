'use client'

import { ApolloProvider } from '@apollo/client/react'
import { Toaster } from 'react-hot-toast'

import { getApolloClient } from '@/shared/lib/apollo/apollo-client'

const apollo = getApolloClient()

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apollo}>
      {children}
      <Toaster position="top-center" />
    </ApolloProvider>
  )
}
