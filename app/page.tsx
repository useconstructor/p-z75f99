import Image from "next/image";
import { ArrowDown, Facebook, Instagram } from "lucide-react";

const dishes = [
  { name: "Vitello Tonnato", detail: "Thinly sliced veal, tuna sauce, capers, arugula", price: "18" },
  { name: "Carpaccio di Manzo", detail: "Beef tenderloin, arugula, shaved Parmigiano, lemon, olive oil", price: "19" },
  { name: "Insalata di Radicchio", detail: "Radicchio, shaved fennel, walnuts, Gorgonzola dolce", price: "14" },
  { name: "Burrata e Pomodori", detail: "Creamy burrata, heirloom tomatoes, basil, aged balsamic", price: "16" },
  { name: "Polpo alla Griglia", detail: "Grilled octopus, cannellini beans, lemon, parsley", price: "22" },
  { name: "Fritto Misto", detail: "Crispy calamari, shrimp, zucchini, lemon aioli", price: "20" },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <Image src="/images/hero.jpg" alt="Candlelit dining room at Project 1788984402758" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <header className="nav-shell">
          <a className="wordmark" href="#home">Project 1788984402758</a>
          <nav aria-label="Main navigation">
            <a className="active" href="#home">Home</a><a href="#menu">Menu</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#reservations">Reservations</a>
          </nav>
          <a className="nav-button" href="#reservations">Reserve a table</a>
        </header>
        <div className="hero-copy">
          <p className="kicker">Trattoria Italiana</p><span className="ornament" />
          <h1>Tradition, Refined.<br />Moments, <em>Remembered.</em></h1>
          <p>Timeless flavors from the heart of Italy,<br />crafted for Charleston&apos;s historic soul.</p>
          <a className="button filled" href="#reservations">Reserve a table</a>
        </div>
        <a className="down" href="#about" aria-label="Scroll to our story"><ArrowDown size={18} /></a>
      </section>

      <section className="story section" id="about">
        <div className="story-copy">
          <p className="kicker">La nostra storia</p><span className="ornament left" />
          <h2>Rooted in Italy.<br />Inspired by <em>Charleston.</em></h2>
          <p>Project 1788984402758 is a love letter to Italian heritage and Lowcountry hospitality. Set within the storied walls of Charleston&apos;s historic district, our trattoria brings together time-honored recipes, seasonal ingredients, and a deep respect for simple, soulful cooking.</p>
          <p>From handmade pasta to Piedmontese wines, every detail is intentional—inviting you to slow down, savor, and feel at home.</p>
          <div className="signature">Luciano</div><small>Chef &amp; Proprietor</small>
        </div>
        <div className="story-image"><Image src="/images/interior.jpg" alt="The historic exterior and terrace of the trattoria" fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
      </section>

      <section className="menu section" id="menu">
        <header className="section-title"><p className="kicker">Il menu</p><span className="ornament" /><h2>Seasonal Dishes. Timeless Flavor.</h2></header>
        <div className="menu-tabs"><span className="selected">Antipasti</span><span>Primi</span><span>Secondi</span><span>Contorni</span><span>Dolci</span></div>
        <div className="menu-grid">{dishes.map((dish) => <article key={dish.name}><div><h3>{dish.name}</h3><p>{dish.detail}</p></div><strong>{dish.price}</strong></article>)}</div>
        <a className="button outline" href="#reservations">View full menu</a>
      </section>

      <section className="gallery section" id="gallery">
        <header className="section-title"><p className="kicker">La galleria</p><span className="ornament" /><h2>A Glimpse Inside</h2></header>
        <div className="gallery-grid">
          <figure className="g1"><Image src="/images/interior.jpg" alt="Intimate table setting" fill sizes="25vw" /></figure>
          <figure className="g2"><Image src="/images/pasta.jpg" alt="Fresh handmade pasta" fill sizes="25vw" /></figure>
          <figure className="g3"><Image src="/images/hero.jpg" alt="Wine cellar dining room" fill sizes="25vw" /></figure>
          <figure className="g4"><Image src="/images/wine.jpg" alt="Italian wine by candlelight" fill sizes="25vw" /></figure>
          <figure className="g5"><Image src="/images/hero.jpg" alt="Warmly lit main dining room" fill sizes="30vw" /></figure>
          <figure className="g6"><Image src="/images/wine.jpg" alt="Classic Italian aperitivo" fill sizes="18vw" /></figure>
          <figure className="g7"><Image src="/images/dish.jpg" alt="Pasta finished with Parmigiano" fill sizes="25vw" /></figure>
        </div>
      </section>

      <footer id="reservations">
        <div className="footer-main">
          <div className="footer-brand"><h3>Project 1788984402758</h3><em>Trattoria Italiana</em><p>18 Queen Street<br />Charleston, SC 29401</p><p>(843) 555-1788<br />info@project1788984402758.com</p><div className="socials"><Facebook size={18} fill="currentColor" /><Instagram size={18} /></div></div>
          <div><h4>Hours</h4><p>Monday – Thursday<br />5:00pm – 10:00pm</p><p>Friday – Saturday<br />5:00pm – 11:00pm</p><p>Sunday<br />5:00pm – 9:30pm</p></div>
          <div><h4>Reservations</h4><p>We recommend reservations<br />for parties of all sizes.</p><a className="button filled" href="tel:+18435551788">Reserve a table</a></div>
          <div><h4>Join our list</h4><p>Stay up to date on seasonal menus<br />and special events.</p><form><label className="sr-only" htmlFor="email">Your email address</label><input id="email" type="email" placeholder="Your email address" /><button aria-label="Subscribe">→</button></form></div>
        </div>
        <div className="footer-bottom">© 2026 Project 1788984402758. All Rights Reserved. <span /> Privacy Policy <span /> Site by Lowcountry Studio</div>
      </footer>
    </main>
  );
}
