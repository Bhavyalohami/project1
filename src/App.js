import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Programs from "./components/Programs";
import About from "./components/About";
import Outcomes from "./components/Outcomes";
import Resources from "./components/Resources";
import Pricing from "./components/Pricing";
import Showcase from "./components/Showcase";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/kinetic.scss";
import "./styles/mediaquery.scss";
import Services from "./components/Services";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
