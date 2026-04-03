import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { SelectLabel } from '@/shared/components/custom-ui/with-label/SelectLabel'
import { CardSim, CircleSmall, Mail, UserCircle } from 'lucide-react'
import { Controller, UseFormReturn } from 'react-hook-form'

import { Gender } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'
import { AvatarUpload } from './AvatarUpload'

export function GeneralInformationForm({
  form
}: {
  form: UseFormReturn<TProfileForm>
}) {
  const { register } = form

  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-6 text-lg font-semibold">General information</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <AvatarUpload
            onChange={url => form.setValue('avatarUrl', url)}
            value={form.watch('avatarUrl') || undefined}
          />

          <InputLabel
            Icon={CardSim}
            label="Full name"
            placeholder="Full name"
            {...register('profile.fullName')}
          />
        </div>

        <InputLabel
          Icon={Mail}
          label="Email"
          placeholder="Email"
          {...register('email')}
        />

        <div className="grid grid-cols-2 gap-2">
          <Controller
            control={form.control}
            name="profile.gender"
            render={({ field }) => (
              <SelectLabel
                value={field.value}
                onChange={field.onChange}
                label="Gender"
                Icon={CircleSmall}
                options={[
                  {
                    label: 'Male',
                    value: Gender.Male
                  },
                  {
                    label: 'Female',
                    value: Gender.Female
                  }
                ]}
              />
            )}
          />
          <InputLabel
            Icon={UserCircle}
            label="Age"
            placeholder="Age"
            {...register('profile.age', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />
        </div>

        <label className="relative block">
          <span className="mb-1.5 block text-sm opacity-50">Bio</span>
          <textarea
            className="w-full resize-none rounded-md border bg-[#f0efef] p-3 font-mono"
            placeholder="Bio"
            {...register('profile.bio')}
          />
        </label>
      </div>
    </div>
  )
}
