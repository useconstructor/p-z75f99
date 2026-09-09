import Image from "next/image";
import { ArrowRight, Clock3, Instagram, MapPin, Phone } from "lucide-react";

const menu = [
  { name: "Burrata Pugliese", detail: "Heirloom tomato, basil oil, sea salt", price: "$24" },
  { name: "Polpo alla Brace", detail: "Charred octopus, ceci, preserved lemon", price: "$28" },
  { name: "Tagliolini al Tartufo", detail: "Hand-cut pasta, black truffle, Parmigiano", price: "$42" },
  { name: "Ravioli di Zucca", detail: "Brown butter, sage, amaretti, aged balsamic", price: "$34" },
  { name: "Branzino Arrosto", detail: "Fennel, artichoke, white wine, capers", price: "$46" },
  { name: "Osso Buco Milanese", detail: "Saffron risotto, gremolata, natural jus", price: "$52" },
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#home" aria-label="Osteria Luciano home"><span>OSTERIA</span>L·U·C·I·A·N·O</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a><a href="#menu">Menu</a><a href="#about">About</a><a href="#gallery">Gallery</a><a className="nav-cta" href="#reservations">Reservations</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <Image src="/images/hero.jpg" alt="An intimate candlelit table at Osteria Luciano" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">An Italian dining experience · New York</p>
          <h1>Tradition, Refined.<br /><em>Moments, Remembered.</em></h1>
          <p className="hero-copy">Handmade pasta, regional wines, and timeless hospitality—served with the warmth of an Italian home.</p>
          <a className="button gold" href="#reservations">Reserve a Table <ArrowRight size={17} /></a>
        </div>
        <a href="#about" className="scroll-cue">Discover our story <span>↓</span></a>
      </section>

      <section className="about section" id="about">
        <div className="about-photo">
          <Image src="/images/interior.jpg" alt="The warmly lit dining room" fill sizes="(max-width: 800px) 100vw, 48vw" />
          <div className="year-mark"><span>EST.</span><strong>1998</strong></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">La nostra storia</p>
          <h2>Rooted in Italy.<br /><em>Made in New York.</em></h2>
          <div className="rule" />
          <p>Osteria Luciano began with a simple promise: to honor the soulful cooking of Chef Marco Rossini&apos;s childhood in Emilia-Romagna.</p>
          <p>Every morning, our kitchen rolls pasta by hand. Every bottle is chosen from small Italian vineyards. Every guest is welcomed as family.</p>
          <a className="text-link" href="#menu">Meet Chef Marco <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="menu-section section" id="menu">
        <div className="section-heading"><p className="eyebrow">From our kitchen</p><h2>A Taste of <em>Luciano</em></h2><p>Seasonal ingredients. Time-honored technique. A menu made for lingering.</p></div>
        <div className="menu-grid">
          {menu.map((item) => <article className="menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.detail}</p></div><span>{item.price}</span></article>)}
        </div>
        <a className="button outline" href="#reservations">Explore the full menu <ArrowRight size={17} /></a>
      </section>

      <section className="quote-section"><p>“Cooking is memory. Our table is where those memories become yours.”</p><span>— Chef Marco Rossini</span></section>

      <section className="gallery section" id="gallery">
        <div className="section-heading left"><p className="eyebrow">At the osteria</p><h2>Come for dinner.<br /><em>Stay for the evening.</em></h2></div>
        <div className="gallery-grid">
          <figure className="gallery-tall"><Image src="/images/pasta.jpg" alt="Fresh pasta finished with herbs" fill sizes="(max-width: 700px) 100vw, 50vw" /></figure>
          <figure><Image src="/images/wine.jpg" alt="Italian red wine being poured" fill sizes="(max-width: 700px) 100vw, 25vw" /></figure>
          <figure><Image src="/images/dish.jpg" alt="A house pasta dish" fill sizes="(max-width: 700px) 100vw, 25vw" /></figure>
        </div>
      </section>

      <section className="reservation" id="reservations">
        <div><p className="eyebrow light">Your table awaits</p><h2>Make tonight<br /><em>unforgettable.</em></h2></div>
        <div className="reservation-action"><p>Reservations are recommended.<br />For parties of seven or more, please call us.</p><a className="button gold" href="tel:+12125550198">Reserve a Table <ArrowRight size={17} /></a></div>
      </section>

      <footer>
        <div className="footer-brand"><a className="brand" href="#home"><span>OSTERIA</span>L·U·C·I·A·N·O</a><p>Italian tradition, graciously served.</p></div>
        <div className="footer-col"><h3>Visit</h3><p><MapPin size={15} /> 128 West 10th Street<br />Greenwich Village, New York</p><p><Phone size={15} /> (212) 555-0198</p></div>
        <div className="footer-col"><h3>Hours</h3><p><Clock3 size={15} /> Tuesday–Thursday 5–10pm<br />Friday–Saturday 5–11pm<br />Sunday 5–9pm</p></div>
        <div className="footer-col"><h3>Stay in touch</h3><form className="signup"><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" /><button aria-label="Join mailing list">→</button></form><a className="social" href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /> @osterialuciano</a></div>
        <div className="copyright"><span>© 2026 Osteria Luciano</span><span>Privacy · Accessibility</span></div>
      </footer>
    </main>
  );
}
