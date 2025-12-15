import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './Pages/home/home.tsx';
import AlimentosInfo from './components/alimentos/AlimentosInfo.jsx'; 
import './components/alimentos/alimentosinfo.css'; 

import MenuMovil from './components/header/desplegable.tsx';
import HeaderPC from './components/header/header.tsx';
import Footer from './components/footer/footer.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderPC />
        <MenuMovil />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alimentos" element={<AlimentosInfo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
