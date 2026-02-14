'use client'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  return (
    <div>
      <h1>{type === 'register' ? 'Register' : 'Login'}</h1>

      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <button>{type === 'register' ? 'Register' : 'Login'}</button>
      </form>
    </div>
  )
}

export default AuthForm
