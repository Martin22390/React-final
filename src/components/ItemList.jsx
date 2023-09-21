import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css"

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="item-list-container">
    <h1 className="item-list-title">Productos:</h1>

    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item-list-item">
          <Link to={`/item/${item.id}`} className="item-link">
            <div className="item-image">
              <img
                src={item.image || "/placeholder.png"}
                alt={item.name}
              />
            </div>
            <h3 className="item-name">{item.title}</h3>
            <p className="item-price">${item.price}</p>
            <p className="item-category">{item.categoryId}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;