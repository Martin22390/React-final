import React from 'react';
import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={`${item.imageId}`} alt="" />
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Categoria: {item.categoryId}</p>
      <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;
