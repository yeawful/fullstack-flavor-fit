'use client'
import { Button } from '@/shared/components/ui/button'
import { useApolloClient, useMutation } from '@apollo/client/react'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { PAGES } from '@/shared/config/page.config'

import { LogoutDocument } from '@/__generated__/graphql'

export function Logout() {
  const [logout, { loading }] = useMutation(LogoutDocument)

  const client = useApolloClient()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout()
      await client.clearStore()

      router.replace(PAGES.LOGIN)
    } catch (error) {
      console.error('Logout error', error)
    }
  }

  return (
    <Button
      variant="soft"
      size="icon"
      className="mr-6 rounded-full"
      onClick={handleLogout}
      disabled={loading}
    >
      <LogOut className="size-5" />
    </Button>
  )
}
