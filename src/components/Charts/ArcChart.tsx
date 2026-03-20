interface ArcChartProps {
  score: number
  max?: number
  size?: number
  strokeWidth?: number
}

export default function ArcChart({ score, max = 5, size = 120, strokeWidth = 10 }: ArcChartProps) {
  const radius = (size - strokeWidth) / 2
  const cx = size / 2
  const cy = size / 2
  const startAngle = 135
  const totalArcDeg = 270
  const fraction = Math.min(score / max, 1)
  const filledDeg = totalArcDeg * fraction

  function polarToCartesian(angleDeg: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
  }

  function describeArc(startDeg: number, endDeg: number) {
    const start = polarToCartesian(startDeg)
    const end = polarToCartesian(endDeg)
    const largeArc = endDeg - startDeg > 180 ? 1 : 0
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`
  }

  const endAngle = startAngle + totalArcDeg
  const filledEndAngle = startAngle + filledDeg

  return (
    <svg width={size} height={size}>
      <path
        d={describeArc(startAngle, endAngle)}
        fill="none"
        stroke="var(--color-accent-track)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {fraction > 0 && (
        <path
          d={describeArc(startAngle, filledEndAngle)}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      )}
      <text
        x={cx}
        y={cy + 6}
        textAnchor="middle"
        fontSize="28"
        fontWeight="400"
        fill="var(--color-text)"
      >
        {score}
      </text>
    </svg>
  )
}
