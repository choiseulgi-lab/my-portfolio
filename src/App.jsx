import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  )
}
