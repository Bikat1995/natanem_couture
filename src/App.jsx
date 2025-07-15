import './App.css';
import Dashboard from './Components/Dashboard.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Home />
          <About />
          <Contact />
          </>  
      } />
        <Route path="/dashboard" element={
          <>
            <Dashboard />
          </>
        } />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

