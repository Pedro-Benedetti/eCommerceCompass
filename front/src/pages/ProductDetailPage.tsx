// ProductDetailPage.tsx (Contact Page)
import React from 'react';
import '../App.css';
import '../custom_styles.css';
import { Link, useLocation } from 'react-router-dom';

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

const ProductDetailPage: React.FC = () => {
  const location = useLocation();
  const { product } = (location.state as { product: Product }) || { product: null };

  if (!product) {
    return (
      <main className="container">
        <p>Product information is not available. Please select a product from the category page.</p>
        <Link to="/category">Go to Category</Link>
      </main>
    );
  }

  const displayImage = product.images && product.images.length > 0 ? product.images[0] : '/imagens/dogdog.png';

  const formatBoolean = (value: boolean | string | undefined): string => {
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true' || value.toLowerCase() === 'yes' ? 'Yes' : value;
    }
    return 'N/A';
  };

  return (
    <>
      <header className="navbar container">
        <div className="navbar-logo">
          <img src="/imagens/logo.png" alt="Monito Logo"></img>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/about">About</Link>
          <Link to="/product" className="active">Contact</Link>
        </nav>
        <div className="nav-actions">
          <input type="search" placeholder="Search something here!" className="search-bar" />
          <button className="btn btn-primary">Join the community</button>
          <div className="currency-selector">VND ▼</div>
        </div>
      </header>

      <main className="container">
        <div className="breadcrumb" style={{"paddingTop": "20px", "paddingBottom": "10px"}}>
          <Link to="/">Home</Link> &gt; <Link to="/category">Dog</Link> &gt; {product.name}
        </div>

        {/* Product Detail Section */}
        <section className="product-detail-page">
          
          <div className="product-detail-layout" style={{ display: "flex", gap: "30px" }}> 
            
            <div className="product-image-gallery" style={{ flex: "0 0 45%" }}>
              <div className="main-product-image-placeholder" style={{border: "1px solid #eee", borderRadius: "10px", overflow: "hidden"}}>
                  <img src={displayImage} alt={product.name} style={{width: "100%", height: "auto", display: "block"}} />
              </div>
              <div className="thumbnail-images">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div className="thumbnail-image-placeholder" key={`thumb-${i}`} style={{"display":"flex", "alignItems":"center", "justifyContent":"center", "color":"#777", border: "1px solid #eee", borderRadius: "5px", overflow: "hidden"}}>
                      <img src={displayImage} alt={`${product.name} thumb ${i}`} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                  </div>
                ))}
              </div>
              <div className="guarantee-tags" style={{"marginTop":"20px"}}>
                <span className="guarantee-tag">🐕 100% health guarantee for pets</span>
                <span className="guarantee-tag">🆔 100% guarantee of pet identification</span>
              </div>
              <div className="share-icons" style={{"marginTop":"15px"}}>
                <span>Share:</span>
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

            {/* Product Info */}
            <div className="product-info" style={{ flex: "1" }}> 
              <p style={{color: "#777", fontSize: "0.9em", marginBottom: "5px"}}>SKU #{product.sku || 'N/A'}</p>
              <h1>{product.name}</h1>
              <p className="product-price-large">{product.price ? product.price.toLocaleString() : 'N/A'} VND</p>
              <div className="product-actions">
                <button className="btn btn-primary">Contact us</button>
                <button className="btn btn-secondary"><span>💬</span> Chat with Monito</button>
              </div>
              <div className="product-meta" style={{ marginTop: "30px"}}>
                  <div style={{display: "grid", gridTemplateColumns: "150px 1fr", gap: "10px 20px"}}>
                      <p><strong>SKU:</strong></p><p>{product.sku || 'N/A'}</p>
                      <p><strong>Gender:</strong></p><p>{product.gender || 'N/A'}</p>
                      <p><strong>Age:</strong></p><p>{product.age || 'N/A'}</p>
                      <p><strong>Size:</strong></p><p>{product.size || 'N/A'}</p>
                      <p><strong>Color:</strong></p><p>{product.color || 'N/A'}</p>
                      <p><strong>Vaccinated:</strong></p><p>{formatBoolean(product.vaccinated)}</p>
                      <p><strong>Dewormed:</strong></p><p>{formatBoolean(product.dewormed)}</p>
                      <p><strong>Cert:</strong></p><p>{product.cert || 'N/A'}</p>
                      <p><strong>Microchip:</strong></p><p>{formatBoolean(product.microchip)}</p>
                      <p><strong>Location:</strong></p><p>{product.location || 'N/A'}</p>
                      <p><strong>Published Date:</strong></p><p>{product.publishedDate || 'N/A'}</p>
                      <p style={{gridColumn: "span 2"}}><strong>Additional Information:</strong></p>
                      <p style={{gridColumn: "span 2"}}>{product.additionalInformation || 'N/A'}</p>
                  </div>
              </div>
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
              <div className="customer-review-card-placeholder" key={`review-${i}`} style={{border: "1px solid #eee", borderRadius: "10px", overflow: "hidden"}}>
                  <img src={displayImage} alt={`Customer photo ${i} with ${product.name}`} style={{width: "100%", height: "100%", objectFit: "cover"}} />
              </div>
            ))}
          </div>
            <div style={{"textAlign": "center", "marginTop": "15px"}}>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#002A48", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#ccc", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#ccc", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
                <span style={{"height": "10px", "width": "10px", "backgroundColor": "#ccc", "borderRadius": "50%", "display": "inline-block", "margin": "0 5px"}}></span>
            </div>
        </section>

        <section>
            <div className="section-title-container">
            <div className="section-title">
              <p>What's new?</p>
              <h2>See More Puppies</h2>
            </div>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {[
          {
            image: "/imagens/pomeranian10.png",
            name: "MO231 - Pomeranian White",
            gender: "Male",
            age: "02 months",
            price: "6.900.000 VND"
          },
           {
            image: "/imagens/poodleyellow0.png",
            name: "MO502A - Poodle Tiny Yellow",
            gender: "Female",
            age: "02 months",
            price: "3.900.000 VND"
          },
          {
            image: "/imagens/poodlesepia0.png",
            name: "MO102 - Poodle Tiny Sepia",
            gender: "Male",
            age: "02 months",
            price: "4.000.000 VND"
          },
          {
            image: "/imagens/alaskan0.png",
            name: "MO512 - Alaskan Mamute Grey",
            gender: "Male",
            age: "02 months",
            price: "8.900.000 VND"
          }
        ].map((puppy, i) => (
          <div className="pet-card" key={`puppy-${i}`}>
            <div className="pet-card-image">
              <img
                src={puppy.image}
                alt={puppy.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            <h3>{puppy.name}</h3>
            <p className="pet-card-details">Gender: {puppy.gender} - Age: {puppy.age}</p>
            <p className="pet-card-price">{puppy.price}</p>
          </div>
          ))}
          </div>
        </section>

        <section className="newsletter-banner container" style={{"marginTop": "60px", "marginBottom": "60px"}}>
          <div className="newsletter-content">
            <h3>Register Now So You Don't Miss Our Programs</h3>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your Email" />
            <button type="submit" className="btn btn-primary" style={{"backgroundColor": "#FFFFFF", "color": "#002A48"}}>Subscribe Now</button>
          </form>
        </section>
      </main>

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
    </>
  );
};

export default ProductDetailPage;