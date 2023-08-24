
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import {BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/menu' exact Component={Menu} />
        <Route path='/about' exact Component={About} />
        <Route path='/contact' exact Component={Contact} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
