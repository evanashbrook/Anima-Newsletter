import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Author from './Components/Author';
import Home2 from './Components/Home2';
import Movies from './Components/Movies';

function App() {
  return (
    <Router>
      <section className="App">
        <div className="routes">
            <Route path="/" exact component={Home} />
            <Route path='/h' component={Home2} />
            <Route path="/blog" component={Blog} />
            <Route path="/author" component={Author} />
            <Route path="/movies" component={Movies} />
          </div>
      </section>
    </Router>
  );
}

export default App;
