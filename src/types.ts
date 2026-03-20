export interface Session {
  sessionId: number
  score: number
  feedback: {
    good: string
    improve: string
  }
}

export interface Assignment {
  title: string
  type: 'image' | 'text' | 'video'
  url: string
}

export interface Skill {
  id: string
  name: string
  description: string
  overallScore: number
  sessions: Session[]
  assignments: Assignment[]
}

export interface Category {
  id: string
  name: string
  score: number
  skills: Skill[]
}

export interface Certificate {
  id: string
  title: string
  recipient: string
  program: string
  imageUrl: string
}

export interface Innovation {
  id: string
  title: string
  completedOn: string
  subtitle: string
  tag: string
  imageUrl: string
  problem: string
  solution: string
  videoUrl?: string
}

export interface Course {
  id: string
  name: string
  categories: Category[]
  certificates: Certificate[]
  innovations: Innovation[]
}

export interface LearnerData {
  learner: string
  courses: Course[]
}
