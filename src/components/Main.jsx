function Main() {
  return (
    <main>
      <section id="highlights-section">
        <div className="container">
          <h3>Specials</h3>
          <div>
            <div style={{ height: 439 }}>Card 1</div>
            <div style={{ height: 439 }}>Card 2</div>
            <div style={{ height: 439 }}>Card 3</div>
          </div>
        </div>
      </section>
      <section id="testimonials-section">
        <div className="container">
          <h3 style={{ textAlign: "center" }}>Testimonials</h3>
          <div>
            <div style={{ height: 175 }}>Card 1</div>
            <div style={{ height: 175 }}>Card 2</div>
            <div style={{ height: 175 }}>Card 3</div>
            <div style={{ height: 175 }}>Card 4</div>
          </div>
        </div>
      </section>
      <section id="about-section">
        <div className="container">
          <section>About content</section>
          <img src="/restauranfood.jpg" width={375} height={468} />
        </div>
      </section>
    </main>
  );
}

export default Main;
