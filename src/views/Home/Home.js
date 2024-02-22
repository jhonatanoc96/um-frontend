import './Home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (!searchTerm) {
      return alert('Por favor, ingrese un término de búsqueda.');
    }
    
    // Redirect to /items?search=...
    navigate(`/items?search=${searchTerm}`);

  };

  return (
    <div className="Home">
      <header className="Home-header">
        <p>Búsqueda de productos</p>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default Home;
