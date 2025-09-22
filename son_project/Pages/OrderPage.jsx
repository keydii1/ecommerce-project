import { Header } from "./Header";
import axios from 'axios';
import "./OrderPage.css";
import { formatMoney } from "../src/utils/money";
import { Fragment, useEffect } from "react";
import dayjs from "dayjs";
export function OrderPage({cart}) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get('/api/orders?expand=products')
    .then((Response) => {
      setOrders(Response.data);
    })
  },[]);
  return (
    <>
      <Header  cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <div className="orders-grid">
        {orders.map(() => {
          return (
            <div key={orders.id} className="order-container">
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>{dayjs(orders.orderTimeMs).format(' dddd, MMMM D')}</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>{formatMoney(orders.totalCostCents)}</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>{orders.id}</div>
              </div>
            </div>

            <div className="order-details-grid">
              {order.products.map((orderProduct) => {
                return (
                  <Fragment key={orderProduct.product.id}>
                <div className="product-image-container">
                <img src={orderProduct.product.image} />
              </div>

              <div className="product-details">
                <div className="product-name">
                  {orderProduct.product.name}
                </div>
                <div className="product-delivery-date">
                  Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                </div>
                <div className="product-quantity">Quantity: {orderProduct.quantity}</div>
                <button className="buy-again-button button-primary">
                  <img
                    className="buy-again-icon"
                    src="images/icons/buy-again.png"
                  />
                  <span className="buy-again-message">Add to Cart</span>
                </button>
              </div>

              <div className="product-actions">
                <a href="tracking.html">
                  <button className="track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
              </Fragment>

                )

              })}
            </div>
          </div>
          )
        })}
        </div>
      </div>
    </>
  );
}
