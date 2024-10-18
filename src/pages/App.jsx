import NavigationBar from '../components/navigation/NavigationBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';

// Initialize AOS
AOS.init({});

const App = () => {
  return (
    <>
      <NavigationBar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-12 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
