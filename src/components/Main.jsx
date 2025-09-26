function Main() {
  return (
    <main>
      <section id="highlights-section">
        <div className="container">
          <div className="header-mobile">
            <h3>Order for delivery!</h3>
            <div className="pills">
              <div className="pill">Lunch</div>
              <div className="pill">Mains</div>
              <div className="pill">Desserts</div>
              <div className="pill">A La Carte</div>
              <div className="pill">Specials</div>
            </div>
          </div>
          <div className="header-desktop">
            <h3 className="display-title">This week's specials!</h3>
            <button>Online Menu</button>
          </div>
          <div>
            <div className="card">
              <img src="greek_salad.jpg" alt="A greek salad" />
              <div className="card-content">
                <h4>Greek Salad</h4>
                <span>$12.99</span>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <div className="card-actions">
                  <button className="card-button">
                    Order a delivery{" "}
                    <img
                      src="delivery_icon.svg"
                      height={14}
                      width={22.4}
                      alt="A delivery icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="bruchetta.svg" height={185} alt="Bruchetta dish" />
              <div className="card-content">
                <h4>Bruchetta</h4>
                <span>$ 5.99</span>
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <div className="card-actions">
                  <button className="card-button">
                    Order a delivery{" "}
                    <img
                      src="delivery_icon.svg"
                      height={14}
                      width={22.4}
                      alt="A delivery icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="lemon_dessert.jpg" height={185} alt="A lemon dessert" />
              <div className="card-content">
                <h4>Lemon Dessert</h4>
                <span>$ 5.00</span>
                <p>
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <div className="card-actions">
                  <button className="card-button">
                    Order a delivery{" "}
                    <img
                      src="delivery_icon.svg"
                      height={14}
                      width={22.4}
                      alt="A delivery icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials-section">
        <div className="container">
          <h3 className="display-title">Testimonials</h3>
          <div>
            <div className="testimonial-card">
              <div className="card-header">
                <h4>Rating</h4>
              </div>
              <div className="testimonial-card-content">
                <img
                  src="Mario_and_Adrian_A.jpg"
                  height={48}
                  width={48}
                  alt="Two chefs"
                />
                <span>Name</span>
              </div>
              <p>Review text</p>
            </div>
            <div className="testimonial-card">
              <div className="card-header">
                <h4>Rating</h4>
              </div>
              <div className="testimonial-card-content">
                <img
                  src="Mario_and_Adrian_A.jpg"
                  height={48}
                  width={48}
                  alt="Two chefs"
                />
                <span>Name</span>
              </div>
              <p>Review text</p>
            </div>
            <div className="testimonial-card">
              <div className="card-header">
                <h4>Rating</h4>
              </div>
              <div className="testimonial-card-content">
                <img
                  src="Mario_and_Adrian_A.jpg"
                  height={48}
                  width={48}
                  alt="Two chefs"
                />
                <span>Name</span>
              </div>
              <p>Review text</p>
            </div>
            <div className="testimonial-card">
              <div className="card-header">
                <h4>Rating</h4>
              </div>
              <div className="testimonial-card-content">
                <img
                  src="Mario_and_Adrian_A.jpg"
                  height={48}
                  width={48}
                  alt="Two chefs"
                />
                <span>Name</span>
              </div>
              <p>Review text</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about-section">
        <div className="container">
          <article>
            <h3 className="display-title">Little Lemon</h3>
            <h4 className="display-subtitle">Chicago</h4>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant, focused
              on traditional recipes served with a modern twist.
            </p>
          </article>
          <div className="image-overlay">
            <img
              src="/restauranfood.jpg"
              style={{ bottom: 0 }}
              alt="Some food"
            />
            <img
              src="/Mario_and_Adrian_b.jpg"
              style={{ right: 0 }}
              alt="Two chefs"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
