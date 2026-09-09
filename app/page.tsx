export default function Home() {
  return (
    <div>
      <header style={{background:'#F9F7F2',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Project 1788984402758</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_full" style={{color:'white',textDecoration:'none'}}>hero_full</a>
          <a href="#about_split" style={{color:'white',textDecoration:'none'}}>about_split</a>
          <a href="#menu_categories" style={{color:'white',textDecoration:'none'}}>menu_categories</a>
          <a href="#gallery_masonry" style={{color:'white',textDecoration:'none'}}>gallery_masonry</a>
        </nav>
      </header>
      <section style={{background:'#F9F7F2',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Project 1788984402758</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>Osteria Luciano is an upscale, reservation-only Italian restaurant website centered on handmade pasta, regional wines, Chef Marco Rossini’s heritage, and intimate private dining. The experience should feel warm, refined, exclusive, and deeply rooted in Italian culinary tradition.</p>
        <a href="#contact" style={{background:'#6B2423',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F9F7F2'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_full" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F9F7F2'}}>hero_full</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_full offerings.</p>
      </section>
      <section id="about_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F9F7F2'}}>about_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our about_split offerings.</p>
      </section>
      <section id="menu_categories" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F9F7F2'}}>menu_categories</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our menu_categories offerings.</p>
      </section>
      <section id="gallery_masonry" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#F9F7F2'}}>gallery_masonry</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our gallery_masonry offerings.</p>
      </section>
      <footer style={{background:'#F9F7F2',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Project 1788984402758. All rights reserved.</p>
      </footer>
    </div>
  );
}