function Header() {
  return (
    <header>
      <div className="background"></div>
      <div className="container">
        <div className="header">
          <h1 className="display-title">Little Lemon</h1>
          <h2 className="display-subtitle">Chicago</h2>
        </div>
        <article>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </article>
        <img
          src="/restauranfood.jpg"
          style={{ borderRadius: 16 }}
          alt="Some food"
        />
      </div>
    </header>
  );
}

export default Header;
