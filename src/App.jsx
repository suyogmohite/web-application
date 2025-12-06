import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FormPage from './pages/FormPage'
import DisplayPage from './pages/DisplayPage'

function App() {

  return (
    <>
      <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
