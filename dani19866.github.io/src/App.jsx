import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from "./routes/Index.jsx"
import Projects from './routes/Projects.jsx';
import Skills from './routes/Skills.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" pa element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  )
}

export default App
