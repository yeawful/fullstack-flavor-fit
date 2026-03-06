import type { PropsWithChildren } from 'react'

import { Header } from '@/features/layout/header/Header'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="px-6 py-5">
      <Header />
      <div className="mt-10">{children}</div>
    </div>
  )
}
