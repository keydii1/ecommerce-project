import { Routes, Route } from "react-router";
import axios from 'axios';
import './App.css';
import { HomePage } from '../Pages/HomePage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import { OrderPage } from '../Pages/OrderPage';
import { useEffect,useState } from "react";


 function App() {
    const [cart,setCart] = useState([]);
    const [paymentSummary,setPaymentSummary] = useState(null);
    useEffect(() => {
    axios.get('/api/cart-items?expand=product')
  .then((response) => {
    setCart(response.data);
  })

    });
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />}></Route>
      <Route path='checkout' element={<CheckoutPage cart={cart}  />}></Route>
      <Route path='order' element={<OrderPage cart={cart}  />}></Route>

    </Routes>
  );
}

export default App;
