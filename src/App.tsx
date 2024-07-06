import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Portfolio } from './pages'
import { Sidebar } from './containers/Sidebar'
import { About } from './pages/About'
import { Skills } from './pages/Skills'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='portfolio' element={<Portfolio />}>
          <Route index path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
