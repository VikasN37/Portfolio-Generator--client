import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Portfolio } from './pages'
import { Sidebar } from './containers/Sidebar'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  )
}
