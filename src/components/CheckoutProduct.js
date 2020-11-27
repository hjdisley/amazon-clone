import React from 'react';
import '../styling/CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon style={{ color: '#ffd700' }} />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
