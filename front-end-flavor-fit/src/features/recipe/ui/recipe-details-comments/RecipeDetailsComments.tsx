import { recipeCardFooterTextVariants } from '@/shared/components/custom-ui/recipe-card/styles/recipe-card.styles'
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
    <div>
      <div className={`mb-3 flex items-center`}>
        <MessageCircleMore className="mr-2 opacity-70" />
        <h2 className="text-xl font-semibold text-[#222222]">Comments</h2>
        <div className="rouned ml-1 bg-gray-200 p-0.5 text-gray-500">
          {comments?.length}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className={recipeCardFooterTextVariants({ size: 'default' })}>
          <Heart className={'size-4'} />
          {formatCompactNumber(likes)}
        </span>

        <span className={recipeCardFooterTextVariants({ size: 'default' })}>
          <Eye className={'size-4'} />
          {formatCompactNumber(views)}
        </span>
      </div>

      {comments?.length ? (
        comments.map(comment => (
          <div
            key={comment.id}
            className="mt-4 rounded-lg bg-gray-100 p-4"
          >
            <div className="flex items-center gap-1">
              <Image
                src={comment?.author.avatarUrl || ''}
                alt={comment?.author.profile?.fullName || ''}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
                draggable={false}
              />
              <span>@{comment?.author.profile?.fullName || 'anonymous'}</span>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800">
                {comment.content}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          No comments yet. Be the first to comment!
        </p>
      )}

      <AddNewComment recipeId={recipeId} />
    </div>
  )
}
