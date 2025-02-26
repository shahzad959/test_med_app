import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Navbar from './Components/Navbar/Navbar'; // Import the Navbar component
import Landing_Page from './Components/Landing_Page/Landing_Page'; // Import the Landing_Page component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} /> {/* Route for the Landing_Page */}
          <Route path="/services" element={<h1>Services Page</h1>} /> {/* Example route for the services page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;