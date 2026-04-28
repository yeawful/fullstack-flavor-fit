import { Button } from '@/shared/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'

export function DashboardAddRecipeBanner() {
  return (
    <div className="from-primary-dark to-primary relative rounded-2xl bg-linear-to-r p-5 pt-2 text-white">
      <Image
        src="/images/stars.svg"
        alt="Stars"
        width={70}
        height={70}
        draggable={false}
        priority
      />

      <h2 className="text-3xl leading-none font-black tracking-[-0.02em] italic">
        Got a Recipe That Rocks?
      </h2>

      <p className="mt-2 text-sm text-white/80">
        Share It &amp; Shine! Your recipe might just become the next big hit!
      </p>

      <Button
        type="button"
        variant="outline"
        className="hover:text-primary mt-3 w-full rounded-full border-white bg-transparent px-5 py-2 text-center text-white hover:bg-white/90"
      >
        <Plus />
        Add Recipe
      </Button>
    </div>
  )
}
