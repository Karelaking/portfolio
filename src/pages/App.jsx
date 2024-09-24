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

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="h-screen overflow-y-auto">
        <NavigationBar />
        <main className="h-max w-full flex-1 bg-blue-50 px-4">
          {/* <Home /> */}
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contacts />
        </main>
        <footer className="flex flex-col justify-center min-h-7xl items-center bg-blue-200 p-4 text-white">
          <Title first="mradul" second="katiyar" />

          <div id="copyright" align="center" className='text-black mt-6'>
            &copy; 2024 www.your-site.com - All Rights Reserved.
            {/* <span>Last Updated : 09/07/2024 14:38:32</span> */}
          </div>
        </footer>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </button>
      </div>
    </>
  );
};

export default App;
