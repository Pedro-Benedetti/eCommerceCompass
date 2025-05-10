// CategoryPage.tsx
import React from 'react';
import '../App.css'; // If common app styles are needed
import '../custom_styles.css'; // Already imported in main.tsx
import { Link } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage: React.FC = () => {
  return (
    <>
      {/* Header / Navbar - Assuming this might be part of a layout component eventually */}
      <header className="navbar container">
        <div className="navbar-logo">
          <div style={{"width": "100px", "height": "40px", "backgroundColor": "#ccc", "display":"flex", "alignItems":"center", "justifyContent":"center", "color":"#555", "fontSize":"12px", "fontWeight":"bold"}}>Monito Logo</div>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/category" className="active">Category</Link>
          <Link to="#">About</Link>
          <Link to="/product">Contact</Link> {/* Assuming product detail page is contact for now */}
        </nav>
        <div className="nav-actions">
          <input type="search" placeholder="Search something here!" className="search-bar" />
          <button className="btn btn-primary">Join the community</button>
          <div className="currency-selector">VND ▼</div>
        </div>
      </header>

      <main>
        {/* Category Header Banner */}
        <section className="category-header-banner">
          <div className="container">
            <div className="category-header-text">
              <h1>One More Friend</h1>
              <p>Thousands More Fun! Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              <div className="hero-buttons">
                <button className="btn btn-secondary" style={{"borderColor":"#FFFFFF", "color":"#FFFFFF"}}>View Intro ▶</button>
                <button className="btn btn-primary" style={{"backgroundColor":"#FFFFFF", "color":"#002A48"}}>Explore Now</button>
              </div>
            </div>
            <div className="category-banner-image-placeholder">Category Banner Image Placeholder</div>
          </div>
        </section>

        <div className="container">
            <div style={{"paddingTop": "20px", "paddingBottom": "10px", "fontSize": "14px", "color": "#777"}}>
                <span>Home &gt; Dog &gt; Small Dog</span>
            </div>
        </div>

        {/* Main Content Area: Filters + Products */}
        <section className="category-main-content container">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <h4>Filter</h4>
            <div className="filter-group">
              <h5>Gender</h5>
              <label><input type="radio" name="gender" value="male" /> Male</label>
              <label><input type="radio" name="gender" value="female" /> Female</label>
            </div>
            <div className="filter-group">
              <h5>Color</h5>
              {["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"].map(color => (
                <label key={color}><input type="checkbox" name="color" value={color.toLowerCase()} /> {color}</label>
              ))}
            </div>
            <div className="filter-group price-filter">
              <h5>Price</h5>
              <input type="text" placeholder="Min" /> - <input type="text" placeholder="Max" />
            </div>
            <div className="filter-group">
              <h5>Breed</h5>
              {["Small", "Medium", "Large"].map(breed => (
                <label key={breed}><input type="checkbox" name="breed" value={breed.toLowerCase()} /> {breed}</label>
              ))}
            </div>
          </aside>

          {/* Products Area */}
          <div className="products-area">
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "20px"}}>
                <h3 style={{"fontSize": "20px", "color": "#002A48", "fontWeight": "bold"}}>Small Dog <span style={{"fontSize": "14px", "color": "#777", "fontWeight": "normal"}}>8 puppies</span></h3>
                <div className="sort-by-container">
                    <select>
                    <option value="popular">Sort by: Popular</option>
                    <option value="newest">Sort by: Newest</option>
                    <option value="price_low_high">Sort by: Price Low to High</option>
                    <option value="price_high_low">Sort by: Price High to Low</option>
                    </select>
                </div>
            </div>
            <div className="card-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                <div className="pet-card" key={`category-pet-${i}`}>
                  <div className="pet-card-image-placeholder">Pet Image {i}</div>
                  <h3>MO502 - Poodle Tiny Yellow</h3>
                  <p className="pet-card-details">Gene: Female - Age: 02 months</p>
                  <p className="pet-card-price">3.900.000 VND</p>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <nav className="pagination">
              <Link to="#" >&lt;</Link>
              <Link to="#" className="active">1</Link>
              <Link to="#">2</Link>
              <Link to="#">3</Link>
              <Link to="#">4</Link>
              <span>...</span>
              <Link to="#">28</Link>
              <Link to="#">&gt;</Link>
            </nav>
          </div>
        </section>

        {/* Newsletter Banner - Reusing from Home for consistency */}
        <section className="newsletter-banner container" style={{"marginTop": "60px", "marginBottom": "60px"}}>
          <div className="newsletter-content">
            <h3>Register Now So You Don’t Miss Our Programs</h3>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your Email" />
            <button type="submit" className="btn btn-primary" style={{"backgroundColor": "#FFFFFF", "color": "#002A48"}}>Subscribe Now</button>
          </form>
        </section>
      </main>

      {/* Footer - Reusing from Home for consistency */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/category">Category</Link>
              <Link to="#">About</Link>
              <Link to="/product">Contact</Link>
            </div>
            <div className="footer-logo">
              <div style={{"width": "80px", "height": "30px", "backgroundColor": "#ccc", "display":"flex", "alignItems":"center", "justifyContent":"center", "color":"#555", "fontSize":"10px", "fontWeight":"bold"}}>Monito Logo</div>
            </div>
            <div className="footer-social-media">
              <div style={{"width": "24px", "height": "24px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
              <div style={{"width": "24px", "height": "24px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
              <div style={{"width": "24px", "height": "24px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
              <div style={{"width": "24px", "height": "24px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
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
    </>
  );
};

export default CategoryPage;