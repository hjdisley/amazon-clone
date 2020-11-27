import React from 'react';
import '../styling/ProductCard.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

const ProductCard = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch item into data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__price">
        <small>£</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map(() => (
            <StarIcon style={{ color: '#ffd700' }} />
          ))}
      </div>
      <img alt="theLeanStartUp" src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default ProductCard;
