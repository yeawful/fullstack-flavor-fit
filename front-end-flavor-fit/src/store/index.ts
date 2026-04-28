import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { ICartItem } from './types'

interface IStore {
  items: ICartItem[]

  addItem: (item: ICartItem) => void
  addItems: (items: ICartItem[]) => void

  removeItem: (id: string, unit?: string) => void
  removeItems: (ids: string[]) => void
  clearCart: () => void

  getTotalPrice: () => number
}

export const useIngredientsCartStore = create<IStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: item => {
        set(state => {
          const existingItem = state.items.find(
            cartItem => cartItem.id === item.id && cartItem.unit === item.unit
          )

          if (!existingItem) {
            return {
              items: [...state.items, item]
            }
          }

          return {
            items: state.items.map(cartItem => {
              if (cartItem.id === item.id && cartItem.unit === item.unit) {
                return {
                  ...cartItem,
                  quantity: cartItem.quantity + item.quantity
                }
              }

              return cartItem
            })
          }
        })
      },

      addItems: items => {
        const { addItem } = get()

        items.forEach(addItem)
      },

      removeItem: (id, unit) => {
        set(state => ({
          items: state.items.filter(item => {
            if (unit) {
              return !(item.id === id && item.unit === unit)
            }

            return item.id !== id
          })
        }))
      },

      removeItems: ids => {
        set(state => ({
          items: state.items.filter(item => !ids.includes(item.id))
        }))
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )
      }
    }),
    {
      name: 'ingredients-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({
        items: state.items
      })
    }
  )
)
