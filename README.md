# Lumi — Skill Passport

A frontend replica of the Lumi Skill Passport web application. It provides learners with a visual, evidence-backed snapshot of their skill progression across courses, sessions, and assignments — including scores, session feedback, evidence carousels, certifications, and innovations.

---

## Stack

| Layer           | Technology                                         |
| --------------- | -------------------------------------------------- |
| Framework       | React 19                                           |
| Language        | TypeScript 5.9                                     |
| Build tool      | Vite 8                                             |
| Styling         | Tailwind CSS v4 (via `@tailwindcss/vite` plugin)   |
| Routing         | React Router DOM v7                                |
| Charts          | Recharts v3 + custom SVG arc chart                 |
| Icons           | Lucide React                                       |
| Package manager | pnpm                                               |
| Linting         | ESLint v9 (flat config)                            |
| Formatting      | Prettier v3                                        |
| Pre-commit      | Husky v9 + lint-staged                             |
| Compiler        | React Compiler (via `babel-plugin-react-compiler`) |

> No backend or API. All data is static and hardcoded in `src/data/mockData.ts`.

---

## Major Packages

| Package                       | Version  | Purpose                                  |
| ----------------------------- | -------- | ---------------------------------------- |
| `react`                       | ^19.2.4  | UI framework                             |
| `react-dom`                   | ^19.2.4  | DOM renderer                             |
| `react-router-dom`            | ^7.13.1  | Client-side routing                      |
| `recharts`                    | ^3.8.0   | Line chart for skill progress            |
| `lucide-react`                | ^0.577.0 | Icon set                                 |
| `tailwindcss`                 | ^4.2.2   | Utility-first CSS framework              |
| `@tailwindcss/vite`           | ^4.2.2   | Vite plugin for Tailwind v4              |
| `vite`                        | ^8.0.1   | Dev server and bundler                   |
| `typescript`                  | ~5.9.3   | Static typing                            |
| `eslint`                      | ^9.39.4  | Code linting                             |
| `prettier`                    | ^3.8.1   | Code formatting                          |
| `husky`                       | ^9.1.7   | Git hooks                                |
| `lint-staged`                 | ^16.4.0  | Run linters on staged files              |
| `babel-plugin-react-compiler` | ^1.0.0   | Automatic memoization via React Compiler |

---

## Local Development

### Prerequisites

- Node.js >= 18
- pnpm installed globally (`npm install -g pnpm`)

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd skills-passport

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The app will be available at `http://localhost:5173` by default.

---

## Scripts

| Command             | Description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `pnpm dev`          | Starts the Vite development server with hot module replacement (HMR)                                    |
| `pnpm build`        | Type-checks the project with `tsc -b` then produces an optimised production bundle in `dist/`           |
| `pnpm preview`      | Serves the production build locally so you can verify the `dist/` output before deploying               |
| `pnpm lint`         | Runs ESLint across all `*.ts` / `*.tsx` files and reports any rule violations                           |
| `pnpm format`       | Runs Prettier and **writes** formatted output to all files in the project                               |
| `pnpm format:check` | Runs Prettier in check mode — exits with an error if any file is not formatted, without writing changes |
| `pnpm prepare`      | Installs Husky git hooks (runs automatically after `pnpm install`)                                      |

---

## Folder Architecture

```
skills-passport/
├── public/
│   └── favicon.svg                     # Lumi branded favicon
│
├── src/
│   ├── assets/                         # Static assets (logo, images)
│   │
│   ├── components/                     # Reusable UI components grouped by concern
│   │   ├── Charts/
│   │   │   ├── ArcChart.tsx            # Custom SVG 270° arc/donut chart
│   │   │   └── SkillProgressChart.tsx  # Recharts line chart for session scores
│   │   ├── Header/
│   │   │   ├── Header.tsx              # Root header — owns expand/mobile menu state
│   │   │   ├── HeaderDescription.tsx   # Expandable description panel
│   │   │   ├── MobileMenu.tsx          # Full-screen mobile navigation overlay
│   │   │   └── SocialLinks.tsx         # Social icon links row
│   │   ├── Modals/
│   │   │   ├── CertificateModal.tsx    # Certificate preview modal with download action
│   │   │   └── ScoreInfoModal.tsx      # Score rubric modal (opened via ⓘ in header)
│   │   └── Skill/
│   │       ├── EvidenceCarousel.tsx    # Horizontally scrollable assignment evidence carousel
│   │       └── SessionFeedback.tsx     # Per-session feedback with Prev/Next navigation
│   │
│   ├── data/
│   │   ├── mockData.ts                 # All static learner/course/skill/session data
│   │   └── socialLinks.ts             # Lumi social media link definitions
│   │
│   ├── pages/                          # Route-level page components grouped by page
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.tsx           # Main landing page — composes all sections
│   │   │   ├── CourseSelector.tsx      # Dropdown to switch active course
│   │   │   ├── CategorySection.tsx     # Arc chart cards for each skill category
│   │   │   ├── CertificationsSection.tsx  # Certifications & Awards thumbnail grid
│   │   │   └── InnovationsSection.tsx  # Innovation project cards
│   │   ├── CategoryDetail/
│   │   │   └── CategoryDetail.tsx      # Category arc + list of skills with scores
│   │   ├── SkillDetail/
│   │   │   └── SkillDetail.tsx         # Skill overview, evidence carousels, progress chart, feedback
│   │   └── InnovationDetail/
│   │       └── InnovationDetail.tsx    # Hero image, problem/solution cards, video embed
│   │
│   ├── App.tsx                         # BrowserRouter setup and route definitions
│   ├── main.tsx                        # React DOM entry point
│   ├── types.ts                        # All shared TypeScript interfaces
│   └── index.css                       # Tailwind import, @theme tokens, base layer styles
│
├── index.html                          # HTML entry point
├── vite.config.ts                      # Vite config — Tailwind, React, React Compiler plugins
├── tsconfig.json                       # TypeScript composite project references
├── tsconfig.app.json                   # TS config for src/ (app code)
├── tsconfig.node.json                  # TS config for vite.config.ts (Node environment)
├── eslint.config.js                    # ESLint v9 flat config
├── .prettierrc                         # Prettier config (no semis, single quotes, 100-char width)
├── .prettierignore                     # Files excluded from Prettier
└── package.json                        # Dependencies and scripts
```

---

## Design Tokens

Global CSS variables are defined in `src/index.css` under `@theme` and are available as Tailwind utility classes throughout the app:

| Token                | Value     | Usage                        |
| -------------------- | --------- | ---------------------------- |
| `--color-navy`       | `#11102f` | Header background            |
| `--color-accent`     | `#22c55e` | Scores, chart line, arc fill |
| `--color-primary`    | `#3b82f6` | Links, selected states       |
| `--color-surface`    | `#ffffff` | Card backgrounds             |
| `--color-border`     | `#e5e7eb` | All borders                  |
| `--color-text`       | `#111827` | Primary text                 |
| `--color-text-muted` | `#6b7280` | Secondary text               |
| `--shadow-card`      | subtle    | Default card shadow          |
| `--shadow-card-md`   | elevated  | Hover/active card shadow     |
