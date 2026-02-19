import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  isLogin: boolean
}

export function AuthChangeTypeForm({ isLogin }: Props) {
  return (
    <div className="mt-4 text-center text-sm">
      {isLogin ? (
        <div>
          Don&apos;t have an account?{' '}
          <Link
            href={PAGES.REGISTER}
            className="link-simple"
          >
            Register
          </Link>
        </div>
      ) : (
        <div>
          Already have an account?{' '}
          <Link
            href={PAGES.LOGIN}
            className="link-simple"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  )
}

export default AuthChangeTypeForm
