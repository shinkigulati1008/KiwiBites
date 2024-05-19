import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import Login from './pages/Login/Login';
import Checkout from './pages/Checkout/Checkout';
import User from './pages/User/User';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;
