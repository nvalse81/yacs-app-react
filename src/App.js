import Navbar from "./Navbar";
import Footer from './Footer';
import Home from "./pages/Home";
import Sponsors from './pages/Sponsors';
import Events from './pages/Events';
import Scholarships from './pages/Scholarships';
import Contactus from './pages/Contactus';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Navbar />
      <div className="section-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Scholarships" element={<Scholarships />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
