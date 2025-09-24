import { Routes, Route } from "react-router";
import axios from 'axios';
import './App.css';
import { HomePage } from '../Pages/Home/HomePage';
import { CheckoutPage } from '../Pages/Checkout/CheckoutPage';
import { OrderPage } from '../Pages/Order/OrderPage';
import { useEffect,useState } from "react";


 function App() {
    const [cart,setCart] = useState([]);

    const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');

    setCart(response.data);
  };
    useEffect(() => {
      loadCart();
    }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />}></Route>
      <Route path='checkout' element={<CheckoutPage cart={cart}  />}></Route>
      <Route path='order' element={<OrderPage cart={cart}  />}></Route>

    </Routes>
  );
}

export default App;
