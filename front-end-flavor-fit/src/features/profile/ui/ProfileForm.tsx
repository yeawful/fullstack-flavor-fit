'use client'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { Button } from '@/shared/components/ui/button'
import { useMutation } from '@apollo/client/react'
import { User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { GetProfileQuery, UpdateProfileDocument } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'
import { BodyMeasurementsForm } from './BodyMeasurementsForm'
import { GeneralInformationForm } from './GeneralInformationForm'

export function ProfileForm({ data }: { data: GetProfileQuery }) {
  const form = useForm<TProfileForm>({
    mode: 'onChange',
    defaultValues: {
      email: data?.me?.email ?? '',
      avatarUrl: data?.me?.avatarUrl ?? '',
      profile: data?.me?.profile ?? {},
      measurements: data?.me?.measurements ?? {}
    }
  })

  const [updateProfile, { loading }] = useMutation(UpdateProfileDocument, {
    onCompleted() {
      toast.success('Profile updated')
    }
  })

  const submit = form.handleSubmit(data => {
    const cleanedData = {
      ...data,
      profile: data.profile
        ? Object.fromEntries(
            Object.entries(data.profile).filter(([key]) => key !== '__typename')
          )
        : {},
      measurements: data.measurements
        ? Object.fromEntries(
            Object.entries(data.measurements).filter(
              ([key]) => key !== '__typename'
            )
          )
        : {}
    }

    updateProfile({
      variables: {
        data: cleanedData
      }
    })
  })

  return (
    <div>
      <form
        onSubmit={submit}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <HeadingWithIcon Icon={User}>Personal Information</HeadingWithIcon>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              type="button"
              onClick={() => form.reset()}
            >
              Cancel
            </Button>
            <Button
              variant="accent"
              disabled={loading}
            >
              Save changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <GeneralInformationForm form={form} />
          <BodyMeasurementsForm form={form} />
        </div>
      </form>
    </div>
  )
}
