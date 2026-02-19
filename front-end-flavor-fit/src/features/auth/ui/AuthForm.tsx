'use client'

import { isEmailRegex } from '../utils/is-email.regex'
import AuthChangeTypeForm from './AuthChangeTypeForm'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { useMutation } from '@apollo/client/react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import {
  AuthInput,
  LoginDocument,
  RegisterDocument
} from '@/__generated__/graphql'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<AuthInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [auth, { loading }] = useMutation(
    isLogin ? LoginDocument : RegisterDocument,
    {
      onCompleted: () => {
        toast.success(
          isLogin ? 'Logged in successfully!' : 'Registered successfully!',
          {
            id: 'auth-success'
          }
        )
      },
      onError: error => {
        toast.error(error.message, {
          id: 'auth-error'
        })
      }
    }
  )

  const handleAuth = (data: AuthInput) => {
    auth({
      variables: {
        data
      }
    })
  }

  return (
    <div className="flex h-screen">
      <div className="relative m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg">
        <h1 className="mb-5 text-center text-[2.3rem] font-bold">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h1>

        <form
          className="space-y-3"
          onSubmit={handleSubmit(handleAuth)}
        >
          <Input
            {...register('email', {
              required: true,
              pattern: {
                value: isEmailRegex,
                message: 'Invalid email address'
              }
            })}
            type="email"
            placeholder="Enter email:"
            aria-invalid={!!errors.password}
          />

          {errors.email && (
            <p className="text-destructive -mt-1 block text-xs">
              {errors.email.message}
            </p>
          )}

          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            type="password"
            placeholder="Enter password:"
            aria-invalid={!!errors.password}
          />

          {errors.password && (
            <p className="text-destructive -mt-1 block text-xs">
              {errors.password.message}
            </p>
          )}

          <div className="text-center">
            <Button
              type="submit"
              disabled={!isValid || loading}
              variant="secondary"
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </div>
        </form>

        <AuthChangeTypeForm isLogin={isLogin} />

        <Image
          src="/images/emotions/salad.png"
          alt="Salad"
          width={200}
          height={200}
          className="absolute -bottom-16 -left-16 -rotate-12"
          draggable={false}
        />
      </div>
    </div>
  )
}

export default AuthForm
