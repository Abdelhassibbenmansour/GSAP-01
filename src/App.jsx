import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger,SplitText);
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
