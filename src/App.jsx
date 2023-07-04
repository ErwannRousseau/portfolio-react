import { Route, Routes } from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import Terms from './components/LegalComponents/Terms';
import Privacy from './components/LegalComponents/Privacy';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Work />
              <Contact />
            </>
          }
        />
        <Route path="/legal/conditions" element={<Terms />} />
        <Route path="/legal/confidentialite" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
