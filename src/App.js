import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import ViewMovie from "./Components/ViewMovie";
import DisplayCarousels from "./Components/DisplayCarousels"
import API_KEY from './Helpers/key';





function App() {
  return (
    <div className="App scrollbar">
      <Navbar />
      <Landing />
      <DisplayCarousels />



      <ViewMovie />
      <Footer />
    </div>
  );
}

export default App;
