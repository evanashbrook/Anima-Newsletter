import React, { useEffect, useRef } from 'react'
import './App.css';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import HB from './Assets/SVG/HomeButton.svg'
import CB from './Assets/SVG/CatalogButton.svg'
import MB from './Assets/SVG/MoviesButton.svg'
import BB from './Assets/SVG/BlogButton.svg'
import Movies from './Components/Movies';
import FeaturedRouter from './Components/FeaturedRouter';
import { useMediaQuery } from 'react-responsive';
import MoviesMobile from './ComponentsMobile/MoviesMobile';
import Catalog from './Components/Catalog';
import NewHome from './Components/NewHome';
import NewHomeMobile from './ComponentsMobile/NewHomeMobile';
import picture from './Assets/IntrinsiclogoF2.svg'
import rectangle1 from './Assets/SVG/rec1.svg'
import rectangle2 from './Assets/SVG/rec2.svg'
import rectangle3 from './Assets/SVG/rec3.svg'
import culture from './Assets/SVG/CultureArt.svg'
import and from './Assets/SVG/AndArt.svg'
import philosophy from './Assets/SVG/PhilosophyArt.svg'
import gsap from 'gsap';
import Appm from './Appm';
import Appd from './Appd';


function App() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  return (
    <Router>
        {isLandscape && <Appd />}
        {isPortrait && <Appm />}
    </Router>
  );
}

export default App;
