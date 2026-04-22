import { Input } from '@/shared/components/ui/input'
import { Reference } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { ArrowUp, Loader2 } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { AddNewCommemtDocument } from '@/__generated__/graphql'

interface Props {
  recipeId?: string
}

export function AddNewComment({ recipeId }: Props) {
  const [comment, setComment] = useState('')

  const [mutate, { loading }] = useMutation(AddNewCommemtDocument, {
    onCompleted() {
      setComment('')
      toast.success('Comment added successfully')
    },
    update(cache, { data }) {
      const newComment = data?.createComment

      if (!newComment || !recipeId) return

      cache.modify({
        id: cache.identify({
          __typename: 'RecipeModel',
          id: recipeId
        }),

        fields: {
          comments(
            existingComments: ReadonlyArray<Reference> = [],
            { readField, toReference }
          ) {
            const newCommentRef = toReference(newComment)

            if (!newCommentRef) {
              return existingComments
            }

            const alreadyExists = existingComments.some(item => {
              return readField('id', item) === newComment.id
            })

            if (alreadyExists) {
              return existingComments
            }

            return [...existingComments, newCommentRef]
          }
        }
      })
    }
  })

  return (
    <form
      className="focus-within:border-primary/80 border-border mt-4 flex w-full items-center gap-2 rounded-4xl border-2 px-3 py-1 transition-colors"
      onSubmit={e => {
        e.preventDefault()
        if (recipeId && comment.trim()) {
          mutate({ variables: { input: { recipeId, content: comment } } })
        }
      }}
    >
      <Input
        type="text"
        placeholder="Add a new comment..."
        value={comment}
        onChange={e => setComment(e.target.value)}
        className="p-0 text-[0.95rem] tracking-normal"
      />
      <button
        className="rounded-full bg-[#222] p-1 text-white transition-colors hover:bg-[#222]/90 disabled:bg-gray-400"
        disabled={loading || !comment.trim()}
        type="submit"
      >
        {loading ? (
          <Loader2 className="size-5 animate-spin" />
        ) : (
          <ArrowUp className="size-5" />
        )}
      </button>
    </form>
  )
}
