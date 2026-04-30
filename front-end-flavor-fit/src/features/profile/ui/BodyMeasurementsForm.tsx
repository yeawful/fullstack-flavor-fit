import { InputLabel } from '@/shared/components/custom-ui/with-label/InputLabel'
import { SelectLabel } from '@/shared/components/custom-ui/with-label/SelectLabel'
import { Activity, Goal, Ruler, Weight } from 'lucide-react'
import Image from 'next/image'
import { Controller, UseFormReturn } from 'react-hook-form'

import { ActivityLevel, Gender, NutritionGoal } from '@/__generated__/graphql'

import { TProfileForm } from '../types/profile-update.types'

export function BodyMeasurementsForm({
  form
}: {
  form: UseFormReturn<TProfileForm>
}) {
  const { register, watch } = form

  const gender = watch('profile.gender')

  const imageSrc =
    gender === Gender.Male ? '/images/men.png' : '/images/women.png'

  return (
    <div className="flex items-center gap-6 rounded-xl border p-6">
      <Image
        src={imageSrc}
        alt="Person"
        width={200}
        height={1000}
        className="mb-6 rounded-lg"
      />
      <div>
        <h2 className="mb-6 text-lg font-semibold">Body measurements</h2>

        <div className="grid grid-cols-2 gap-4">
          <InputLabel
            Icon={Ruler}
            label="Height cm"
            placeholder="Height cm"
            {...register('measurements.heightCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Weight}
            label="Weight kg"
            placeholder="Weight kg"
            {...register('measurements.weightKg', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Weight}
            label="Goal weight"
            placeholder="Goal weight"
            {...register('measurements.goalWeightKg', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Chest cm"
            placeholder="Chest cm"
            {...register('measurements.chestCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Waist cm"
            placeholder="Waist cm"
            {...register('measurements.waistCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Thigh cm"
            placeholder="Thigh cm"
            {...register('measurements.thighCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <InputLabel
            Icon={Ruler}
            label="Arm cm"
            placeholder="Arm cm"
            {...register('measurements.armCm', {
              setValueAs: value => (value === '' ? undefined : Number(value))
            })}
          />

          <Controller
            control={form.control}
            name="measurements.nutritionGoal"
            render={({ field }) => (
              <SelectLabel
                value={field.value}
                onChange={field.onChange}
                label="Set your nutrition goals"
                Icon={Goal}
                options={[
                  {
                    label: 'Lose weight',
                    value: NutritionGoal.WeightLoss
                  },
                  {
                    label: 'Maintain weight',
                    value: NutritionGoal.Maintenance
                  },
                  {
                    label: 'Gain muscle',
                    value: NutritionGoal.MuscleGain
                  }
                ]}
              />
            )}
          />

          <Controller
            control={form.control}
            name="measurements.activityLevel"
            render={({ field }) => (
              <SelectLabel
                value={field.value}
                onChange={field.onChange}
                label="Define your activity level"
                Icon={Activity}
                options={[
                  {
                    label: 'Lightly active',
                    value: ActivityLevel.Light
                  },
                  {
                    label: 'Moderately active',
                    value: ActivityLevel.Moderate
                  },
                  {
                    label: 'Active',
                    value: ActivityLevel.Active
                  },

                  {
                    label: 'Sedentary',
                    value: ActivityLevel.Sedentary
                  },
                  {
                    label: 'Very active',
                    value: ActivityLevel.VeryActive
                  }
                ]}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}
