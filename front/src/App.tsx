// App.tsx for Home Page structure
import { Link } from 'react-router-dom';
import './App.css';
// import ProductList from './components/ProductsList'; // Will be part of the structure
// import SlideLovelyCustomer from './components/SlideLovelyCustomer'; // Will be part of the structure
// import { BrowserRouter } from 'react-router-dom';
// For now, App.tsx will represent the Home page.
// Later, proper routing will be set up. For styling, this is enough.

function App() {
  return (
    // <BrowserRouter>
     <>
      {/* Header / Navbar */}
      <header className="navbar container">
        <div className="navbar-logo">
          {/* Placeholder for logo image */}
          <div style={{"width": "100px", "height": "40px", "backgroundColor": "#ccc", "display":"flex", "alignItems":"center", "justifyContent":"center", "color":"#555", "fontSize":"12px", "fontWeight":"bold"}}>Monito Logo</div>
        </div>
        <nav className="nav-links">
          <Link to="/" className="active">Home</Link>
          <Link to="/category">Category</Link>
          <Link to="/about">About</Link> {/* Se ainda não existir, pode deixar assim para o futuro */}
          <Link to="/product">Contact</Link>
        </nav>
        <div className="nav-actions">
          <input type="search" placeholder="Search something here!" className="search-bar" />
          <button className="btn btn-primary">Join the community</button>
          <div className="currency-selector">VND ▼</div> {/* Added arrow for visual completeness */}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container" style={{"display":"flex", "alignItems":"center", "gap":"30px"}}>
            <div className="hero-content">
              <h1>One More Friend</h1>
              <h2 style={{"fontSize":"36px", "fontWeight":"bold", "color":"#002A48", "marginBottom":"20px"}}>Thousands More Fun!</h2> {/* Adjusted h2 based on figma */}
              <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              <div className="hero-buttons">
                <button className="btn btn-secondary">View Intro ▶</button> {/* Added icon placeholder */}
                <button className="btn btn-primary">Explore Now</button>
              </div>
            </div>
            <div className="hero-image-placeholder">Hero Image Placeholder</div>
          </div>
        </section>

        {/* What's new? Take a Look At Some Of Our Pets */}
        <section className="container">
          <div className="section-title-container">
            <div className="section-title">
              <p>What's new?</p>
              <h2>Take A Look At Some Of Our Pets</h2>
            </div>
            <button className="btn btn-secondary">View more &gt;</button>
          </div>
          <div className="card-grid">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div className="pet-card" key={`pet-${i}`}>
                <div className="pet-card-image-placeholder">Pet Image {i}</div>
                <h3>MO231 - Pomeranian White</h3>
                <p className="pet-card-details">Gene: Male - Age: 02 months</p>
                <p className="pet-card-price">6.900.000 VND</p>
              </div>
            ))}
          </div>
        </section>

        {/* One More Friend Banner (smaller one, different background) */}
        <section className="hero-section" style={{"padding": "40px 0", "backgroundColor": "#FCEED5"}}>
          <div className="container" style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "30px"}}>
            <div className="hero-image-placeholder" style={{"position": "static", "transform": "none", "width": "40%", "height": "250px", "backgroundColor": "#E0E0E0"}}>Banner Image Placeholder</div>
            <div className="hero-content" style={{"maxWidth": "55%"}}>
              <h1 style={{"fontSize":"36px"}}>One More Friend</h1>
              <h2 style={{"fontSize":"28px", "fontWeight":"bold", "color":"#002A48", "marginBottom":"15px"}}>Thousands More Fun!</h2>
              <p style={{"maxWidth":"100%"}}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              <div className="hero-buttons">
                <button className="btn btn-secondary">View Intro ▶</button>
                <button className="btn btn-primary">Explore Now</button>
              </div>
            </div>
          </div>
        </section>


        {/* Our Products Section */}
        <section className="container">
          <div className="section-title-container">
            <div className="section-title">
              <p>Hard to choose right products for your pets?</p>
              <h2>Our Products</h2>
            </div>
            <button className="btn btn-secondary">View more &gt;</button>
          </div>
          <div className="card-grid">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div className="product-card" key={`prod-${i}`}>
                <div className="product-card-image-placeholder">Product Image {i}</div>
                <h3>Reflex Plus Adult Cat Food Salmon</h3>
                <p className="product-card-details">Product: Dog Food - Size: 385gm</p>
                <p className="product-card-price">140.000 VND</p>
                <span className="product-card-tag">🎁 Free Toy & Free Shaker</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pet Sellers Section */}
        <section className="container">
          <div className="section-title-container">
            <div className="section-title">
              <p>Proud to be part of <strong>Pet Sellers</strong></p>
            </div>
            <button className="btn btn-secondary">View all our sellers &gt;</button>
          </div>
          <div className="pet-sellers-logos">
            {["Sheba", "Whiskas", "Bakers", "Felix", "Good Boy", "Butchers", "Pedigree"].map((name, i) => (
              <div key={i} style={{"width": "100px", "height": "50px", "backgroundColor": "#E9E9E9", "display":"flex", "alignItems":"center", "justifyContent":"center", "borderRadius":"5px", "color":"#777"}}>{name} Logo</div>
            ))}
          </div>
        </section>

        {/* Adoption Banner */}
        <section className="adoption-banner container">
          <div className="adoption-banner-content">
            <h2>Adoption <span style={{"fontSize": "24px"}}>🐾</span></h2>
            <h3 style={{"fontSize":"20px", "fontWeight":"normal", "marginBottom":"20px"}}>We Need Help. So Do They.</h3>
            <p>Adopt a pet and give it a home, it will be love you back unconditionally.</p>
            <div className="hero-buttons">
                <button className="btn btn-primary">Explore Now</button>
                <button className="btn btn-secondary">View Intro ▶</button>
            </div>
          </div>
          <div className="adoption-image-placeholder">Adoption Image Placeholder</div>
        </section>

        {/* Useful Pet Knowledge Section */}
        <section className="container">
          <div className="section-title-container">
            <div className="section-title">
              <p>You already know ?</p>
              <h2>Useful Pet Knowledge</h2>
            </div>
            <button className="btn btn-secondary">View more &gt;</button>
          </div>
          <div className="card-grid" style={{"gridTemplateColumns": "repeat(auto-fit, minmax(300px, 1fr))"}}>
            {[1,2,3].map(i => (
              <div className="product-card" key={`knowledge-${i}`}>
                <div className="product-card-image-placeholder" style={{"height": "150px"}}>Knowledge Image {i}</div>
                <span className="product-card-tag" style={{"backgroundColor": "#D1E6F9", "color": "#005B9A", "marginTop":"10px", "display":"inline-block"}}>Pet Knowledge</span>
                <h3>What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
                <p className="product-card-details" style={{"fontSize": "14px", "color": "#555"}}>The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Banner */}        
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
    </>//</BrowserRouter> 
    );
}

export default App;
