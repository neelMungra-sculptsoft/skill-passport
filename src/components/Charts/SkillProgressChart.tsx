import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { Session } from '../../types'

interface SkillProgressChartProps {
  sessions: Session[]
  skillName: string
}

export default function SkillProgressChart({ sessions, skillName }: SkillProgressChartProps) {
  const data = sessions.map((s) => ({ session: s.sessionId, score: s.score }))

  return (
    <div className="bg-surface border border-border rounded-lg shadow-card p-4">
      <p className="text-[13px] font-semibold text-text mb-2">Skill Progress</p>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 10, right: 16, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
          <XAxis
            dataKey="session"
            tick={{ fontSize: 11, fill: 'var(--color-text-soft)' }}
            axisLine={false}
            tickLine={false}
            label={{
              value: 'Session Number',
              position: 'insideBottom',
              offset: -2,
              fontSize: 11,
              fill: 'var(--color-text-soft)',
            }}
          />
          <YAxis
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={{ fontSize: 11, fill: 'var(--color-text-soft)' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              fontSize: 12,
              borderRadius: 6,
              border: '1px solid var(--color-border)',
            }}
            labelFormatter={(v) => `Session ${v}`}
          />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 4 }} formatter={() => skillName} />
          <Line
            type="monotone"
            dataKey="score"
            stroke="var(--color-accent)"
            strokeWidth={2}
            dot={{ r: 4, fill: 'var(--color-accent)', strokeWidth: 0 }}
            activeDot={{ r: 5 }}
            name={skillName}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
