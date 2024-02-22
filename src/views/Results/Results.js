import './Results.css';
import {
  useEffect,
  useState
} from 'react';
import './Results.css';
import {
  Link,
  useSearchParams
} from 'react-router-dom';
import {
  BASE_URL,
  PORT
} from '../../environment/environment';

function Results() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  useEffect(() => {
    fetch(`${BASE_URL}:${PORT}/api/items/q/${searchValue}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.items))
      .catch((error) => console.error(error));
  }, [searchValue]);

  return (
    <div className="Results">
      <header className="Results-header">
        <Link to="/">←</Link>
        <p>Results for: {searchValue}</p>
      </header>
      {products.length > 0 ? (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <Link to={`/items/${product.id}`}>
                <h2 className="product-title">{product.title}</h2>
              </Link>
              <p className="product-price">Price: {product.price}</p>
              <p className="product-brand">Brand: {product.brand}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default Results;
