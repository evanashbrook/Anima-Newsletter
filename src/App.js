import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Home2 from './Components/Home2';
import Movies from './Components/Movies';
import FeaturedRouter from './Components/FeaturedRouter';
import { useMediaQuery } from 'react-responsive';
import HomeMobile from './ComponentsMobile/HomeMobile';
import HomeMobile2 from './ComponentsMobile/HomeMobile2';
import BlogMobile from './ComponentsMobile/BlogMobile';
import MoviesMobile from './ComponentsMobile/MoviesMobile';

function App() {
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })
  return (
    <Router>
      <section className="App">
        {isLandscape && <div className="routes">
            <Route path="/" exact component={Home} />
            <Route path='/h' component={Home2} />
            <Route path="/blog" component={Blog} />
            <Route path="/featured" component={FeaturedRouter} />
            <Route path="/movies" component={Movies} />
          </div>}
          {isPortrait && <div className="routes-m">
            <Route path="/" exact component={HomeMobile} />
            <Route path='/h' component={HomeMobile2} />
            <Route path="/blog" component={BlogMobile} />
            <Route path="/featured" component={FeaturedRouter} />
            <Route path="/movies" component={MoviesMobile} />
          </div>}
      </section>
    </Router>
  );
}

export default App;
