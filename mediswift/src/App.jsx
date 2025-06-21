




import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import AddMedicine from './pages/AddMedicine';
import ViewMedicines from './pages/ViewMedicines';
import Cart from './pages/Cart';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-medicine" element={<AddMedicine />} />
      <Route path="/view-medicines" element={<ViewMedicines />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
