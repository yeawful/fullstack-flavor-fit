import { Input } from '@/shared/components/ui/input'
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
    onCompleted: () => {
      setComment('')
      toast.success('Comment added successfully')
    },
    updateQueries: {}
  })

  return (
    <div className="focus-within:border-primary mt-4 flex w-full items-center gap-2 rounded-xl border border-transparent p-2 transition-colors">
      <Input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button
        className="rounded-full bg-[#222] p-2 text-white transition-colors hover:bg-[#222]/90 disabled:bg-gray-400"
        disabled={loading || !comment.trim()}
        onClick={() =>
          recipeId &&
          mutate({ variables: { input: { recipeId, content: comment } } })
        }
      >
        {loading ? <Loader2 className="animate-spin" /> : <ArrowUp />}
      </button>
    </div>
  )
}
