import React from 'react';
import Card from '../UI/card';
import './product.css';

const Products = (props) => {
    const {id, image, title, description, amount} = props;
  return (
    <Card className="product">
      <img
                src={image}
                alt={`Imagen del producto ${title}`}
                className={"image-product"}
                width={250}
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <span>${amount}</span>
            <div>
                <button
                    data-item-id={id}
                    data-item-image={image}
                    data-item-name={title}
                    data-item-url="/"
                    data-item-price={amount}
                >
                    Add to Cart
                </button>
            </div>
    </Card>
  );
}

export default Products;