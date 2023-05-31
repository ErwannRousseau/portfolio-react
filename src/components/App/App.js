import { Route, Routes } from 'react-router-dom';

import Navbar from 'src/components/Navbar/Navbar';
import About from 'src/components/About/About';
import Contact from 'src/components/Contact/Contact';
import Home from 'src/components/Home/Home';
import Skills from 'src/components/Skills/Skills';
import Work from 'src/components/Work/Work';
import Footer from '../Footer/Footer';
import Terms from '../LegalComponents/Terms';
import Privacy from '../LegalComponents/Privacy';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Work />
              <Contact />
            </>
          )}
        />
        <Route
          path="/legal/conditions"
          element={(<Terms />)}
        />
        <Route
          path="/legal/confidentialite"
          element={(<Privacy />)}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
