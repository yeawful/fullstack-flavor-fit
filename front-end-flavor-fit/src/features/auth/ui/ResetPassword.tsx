'use client'

import TurnstileCaptcha from '@/shared/components/custom-ui/captcha/TurnstileCaptcha'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { useMutation } from '@apollo/client/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { PAGES } from '@/shared/config/page.config'

import { useTurnstileCaptcha } from '@/shared/hooks/useTurnstileCaptcha'

import { ResetPasswordDocument } from '@/__generated__/graphql'

interface FormData {
  password: string
}

export default function ResetPassword() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')

  const { register, handleSubmit } = useForm<FormData>()

  const { validateCaptcha, captchaHeaders, handleSuccess, handleExpire } =
    useTurnstileCaptcha()

  const [resetPassword, { loading }] = useMutation(ResetPasswordDocument, {
    onCompleted: () => {
      toast.success('Password successfully changed')
      router.replace(PAGES.LOGIN)
    },
    onError: () => {
      toast.error('Invalid or expired link')
    }
  })

  const onSubmit = (data: FormData) => {
    if (!validateCaptcha()) return
    if (!token) return

    resetPassword({
      variables: {
        data: {
          token,
          newPassword: data.password
        }
      },
      context: {
        headers: captchaHeaders
      }
    })
  }

  return (
    <div className="flex h-screen">
      <div className="relative m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg">
        <h1 className="mb-5 text-center text-[2.3rem] font-bold">
          Reset password
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <Input
            type="password"
            {...register('password', {
              required: true,
              minLength: 6
            })}
            placeholder="Enter new password"
          />

          <TurnstileCaptcha
            onSuccess={handleSuccess}
            onExpire={handleExpire}
          />

          <div className="text-center">
            <Button
              type="submit"
              disabled={loading}
              variant="secondary"
            >
              Reset password
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
