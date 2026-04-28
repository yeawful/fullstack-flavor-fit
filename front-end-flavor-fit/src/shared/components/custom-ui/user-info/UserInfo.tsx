import Image from 'next/image'

interface Props {
  avatarUrl: string
  name: string
  email: string
}

export function UserInfo({ avatarUrl, name, email }: Props) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarUrl}
        alt={name}
        width={36}
        height={36}
        className="size-9 rounded-full object-cover"
      />

      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm opacity-60">{email}</p>
      </div>
    </div>
  )
}
