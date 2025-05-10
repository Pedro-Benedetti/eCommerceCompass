// ProductDetailPage.tsx (Contact Page)
import React from 'react';
import '../App.css';
import '../custom_styles.css'; // Already imported in main.tsx
import { Link } from 'react-router-dom';


const ProductDetailPage: React.FC = () => {
  return (
    <>
      {/* Header / Navbar */}
      <header className="navbar container">
        <div className="navbar-logo">
          <div style={{"width": "100px", "height": "40px", "backgroundColor": "#ccc", "display":"flex", "alignItems":"center", "justifyContent":"center", "color":"#555", "fontSize":"12px", "fontWeight":"bold"}}>Monito Logo</div>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="#">About</Link>
          <Link to="/product" className="active">Contact</Link>
        </nav>
        <div className="nav-actions">
          <input type="search" placeholder="Search something here!" className="search-bar" />
          <button className="btn btn-primary">Join the community</button>
          <div className="currency-selector">VND ▼</div>
        </div>
      </header>

      <main className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb" style={{"paddingTop": "20px", "paddingBottom": "10px"}}>
          <Link to="/">Home</Link> &gt; <Link to="/category">Dog</Link> &gt; <Link to="/category">Large Dog</Link> &gt; Shiba Inu Sepia
        </div>

        {/* Product Detail Section */}
        <section className="product-detail-page">
          {/* Product Image Gallery */}
          <div className="product-image-gallery">
            <div className="main-product-image-placeholder">Main Product Image</div>
            <div className="thumbnail-images">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div className="thumbnail-image-placeholder" key={`thumb-${i}`} style={{"display":"flex", "alignItems":"center", "justifyContent":"center", "color":"#777"}}>Thumb {i}</div>
              ))}
            </div>
            <div className="guarantee-tags" style={{"marginTop":"20px"}}>
              <span className="guarantee-tag">🐕 100% health guarantee for pets</span>
              <span className="guarantee-tag">🆔 100% guarantee of pet identification</span>
            </div>
            <div className="share-icons" style={{"marginTop":"15px"}}>
              <span>Share:</span>
              {/* Placeholder for social icons */}
              <div style={{"width": "20px", "height": "20px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
              <div style={{"width": "20px", "height": "20px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
              <div style={{"width": "20px", "height": "20px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
              <div style={{"width": "20px", "height": "20px", "backgroundColor": "#ccc", "borderRadius":"50%"}}></div>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1>Shiba Inu Sepia</h1>
            <p className="product-price-large">34.000.000 VND</p>
            <div className="product-actions">
              <button className="btn btn-primary">Contact us</button>
              <button className="btn btn-secondary"><span>💬</span> Chat with Monito</button>
            </div>
            <div className="product-meta">
              <p><strong>SKU:</strong> #1000078</p>
              <p><strong>Gender:</strong> Female</p>
              <p><strong>Age:</strong> 2 Months</p>
              <p><strong>Size:</strong> Small</p>
              <p><strong>Color:</strong> Appricot & Tan</p>
              <p><strong>Vaccinated:</strong> Yes</p>
              <p><strong>Dewormed:</strong> Yes</p>
              <p><strong>Cert:</strong> Yes (MKA)</p>
              <p><strong>Microchip:</strong> Yes</p>
              <p><strong>Location:</strong> Vietnam</p>
              <p><strong>Published Date:</strong> 12-Oct-2022</p>
              <p><strong>Additional Information:</strong> Pure Bred Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage.</p>
            </div>
          </div>
        </section>

        {/* Our Lovely Customer Section */}
        <section className="customer-reviews-section">
          <div className="section-title-container">
             <div className="section-title">
                <h2>Our lovely customer</h2>
             </div>
          </div>
          <div className="customer-review-cards">
            {[1, 2, 3, 4, 5].map(i => (
              <div className="customer-review-card-placeholder" key={`review-${i}`}>Customer Photo {i}</div>
            ))}
          </div>
           {/* Dots for slider */}
            <div style={{"textAlign": "center", "marginTop": "15px"}}>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#002A48", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#ccc", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#ccc", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#ccc", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
            </div>
        </section>

        {/* What_s new? See More Puppies */}
        <section>
          <div className="section-title-container">
            <div className="section-title">
              <p>What's new?</p>
              <h2>See More Puppies</h2>
            </div>
            {/* No view more button in this specific screenshot for this section */}
          </div>
          <div className="card-grid" style={{"gridTemplateColumns": "repeat(auto-fit, minmax(220px, 1fr))"}}>
            {[1, 2, 3, 4].map(i => (
              <div className="pet-card" key={`puppy-${i}`}>
                <div className="pet-card-image-placeholder">Puppy Image {i}</div>
                <h3>MO231 - Pomeranian White</h3>
                <p className="pet-card-details">Gene: Male - Age: 02 months</p>
                <p className="pet-card-price">6.900.000 VND</p>
              </div>
            ))}
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

export default ProductDetailPage;