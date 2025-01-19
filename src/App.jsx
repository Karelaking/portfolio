import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Home } from "./pages/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="w-screen h-full sm:h-screen box-border m-0 p-0">
      <Home/>
    </section>
  )
}

export {App};
