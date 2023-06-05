import "./App.css";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import SignUP from "./components/SignUp";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Analytics />
      <SignUP />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
