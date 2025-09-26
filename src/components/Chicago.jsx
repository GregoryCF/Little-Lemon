function Chicago() {
  return (
    <section id="about-section">
      <div className="container">
        <article>
          <h3 className="display-title">Little Lemon</h3>
          <h4 className="display-subtitle">Chicago</h4>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </article>
        <div className="image-overlay">
          <img src="/restauranfood.jpg" style={{ bottom: 0 }} alt="Some food" />
          <img
            src="/Mario_and_Adrian_b.jpg"
            style={{ right: 0 }}
            alt="Two chefs"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
