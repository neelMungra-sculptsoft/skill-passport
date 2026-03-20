import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import CategoryDetail from './pages/CategoryDetail/CategoryDetail'
import SkillDetail from './pages/SkillDetail/SkillDetail'
import InnovationDetail from './pages/InnovationDetail/InnovationDetail'
import { mockData } from './data/mockData'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header learner={mockData.learner} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category/:categoryId" element={<CategoryDetail />} />
            <Route path="/skill/:skillId" element={<SkillDetail />} />
            <Route path="/innovation/:innovationId" element={<InnovationDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
