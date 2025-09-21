import { Routes, Route } from "react-router";
import './App.css';
import { HomePage } from '../Pages/HomePage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import { OrderPage } from '../Pages/OrderPage';


 function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='checkout' element={<CheckoutPage />}></Route>
      <Route path='order' element={<OrderPage />}></Route>

    </Routes>
  );
}

export default App;
