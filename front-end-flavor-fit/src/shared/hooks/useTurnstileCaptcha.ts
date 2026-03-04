'use client'

import { TurnstileInstance } from '@marsidev/react-turnstile'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'

export function useTurnstileCaptcha() {
  const ref = useRef<TurnstileInstance | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const handleSuccess = (token: string) => {
    setCaptchaToken(token)
  }

  const handleExpire = () => {
    setCaptchaToken(null)
  }

  const resetCaptcha = () => {
    ref.current?.reset()
    setCaptchaToken(null)
  }

  const validateCaptcha = () => {
    if (!captchaToken) {
      toast.error('Please complete the CAPTCHA challenge', {
        id: 'captcha-error'
      })
      return false
    }
    return true
  }

  const captchaHeaders = captchaToken
    ? { 'cf-turnstile-token': captchaToken }
    : {}

  return {
    ref,
    captchaToken,
    handleSuccess,
    handleExpire,
    resetCaptcha,
    validateCaptcha,
    captchaHeaders
  }
}
