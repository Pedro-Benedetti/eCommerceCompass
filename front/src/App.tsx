import { Link } from 'react-router-dom';
import './App.css';

function App() {

  const pets = [
            { code: "MO231", breed: "Pomeranian White", gender: "Male", age: "02", price: "6.900.000", image: "/uploads/pomeranian1.png" },
            { code: "MO512A", breed: "Poodle Tiny Yellow", gender: "Female", age: "02", price: "3.900.000", image: "/uploads/poodleyellow.png" },
            { code: "MO102", breed: "Poodle Tiny Sepia", gender: "Male", age: "02", price: "4.000.000", image: "/uploads/poodlesepia.png" },
            { code: "MO512", breed: "Alaskan Mamute Grey", gender: "Male", age: "02", price: "8.900.000", image: "/uploads/alaskan.png" },
            { code: "MO231B", breed: "Pembroke Corgi Cream", gender: "Male", age: "02", price: "7.900.000", image: "/uploads/pembrokecream.png" },
            { code: "MO502", breed: "Pembroke Corgi Tricolor", gender: "Female", age: "02", price: "9.000.000", image: "/uploads/pembroketricolor.png" },
            { code: "MO231C", breed: "Pomeranian White", gender: "Female", age: "02", price: "6.500.000", image: "/uploads/pomeranian2.png" },
            { code: "MO512B", breed: "Poodle Tiny Cow", gender: "Male", age: "02", price: "5.000.000", image: "/uploads/poodlecow.png" },
          ];

           const products = [
            { name: "Reflex Plus Adult Cat Food Salmon", type: "Cat Food", size: "385gm", price: "140.000", tag: "🎁 Free Toy & Free Shaker", image: "/imagens/catfood1.png" },
            { name: "Reflex Plus Adult Cat Food Salmon", type: "Cat Food", size: "1.5kg", price: "165.000", tag: "🎁 Free Toy & Free Shaker", image: "/imagens/catfood2.png" },
            { name: "Cat scratching ball toy kitten sisal rope ball", type: "Toy", size: "90cm", price: "1.100.000", tag: "🎁 Free Cat Food", image: "/imagens/ropeball.png" },
            { name: "Cute Pet Cat Warm Nest", type: "Toy", size: "120cm", price: "410.000", tag: "🎁 Free Cat Food", image: "/imagens/warmnest.png" },
            { name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil", type: "Dog Food", size: "385gm", price: "350.000", tag: "🎁 Free Toy & Free Shaker", image: "/imagens/naturevetdog.png" },
            { name: "Costumes Fashion Pet Clother Cowboy Rider", type: "Costume", size: "25cm", price: "500.000", tag: "🎁 Free Toy & Free Shaker", image: "/imagens/cowboyrider.png" },
            { name: "Costumes Chicken Drumsti ck Headband", type: "Costume", size: "18cm", price: "400.000", tag: "🎁 Free Cat Food", image: "/imagens/chickenhead.png" },
            { name: "Plush Pet Toy", type: "Toy", size: "100cm", price: "250.000", tag: "🎁 Free Cat Food", image: "/imagens/pettoy.png" },
          ];

  return (
    // <BrowserRouter>
     <>
      {/* Header / Navbar */}
      <header className="navbar container">
        <div className="navbar-logo">
          <img src="/imagens/logo.png" alt="Monito Logo"></img>
          {/* Placeholder logo image */}
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

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container" style={{"display":"flex", "alignItems":"center", "gap":"30px"}}>
            <div className="hero-content">
              <h1>One More Friend</h1>
              <h2 style={{"fontSize":"36px", "fontWeight":"bold", "color":"#002A48", "marginBottom":"20px"}}>Thousands More Fun!</h2>
              <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              <div className="hero-buttons">
                <button className="btn btn-secondary">View Intro ▶</button>
                <button className="btn btn-primary">Explore Now</button>
              </div>
            </div>
            <div className="hero-image-placeholder">
              <img src="/imagens/hero.png" alt="Hero Image"></img>
            </div>
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
            {pets.map((pet, i) => (
              <div className="pet-card" key={`pet-${i}`}>
              <img src={pet.image} alt={pet.breed} className="pet-card-image" />
              <h3>{pet.code} - {pet.breed}</h3>
              <p className="pet-card-details">Gene: {pet.gender} - Age: {pet.age} months</p>
              <p className="pet-card-price">{pet.price} VND</p>
          </div>
        ))}
      </div>

    </section>

       {/* One More Friend Banner */}
      <section className="hero-section" style={{ padding: "40px 0", backgroundColor: "#FCEED5" }}>
        <div className="container" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px"}}>
         <div className="hero-image-placeholder1">
           <img src="/imagens/banner1.png" alt="Banner Image" />
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
            {products.map((prod, i) => (
              <div className="product-card" key={`prod-${i}`}>
                <img src={prod.image} alt={prod.name} className="product-card-image" />
                <h3>{prod.name}</h3>
                <p className="product-card-details">Product: {prod.type} - Size: {prod.size}</p>
                <p className="product-card-price">{prod.price} VND</p>
                <span className="product-card-tag">{prod.tag}</span>
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
          {[
            { name: "Sheba", img: "/imagens/sheba.png" },
            { name: "Whiskas", img: "/imagens/whiskas.png" },
            { name: "Bakers", img: "/imagens/bakers.png" },
            { name: "Felix", img: "/imagens/felix.png" },
            { name: "Good Boy", img: "/imagens/goodboy.png" },
            { name: "Butchers", img: "/imagens/butchers.png" },
            { name: "Pedigree", img: "/imagens/pedigree.png" }
          ].map((seller, i) => (
        <div key={i} style={{
        width: "100px", height: "50px", backgroundColor: "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: "5px"
            }}>
            <img src={seller.img} alt={`${seller.name} Logo`} style={{ maxHeight: '40px', objectFit: 'contain', filter: 'grayscale(100%)' }} />
          </div>
            ))}
          </div>
        </section>

        {/* Adoption Banner */}
        <section className="adoption-banner container">
          <div className="adoption-banner-content">
            <h2>Adoption <span style={{"fontSize": "24px"}}>🐾</span></h2>
            <h3 style={{"fontSize":"20px", "fontWeight":"normal", "marginBottom":"20px"}}>We Need Help. So Do They.</h3>
            <p>Adopt a pet and give it a home,</p> 
            <p>it will be love you back unconditionally.</p>
            <div className="hero-buttons">
                <button className="btn btn-primary">Explore Now</button>
                <button className="btn btn-secondary">View Intro ▶</button>
            </div>
          </div>
          <div className="adoption-image-placeholder">
           <img src="/imagens/banner3.png" alt="Banner Image" />
          </div>
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
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {[
         {
           title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
           img: "/imagens/dogdog.png",
           desc: "The Pomeranian, also known as the Pom dog, is one of the cutest breeds. Small, lovely, smart, friendly, and great for families."
         },
         {
           title: "Top 5 Tips for a Healthy Pet Diet",
           img: "/imagens/dogdiet.png",
           desc: "Feeding your pet right is essential. Discover the top 5 expert-backed tips to provide a balanced and nutritious diet for your furry companion."
         },
         {
           title: "How to Care for Your Pet During Summer",
           img: "/imagens/dogbite.png",
           desc: "Summer can be tough on pets. Learn how to keep them cool, hydrated, and safe during hot days with these simple care tips."
         }
        ].map((article, i) => (
          <div className="product-card" key={`knowledge-${i}`}>
          <img src={article.img} alt={`Knowledge ${i + 1}`} className="product-card-image" />
          <span className="product-card-tag" style={{ backgroundColor: "#D1E6F9", color: "#005B9A", marginTop: "10px", display: "inline-block" }}>Pet Knowledge</span>
          <h3>{article.title}</h3>
          <p className="product-card-details" style={{ fontSize: "14px", color: "#555" }}>{article.desc}</p>
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
    </>//</BrowserRouter> 
    );
}

export default App;
