import "./styles/style.min.css";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Nous from "./pages/Nous";
import Contact from "./pages/Contact";
import Activite from "./pages/Activite";
import Partenaires from "./pages/Partenaires";
import Produits from "./pages/Produits";
import Apps from "./pages/Apps";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/nous" element={<Nous />} />
        <Route exact path="/activite" element={<Activite />} />
        <Route exact path="/produits" element={<Produits />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
