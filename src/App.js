
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import { Evaluations } from "./Pages/Evaluations/Evaluations";
import Consults from "./Pages/Consults/Consults";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Consults />
      <Evaluations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
