import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  sku?: string;
  vaccinated?: boolean | string;
  dewormed?: boolean | string;
  cert?: string;
  microchip?: boolean | string;
  location?: string;
  publishedDate?: string;
  additionalInformation?: string;
}

const CategoryPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [colors, setColors] = useState<string[]>([]);
  const [sizeFilter, setSizeFilter] = useState<string>('');
  const [ageFilter, setAgeFilter] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const queryParams = new URLSearchParams();
      if (genderFilter) queryParams.append('gender', genderFilter);
      if (sizeFilter) queryParams.append('size', sizeFilter);
      if (ageFilter) queryParams.append('age', ageFilter);
      colors.forEach(color => queryParams.append('color', color));

      try {
        const res = await fetch(`http://localhost:3000/products/filter?${queryParams.toString()}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]); 
      }
    };

    fetchFilteredProducts();
  }, [genderFilter, sizeFilter, ageFilter, colors]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setColors(prev => checked ? [...prev, value] : prev.filter(c => c !== value));
  };

  const handleProductClick = (product: Product) => {

    navigate('/product', { state: { product } });
  };

  return (
    <main>
      {/* Header */}
      <header className="navbar container">
        <div className="navbar-logo">
          <img src="/imagens/logo.png" alt="Monito Logo"></img>
        </div>
        <nav className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Contact</Link>
        </nav>
        <div className="nav-actions">
          <input type="search" placeholder="Search something here!" className="search-bar" />
          <button className="btn btn-primary">Join the community</button>
          <div className="currency-selector">VND ▼</div>
        </div>
      </header>

      {/* Category Adopt Your Pet */}
      <section className="hero-section" style={{ padding: "40px 0", backgroundColor: "#FCEED5" }}>
        <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px"}}>
         <div className="hero-image-placeholder-1">
           <img src="/imagens/banner2.png" alt="Banner Image" />
         </div>
        <div className="hero-content" style={{ maxWidth: "55%" }}>
        <h1 style={{ fontSize: "36px" }}>One More Friend</h1>
        <h2 style={{fontSize: "28px", fontWeight: "bold", color: "#002A48", marginBottom: "15px"}}>Thousands More Fun!</h2>
        <p style={{ maxWidth: "100%" }}>
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
        We have 200+ different pets that can meet your needs!
        </p>
        <div className="hero-buttons">
          <button className="btn btn-secondary">View Intro ▶</button>
          <button className="btn btn-primary">Explore Now</button>
         </div>
       </div>
      </div>
    </section>

     <p style={{paddingLeft: "calc((100% - 1140px) / 2)", paddingTop: "20px", paddingBottom: "10px"}}><Link to="/" style={{ color: '#002A48', textDecoration: 'none' }}>Home</Link> / Category</p>

      <section className="category-main-content container">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <h4>Filter</h4>

          <div className="filter-group">
            <h5>Gender</h5>
            <label><input type="radio" name="gender" value="Male" onChange={e => setGenderFilter(e.target.value)} checked={genderFilter === 'Male'} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={e => setGenderFilter(e.target.value)} checked={genderFilter === 'Female'} /> Female</label>
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
                  onChange={e => setSizeFilter(e.target.value)}
                  checked={sizeFilter === s}
                />
                {s}
              </label>
            ))}
          </div>
        </aside>

        {/* Cards */}
        <div className="products-area">
          <div className="card-grid">
            {products.map((product) => (
              <div className="pet-card" key={product.id} onClick={() => handleProductClick(product)} style={{cursor: 'pointer'}}>
                <div className="pet-card-image-placeholder">
                
                  <img src={product.images && product.images.length > 0 ? product.images[0] : '/imagens/dogdog.png'} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
                </div>
                <h3>{product.name}</h3>
                <p className="pet-card-details">Gender: {product.gender} - Age: {product.age}</p>
                <p className="pet-card-price">{product.price ? product.price.toLocaleString() : 'N/A'} VND</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/category">Category</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Contact</Link>
              </div>
              <div className="footer-logo">
                <img src="/imagens/logo.png" alt="Monito Logo"></img>
              </div>
              <div className="footer-social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" width="16" height="16">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24h11.483v-9.294H9.691V11.01h3.117V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
               </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="skyblue" width="16" height="16">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.574A4.903 4.903 0 01.964 9.1v.062a4.924 4.924 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/>
               </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
               <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" width="16" height="16">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.96.24 2.414.403a4.92 4.92 0 011.69 1.09 4.923 4.923 0 011.09 1.689c.163.455.349 1.245.403 2.415.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.054 1.17-.24 1.96-.403 2.414a4.92 4.92 0 01-1.09 1.69 4.923 4.923 0 01-1.689 1.09c-.455.163-1.245.349-2.415.403-1.265.058-1.645.069-4.849.069s-3.584-.012-4.85-.07c-1.17-.054-1.96-.24-2.414-.403a4.92 4.92 0 01-1.69-1.09 4.923 4.923 0 01-1.09-1.689c-.163-.455-.349-1.245-.403-2.415C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.96.403-2.414a4.92 4.92 0 011.09-1.69A4.923 4.923 0 015.415 2.636c.455-.163 1.245-.349 2.415-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.18 0-3.558.012-4.807.07-1.043.05-1.61.222-1.988.37a3.088 3.088 0 00-1.12.73 3.088 3.088 0 00-.73 1.12c-.148.377-.32.944-.37 1.987-.058 1.249-.07 1.627-.07 4.807s.012 3.558.07 4.807c.05 1.043.222 1.61.37 1.988.17.433.405.812.73 1.12.308.308.687.563 1.12.73.377.148.944.32 1.987.37 1.249.058 1.627.07 4.807.07s3.558-.012 4.807-.07c1.043-.05 1.61-.222 1.988-.37.433-.17.812-.405 1.12-.73.308-.308.563-.687.73-1.12.148-.377.32-.944.37-1.987.058-1.249.07-1.627.07-4.807s-.012-3.558-.07-4.807c-.05-1.043-.222-1.61-.37-1.988a3.088 3.088 0 00-.73-1.12 3.088 3.088 0 00-1.12-.73c-.377-.148-.944-.32-1.987-.37-1.249-.058-1.627-.07-4.807-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
               </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
               <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="16" height="16">
                <path d="M23.498 6.186a2.983 2.983 0 00-2.098-2.112C19.38 3.5 12 3.5 12 3.5s-7.38 0-9.4.574A2.983 2.983 0 00.502 6.186 31.23 31.23 0 000 12a31.23 31.23 0 00.502 5.814 2.983 2.983 0 002.098 2.112C4.62 20.5 12 20.5 12 20.5s7.38 0 9.4-.574a2.983 2.983 0 002.098-2.112A31.23 31.23 0 0024 12a31.23 31.23 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
               </svg>
              </a>
            </div>
            </div>
            <div className="footer-bottom">
              <span>© 2022 Monito. All rights reserved.</span>
              <div className="footer-bottom-links">
                <Link to="#">Terms of Service</Link>
                <Link to="#">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
    </main>
  );
};

export default CategoryPage;