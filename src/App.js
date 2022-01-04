// ---------- Libraries --------------
import { Routes, Route } from 'react-router-dom'
// --------- Files -----------------
import HomePage from './views/HomePage'
import Cripto from './views/Cripto'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/cripto" element={<Cripto />} />
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
