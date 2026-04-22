import { recipeCardFooterTextVariants } from '@/shared/components/custom-ui/recipe-card/styles/recipe-card.styles'
import dayjs from 'dayjs'
import { Eye, Heart, MessageCircleMore } from 'lucide-react'
import Image from 'next/image'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.utils'

import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

import { AddNewComment } from './AddNewComment'

interface Props {
  comments?: GetRecipeBySlugQuery['recipeBySlug']['comments']
  likes?: number | null
  views?: number | null
  recipeId?: string
}

export function RecipeDetailsComments({
  comments,
  likes,
  views,
  recipeId
}: Props) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-5">
      <div>
        <div className={`mb-1.5 flex items-center`}>
          <MessageCircleMore className="mr-2 opacity-70" />
          <h2 className="text-xl font-semibold text-[#222222]">Comments</h2>
          <div className="ml-1.5 rounded-lg bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
            {comments?.length}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className={recipeCardFooterTextVariants({ size: 'lg' })}>
            <Heart className={'size-4'} />
            {formatCompactNumber(likes)}
          </span>

          <span className={recipeCardFooterTextVariants({ size: 'lg' })}>
            <Eye className={'size-4'} />
            {formatCompactNumber(views)}
          </span>
        </div>

        <div className="mt-3">
          {comments?.length ? (
            comments.map(comment => (
              <div
                key={comment.id}
                className="border-border mt-4 rounded-2xl border p-3"
              >
                <div className="flex items-center gap-1.5">
                  <Image
                    src={comment?.author.avatarUrl || ''}
                    alt={comment?.author.profile?.fullName || ''}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                    draggable={false}
                  />
                  <span className="font-medium">
                    @{comment?.author.profile?.fullName || 'anonymous'}
                  </span>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-600">
                    {comment.content}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-gray-500">
                    {dayjs(comment.createdAt).format('MMMM D, YYYY')}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>

      <AddNewComment recipeId={recipeId} />
    </div>
  )
}
