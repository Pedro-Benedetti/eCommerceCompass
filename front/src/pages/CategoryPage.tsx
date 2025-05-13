import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryPage.css';

interface Product {
  id: number;
  name: string;
  gender: string;
  age: string;
  size: string;
  color: string;
  price: number;
  images: string[];
}

const CategoryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [gender, setGender] = useState<string>('');
  const [colors, setColors] = useState<string[]>([]);
  const [size, setSize] = useState<string>('');
  const [age, setAge] = useState<string>(''); // futuro uso

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const queryParams = new URLSearchParams();
      if (gender) queryParams.append('gender', gender);
      if (size) queryParams.append('size', size);
      if (age) queryParams.append('age', age);
      colors.forEach(color => queryParams.append('color', color));

      const res = await fetch(`http://localhost:3000/products/filter?${queryParams.toString()}`);
      const data = await res.json();
      setProducts(data);
    };

    fetchFilteredProducts();
  }, [gender, size, age, colors]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setColors(prev => checked ? [...prev, value] : prev.filter(c => c !== value));
  };

  return (
    <main>
      {/* Header embutido */}
      <header style={{ backgroundColor: '#002A48', padding: '20px', color: 'white' }}>
        <nav className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>PetAdopt</Link></h1>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/category" style={{ color: 'white', textDecoration: 'none' }}>Category</Link></li>
            <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section style={{ backgroundColor: '#FCEED5', padding: '40px 0', textAlign: 'center' }}>
        <h2 style={{ margin: 0, color: '#002A48' }}>Adopt Your Pet</h2>
        <p><Link to="/" style={{ color: '#002A48', textDecoration: 'none' }}>Home</Link> / Category</p>
      </section>

      {/* Conteúdo principal com filtros + produtos */}
      <section className="category-main-content container">
        {/* Sidebar de Filtros */}
        <aside className="filters-sidebar">
          <h4>Filter</h4>

          <div className="filter-group">
            <h5>Gender</h5>
            <label><input type="radio" name="gender" value="Male" onChange={e => setGender(e.target.value)} checked={gender === 'Male'} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={e => setGender(e.target.value)} checked={gender === 'Female'} /> Female</label>
          </div>

          <div className="filter-group">
            <h5>Color</h5>
            {["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"].map(color => (
              <label key={color}>
                <input
                  type="checkbox"
                  name="color"
                  value={color}
                  onChange={handleColorChange}
                  checked={colors.includes(color)}
                />
                {color}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h5>Breed (Size)</h5>
            {["Small", "Medium", "Large"].map(s => (
              <label key={s}>
                <input
                  type="radio"
                  name="size"
                  value={s}
                  onChange={e => setSize(e.target.value)}
                  checked={size === s}
                />
                {s}
              </label>
            ))}
          </div>
        </aside>

        {/* Área dos Cards */}
        <div className="products-area">
          <div className="card-grid">
            {products.map((product) => (
              <div className="pet-card" key={product.id}>
                <div className="pet-card-image-placeholder">
                  <img src={product.images[0]} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
                </div>
                <h3>{product.name}</h3>
                <p className="pet-card-details">Gender: {product.gender} - Age: {product.age}</p>
                <p className="pet-card-price">{product.price.toLocaleString()} VND</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer embutido */}
      <footer style={{ backgroundColor: '#002A48', color: 'white', padding: '20px', textAlign: 'center', marginTop: '40px' }}>
        <p>&copy; 2025 PetAdopt. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default CategoryPage;
