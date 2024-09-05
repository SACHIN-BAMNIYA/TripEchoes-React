import React from 'react';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import AddTrip from './pages/AddTrip';
import Help from './pages/Help';
import AboutUs from './pages/Aboutus';
import Home from './pages/Home';
import Footer from './pages/Footer';

// App Component
const App = () => {
  return (
    <>
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <section id="Aboutus">
        <AboutUs />
      </section>
      <section id="Explore">
        <Explore />
      </section>
      <section id="AddTrip">
        <AddTrip />
      </section>
      <section id="Help">
        <Help />
      </section>
      <Footer />
    </>
  );
};

export default App;
