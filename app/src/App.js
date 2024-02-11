// App.js
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import './App.css'; // Import the CSS file
import { Outlet } from 'react-router-dom';
import Users from './components/Users';

const App = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>

      <div className='outlate'>
      <Outlet></Outlet>
      </div>
      <Users></Users>
      <footer className='footer'>
        <Footer />
      </footer>
    
    </div>
  );
};

export default App;