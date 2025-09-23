import { formatMoney } from "../../src/utils/money";
import dayjs from "dayjs";
export function DeliveryOption ({deliveryOptions,cartItem}) {
    return (
                
                      <div className="delivery-options">
                        <div className="delivery-options-title">
                          Choose a delivery option:
                        </div>
                        {deliveryOptions.map((deliveryOption) => {
                          let priceString  = 'FREE SHIPPING';
        
                          if(deliveryOption.priceCents > 0){
                            priceString= `${formatMoney(deliveryOption.priceCents)} - Shipping`
                          }
                          return (
                            <>
                        <div key={deliveryOption.id} className="delivery-option">
                          <input type="radio" checked={deliveryOption.id === cartItem.deliveryOptionId}
                            className="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                          <div>
                            <div className="delivery-option-date">
                              {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div className="delivery-option-price">
                              {priceString}
                            </div>
                          </div>
                        </div>
                            </>
                          )
                        })}
        
                      </div>
    )
}