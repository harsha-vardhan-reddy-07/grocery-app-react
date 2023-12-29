import logo from './logo.svg';
import './App.css';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import NavComponent from './components/NavComponent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavComponent />
      <Cart />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
