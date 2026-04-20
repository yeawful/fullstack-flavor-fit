import { useCallback, useEffect, useRef, useState } from 'react'

import {
  GetRecipesQuery,
  GetRecipesQueryVariables,
  RecipeSort,
  RecipesQueryInput
} from '@/__generated__/graphql'

interface Props {
  fetchMore: (options: {
    variables: GetRecipesQueryVariables
    updateQuery: (
      previousQueryResult: GetRecipesQuery,
      options: {
        fetchMoreResult?: GetRecipesQuery
      }
    ) => GetRecipesQuery
  }) => Promise<unknown>
  input: RecipesQueryInput
  sort: RecipeSort
  hasMore?: boolean
}

export function useFetchMoreRecipes({
  fetchMore,
  input,
  sort,
  hasMore
}: Props) {
  const [isFetchingMore, setIsFetchingMore] = useState(false)
  const pageRef = useRef(1)

  useEffect(() => {
    pageRef.current = 1
  }, [input, sort])

  const loadMore = useCallback(async () => {
    if (isFetchingMore || !hasMore) return

    const nextPage = pageRef.current + 1
    setIsFetchingMore(true)

    try {
      await fetchMore({
        variables: {
          input: {
            ...input,
            page: nextPage,
            sort
          }
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev

          return {
            ...prev,
            recipes: {
              ...fetchMoreResult.recipes,
              items: [...prev.recipes.items, ...fetchMoreResult.recipes.items]
            }
          }
        }
      })

      pageRef.current = nextPage
    } finally {
      setIsFetchingMore(false)
    }
  }, [fetchMore, hasMore, input, isFetchingMore, sort])

  return { loadMore, isFetchingMore }
}
