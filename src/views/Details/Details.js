import './Details.css';
import {
  useEffect,
  useState
} from 'react';
import {
  Link,
  useParams
} from 'react-router-dom';
import {
  BASE_URL,
  PORT
} from '../../environment/environment';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}:${PORT}/api/items/id/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.item))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="Detail">
      <header className="Results-header">
        <Link to="/">←</Link>
        <p>Results for: {product.title}</p>
        <br></br>
      </header>
      <img src={product.thumbnail} alt={product.title} className="item-thumbnail" />
      <h1 className="item-title">{product.title}</h1>
      <p className="item-description">{product.description}</p>
      <p className="item-price">Price: {product.price}</p>
      <p className="item-discount">Discount: {product.discountPercentage}%</p>
      <p className="item-rating">Rating: {product.rating}</p>
      <p className="item-stock">Stock: {product.stock}</p>
      <p className="item-brand">Brand: {product.brand}</p>
      <p className="item-category">Category: {product.category}</p>
      <div className="item-images">
        {product?.images?.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="item-image" />
        ))}
      </div>
    </div>
  );
}

export default Details;
