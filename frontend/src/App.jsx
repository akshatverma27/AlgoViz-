import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import KMP from './pages/KMP';
import Huffman from './pages/Huffman';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kmp" element={<KMP />} />
        <Route path="/huffman" element={<Huffman />} />
      </Routes>
    </Router>
  );
}

export default App;
