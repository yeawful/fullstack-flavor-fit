import { InputLabel } from '@/shared/components/custom-ui/input-label/InputLabel'
import { Ruler, Weight } from 'lucide-react'
import { UseFormReturn } from 'react-hook-form'

import { IProfileForm } from '../types/profile-update.types'

export function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<IProfileForm>
}) {
  const { register } = form

  return (
    <div className="rounded-xl border bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold">Body measurements</h2>

      <div className="grid grid-cols-2 gap-4">
        <InputLabel
          Icon={Ruler}
          label="Height cm"
          placeholder="Height cm"
          {...register('heightCm')}
        />

        <InputLabel
          Icon={Weight}
          label="Weight kg"
          placeholder="Weight kg"
          {...register('weightKg')}
        />

        <InputLabel
          Icon={Weight}
          label="Goal weight"
          placeholder="Goal weight"
          {...register('goalWeightKg')}
        />

        <InputLabel
          Icon={Ruler}
          label="Chest cm"
          placeholder="Chest cm"
          {...register('chestCm')}
        />

        <InputLabel
          Icon={Ruler}
          label="Waist cm"
          placeholder="Waist cm"
          {...register('waistCm')}
        />

        <InputLabel
          Icon={Ruler}
          label="Thigh cm"
          placeholder="Thigh cm"
          {...register('thighCm')}
        />

        <InputLabel
          Icon={Ruler}
          label="Arm cm"
          placeholder="Arm cm"
          {...register('armCm')}
        />
      </div>
    </div>
  )
}
