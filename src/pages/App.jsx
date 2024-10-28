import NavigationBar from '../components/navigation/NavigationBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import bgImage from '../assets/svgs/temple.svg';

// Initialize AOS
AOS.init({});

const App = () => {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen max-w-screen-2xl lg:px-12 mx-6 py-6 font-Staatliches">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
