'use client'

import { isEmailRegex } from '../utils/is-email.regex'
import AuthChangeTypeForm from './AuthChangeTypeForm'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { cn } from '@/shared/utils'
import { useMutation } from '@apollo/client/react'
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
          isLogin ? 'Logged in successfully!' : 'Registrered successfully!',
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
      <div className="m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-5 text-white shadow-lg">
        <h1 className="mb-5 text-center text-4xl font-bold">
          {isLogin ? 'Login' : 'Register'}
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
            className={cn(
              'border border-transparent transition-colors',
              errors.email && 'border-red-500'
            )}
          />

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
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
            className={cn(
              'border border-transparent transition-colors',
              errors.password && 'border-red-500'
            )}
          />

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
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
      </div>
    </div>
  )
}

export default AuthForm
