import NavigationBar from '../components/navigation/NavigationBar';
import { About } from './about/About';
import { Home } from './home/Home';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Contacts from './contacts/Contacts';
import Title from '../components/typopraphy/Title';
import { FaChevronUp } from 'react-icons/fa';
import { RxDividerHorizontal } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Academics from './academics/Academics';

// Initialize AOS
AOS.init({
  // duration: 1500, // animation duration in milliseconds
  // easing: 'easeInOutQuad',
  // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  // initClassName: 'aos-init', // class applied after initialization
  // animatedClassName: 'aos-animate', // class applied on animation
  // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  // offset: 120, // offset (in px) from the original trigger point
  // delay: 0, // values from 0 to 3000, with step 50ms
  // duration: 400, // values from 0 to 3000, with step 50ms
  // easing: 'ease', // default easing for AOS animations
  // once: false, // whether animation should happen only once - while scrolling down
  // mirror: false, // whether elements should animate out while scrolling past them
  // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation// animation easing function
});

const App = () => {
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="h-screen overflow-y-auto">
        <NavigationBar />
        <main className="h-max w-full flex-1 px-4">
          <Home />
          <About />
          <Academics />
          <Experience />
          <Projects />
          <Skills />
          <Contacts />
        </main>
        <footer className="flex flex-col bg-secondary justify-center min-h-7xl items-center p-4">
          <div
            className="text-8xl lg:text-9xl text-black text-center lg:flex justify-center lg:gap-8 items-center font-Staatliches font-medium"
          >mradul<div className="">kumar</div>
          </div>

          <div
            id="copyright"
            align="center"
            className="text-black mt-6 text-active"
          >
            {/* <div id="copyright" align="center" className="text-black"> */}
            &copy; 2024 www.your-site.com - All Rights Reserved.
            {/* <span>Last Updated : 09/07/2024 14:38:32</span> */}
          </div>
        </footer>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg transition-opacity duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </button>
      </div>
    </>
  );
};

export default App;
