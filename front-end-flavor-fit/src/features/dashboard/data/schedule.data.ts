import { type IScheduleItem } from '../types/dashboard-types'

export const SCHEDULE_ITEMS: IScheduleItem[] = [
  {
    id: '1',
    startTime: '08:00',
    endTime: '08:10',
    title: 'Water Intake',
    type: 'water',
    isCompleted: true,
    kcal: null,
    durationMinutes: 10,
    mealTag: null,
    muscleGroup: null
  },
  {
    id: '2',
    startTime: '08:00',
    endTime: '08:30',
    title: 'Avocado Toast with Poached Egg',
    type: 'meal',
    isCompleted: true,
    kcal: 320,
    durationMinutes: 15,
    mealTag: 'Breakfast',
    muscleGroup: null
  },
  {
    id: '3',
    startTime: '12:30',
    endTime: '13:00',
    title: 'Quinoa & Kale Salad with Lemon Vinaigrette',
    type: 'meal',
    isCompleted: false,
    kcal: 450,
    durationMinutes: 20,
    mealTag: 'Lunch',
    muscleGroup: null
  },
  {
    id: '4',
    startTime: '13:00',
    endTime: '13:10',
    title: 'Water Intake',
    type: 'water',
    isCompleted: false,
    kcal: null,
    durationMinutes: 10,
    mealTag: null,
    muscleGroup: null
  },
  {
    id: '5',
    startTime: '16:00',
    endTime: '16:45',
    title: 'Workout (Strength Training)',
    type: 'workout',
    isCompleted: false,
    kcal: null,
    durationMinutes: 45,
    mealTag: null,
    muscleGroup: 'Upper body muscles'
  },
  {
    id: '6',
    startTime: '19:00',
    endTime: '19:30',
    title: 'Avocado Toast with Poached Egg',
    type: 'meal',
    isCompleted: false,
    kcal: 320,
    durationMinutes: 15,
    mealTag: 'Dinner',
    muscleGroup: null
  }
]
