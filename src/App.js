import { Container } from "@mui/material/";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import { Evaluations } from "./Pages/Evaluations/Evaluations";
import Consults from "./Pages/Consults/Consults";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Divider from "./Components/Divider/Divider";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Divider />
      <About />
      <Consults />
      <Evaluations />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
