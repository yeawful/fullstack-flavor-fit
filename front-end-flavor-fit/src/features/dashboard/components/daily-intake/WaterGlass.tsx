export function WaterGlass({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 32"
      className="h-16 w-14"
    >
      <path
        d="M4 8 L6 28 Q6 30 8 30 L16 30 Q18 30 18 28 L20 8 Z"
        fill={filled ? '#a3d0fb' : '#eaf4fd'}
        stroke={filled ? '#87bbe9' : '#afceed'}
        strokeWidth={1}
      />
      {filled && (
        <path
          d="M6.5 14 Q12 11 17.5 14 L18.2 10 L5.8 10 Z"
          fill="#e9f5fd"
          opacity={0.6}
        />
      )}
    </svg>
  )
}
