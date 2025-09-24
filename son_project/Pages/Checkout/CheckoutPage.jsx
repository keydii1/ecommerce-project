import { Header } from "../Header"
import { OrderSummary } from "./OrderSummary"
import './CheckoutPage.css'
import axios from 'axios';
import { PaymentSummary } from "./PaymentSummary"
import {useState, useEffect} from 'react'
export function CheckoutPage({cart}) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary,setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () =>{
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(response.data);
 
    response =  await axios.get('/api/payment-summary')
    setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, []);
  return (
    <>
    <title>Checkout Page</title>
    <Header cart={cart} />
    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
        <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />
        <PaymentSummary paymentSummary={paymentSummary} />
      </div>
    </div>
    </>
  )
}
