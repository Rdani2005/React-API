// ---------- Libraries --------------
import { Routes, Route } from 'react-router-dom'
// --------- Files -----------------
import HomePage from './views/HomePage'
import Cripto from './views/Cripto'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './views/Movies'

function App() {


  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/cripto" element={<Cripto />} />
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
