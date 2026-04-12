"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const SERVICES = [
  {
    icon: "🔧",
    title: "Steel Fabrication",
    desc: "Custom structural steel work — frames, beams, trusses, and industrial components crafted to exact specifications.",
  },
  {
    icon: "🔩",
    title: "Iron Works",
    desc: "Decorative and functional iron grills, gates, window guards, railings, and artistic ironwork for every need.",
  },
  {
    icon: "🏗️",
    title: "Aluminium Fabrication",
    desc: "Lightweight, durable aluminium doors, windows, partitions, cladding, and custom extruded profiles.",
  },
  {
    icon: "🪵",
    title: "Ply & Wood Work",
    desc: "Premium plywood furniture, modular cabinets, false ceilings, panels, and interior woodwork solutions.",
  },
  {
    icon: "🛋️",
    title: "Custom Furniture",
    desc: "Bespoke furniture fusing metal and wood craftsmanship — built exactly for your space and lifestyle.",
  },
  {
    icon: "🏢",
    title: "Commercial Interiors",
    desc: "End-to-end fabrication for offices, showrooms, shops, and large-scale commercial establishments.",
  },
];

const STATS = [
  { val: "2+", label: "Years of Experience" },
  { val: "200+", label: "Projects Delivered" },
  { val: "100+", label: "Happy Clients" },
  { val: "5+", label: "Skilled Craftsmen" },
];

const GALLERY = [
  { label: "Stainless Steel Gate", sub: "Residential & Commercial", bg: "#141a1f", span: "2", image: "/images/catalogImages/3.png" },
  { label: "Stainless Steel Door", sub: "Premium Entrance", bg: "#1a1514", span: "1", image: "/images/catalogImages/4.png" },
  { label: "Stainless Steel Window", sub: "Safety & Design", bg: "#14181a", span: "1", image: "/images/catalogImages/5.png" },
  { label: "Staircase Railing", sub: "Durable Steel Railings", bg: "#1a1a14", span: "1", image: "/images/catalogImages/6.png" },
  { label: "Balcony Railing", sub: "Modern Balcony Safety", bg: "#171a14", span: "1", image: "/images/catalogImages/7.png" },
  { label: "Stainless Steel Bed", sub: "Customised Bed Frames", bg: "#1a1418", span: "2", image: "/images/catalogImages/8.png" },
  { label: "Chair and Table", sub: "Office & Home Furniture", bg: "#141a1f", span: "1", image: "/images/catalogImages/9.png" },
  { label: "Sofa and Jhula", sub: "Living & Outdoor Leisure", bg: "#1a1514", span: "1", image: "/images/catalogImages/10.png" },
  { label: "Aluminium Door", sub: "Lightweight & Sturdy", bg: "#14181a", span: "1", image: "/images/catalogImages/11.png" },
  { label: "Aluminium Window & Partition", sub: "Commercial Partitions", bg: "#1a1a14", span: "1", image: "/images/catalogImages/12.png" },
  { label: "Customised Items", sub: "Shelves & Hangers", bg: "#171a14", span: "2", image: "/images/catalogImages/13.png" },
];

const WHY = [
  { icon: "✅", t: "In-house fabrication", d: "Full control over quality from raw material to finish." },
  { icon: "⚡", t: "Fast turnaround", d: "Timely delivery without compromise on craftsmanship." },
  { icon: "💰", t: "Competitive pricing", d: "Factory-direct rates with transparent quotations." },
  { icon: "🛡️", t: "Warranty assured", d: "Post-installation support and workmanship warranty." },
];

const CONTACT_INFO = [
  {
    ico: "📍",
    label: "Address",
    val: "Ara - Sasaram Rd, near Banaras Hospital, Piro, Bihar 802207",
  },
  { ico: "📞", label: "Phone", val: "+91 76268 81601" },
  { ico: "📧", label: "Email", val: "info@ssengico.com" },
  // { ico: "🕒", label: "Working Hours", val: "Monday – Saturday: 9:00 AM – 7:00 PM" },
];

const navItems = ["Home", "About", "Services", "Gallery", "Contact"];

const GalleryItem = ({ item, idx, onClick }: { item: (typeof GALLERY)[number]; idx: number; onClick?: () => void }) => {
  const colors = ["#141a1f", "#1a1514", "#14181a", "#1a1a14", "#171a14", "#1a1418"];
  const accentColors = ["#1e3040", "#2e1f1a", "#182430", "#2e2e14", "#1e2810", "#2e1830"];

  return (
    <div className={`gallery-item ${item.span === "2" ? "gallery-span2" : ""}`} onClick={onClick}>
      <div className="gallery-inner" style={{ background: item.image ? "#111" : colors[idx % colors.length] }}>
        {item.image ? (
          <Image src={item.image} alt={item.label} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} priority />
        ) : null}
        <div className="gallery-pattern" />
        <svg className="gallery-diag" viewBox="0 0 200 300" fill="none">
          <polygon points="0,0 200,0 200,300" fill={accentColors[idx % accentColors.length]} />
        </svg>
        <div
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            width: "32px",
            height: "32px",
            border: "1.5px solid rgba(255,107,0,0.3)",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "2px",
              background: "rgba(255,107,0,0.6)",
              borderRadius: "1px",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                height: "1.5px",
                width: `${20 + i * 8}px`,
                background: `rgba(255,107,0,${0.08 * i})`,
                borderRadius: "1px",
              }}
            />
          ))}
        </div>
        <div className="gallery-label">
          <div className="gallery-label-title">{item.label}</div>
          <div className="gallery-label-sub">{item.sub}</div>
        </div>
        <div className="gallery-overlay">
          <div className="gallery-view">View Project →</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 0.8;

    const animate = () => {
      if (!isPaused && lightboxIndex === null && galleryRef.current) {
        galleryRef.current.scrollLeft += scrollSpeed;
        const halfWidth = galleryRef.current.scrollWidth / 2;
        if (galleryRef.current.scrollLeft >= halfWidth) {
          galleryRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, lightboxIndex]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! < GALLERY.length - 1 ? prev! + 1 : 0));
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY.length - 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < GALLERY.length - 1 ? prev! + 1 : 0));
    }
    if (isRightSwipe && lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY.length - 1));
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-box">
          <div className="logo-sq">
            <Image src="/images/logoWithoutBackground.png" alt="SS Logo" width={26} height={26} />
          </div>
          <div>
            <div className="logo-name">SS Furniture & Fabrication</div>
            <div className="logo-sub">A Unit of SS Engineering Company</div>
          </div>
        </div>

        <div className="desktop-links">
          {navItems.map((item) => (
            <button key={item} className="nav-link" onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
        </div>

        <button className="nav-cta" onClick={() => scrollTo("Contact")}>Get a Quote</button>

        <button className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="hbar"
              style={
                menuOpen && i === 1
                  ? { opacity: 0 }
                  : menuOpen && i === 0
                    ? { transform: "rotate(45deg) translate(5px,5px)" }
                    : menuOpen && i === 2
                      ? { transform: "rotate(-45deg) translate(5px,-5px)" }
                      : {}
              }
            />
          ))}
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button key={item} className="mobile-link" onClick={() => scrollTo(item)}>
            {item}
          </button>
        ))}
        <button className="mobile-link mobile-cta" onClick={() => scrollTo("Contact")}>Get a Free Quote →</button>
      </div>

      <section id="Home" className="hero">
        <div className="hero-image">
          <Image src="/images/shopFront.jpg" alt="Shop front" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="badge">
            <span className="badge-dot" /> Trusted fabrication partner since 2024
          </div>
          <h1 className="hero-h1">
            Where Design
            <br /> Meets <span style={{ color: "#ff6b00" }}>Durability</span>
          </h1>
          <p className="hero-p">
            Premium fabrication of steel, iron, aluminium and plywood — modern craftsmanship for industrial, commercial and residential spaces.
          </p>
          <div className="hero-btns">
            <a href="/catalog.pdf" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Download Catalog</a>
            <button className="btn-outline" onClick={() => scrollTo("Gallery")}>View Projects</button>
          </div>
          <div className="hero-badges">
            {[
              "2+ Years in Business",
              "200+ Projects Delivered",
              "Piro, Bihar & Beyond",
            ].map((text) => (
              <div key={text} className="hero-badge">
                <span className="hero-badge-icon">✦</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="stats-bar">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-val">{stat.val}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <section id="About" className="section section-alt">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-content-left">
              <div className="section-label" style={{ color: "#ff6b00", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Who We Are</div>
              <h2 className="section-h2" style={{ color: "#fff", fontSize: "clamp(36px, 5vw, 48px)", lineHeight: "1.1", marginBottom: "20px", fontWeight: "700" }}>
                Precision. Strength.<br />Craftsmanship.
              </h2>
              <div style={{ width: "40px", height: "3px", backgroundColor: "#ff6b00", marginBottom: "32px" }}></div>
              
              <p className="about-copy" style={{ color: "#888", fontSize: "15px", lineHeight: "1.8", marginBottom: "24px" }}>
                SS Furniture & Fabrication is a premier division of SS Engineering Company, delivering high-quality metal and wood fabrication for residential, commercial, and industrial clients across the region.
              </p>
              <p className="about-copy" style={{ color: "#888", fontSize: "15px", lineHeight: "1.8", marginBottom: "40px" }}>
                With over 2+ years of hands-on experience, our skilled craftsmen blend traditional techniques with modern machinery — delivering work that stands the test of time, on schedule and within budget.
              </p>
              
              <div className="about-tags" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {[
                  "Licensed & Insured",
                  "On-Time Delivery",
                  "Custom Orders Welcome",
                ].map((tag) => (
                  <span key={tag} className="tag" style={{ border: "1px solid #3d2110", background: "transparent", color: "#e86e1e", padding: "10px 18px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="owner-card-modern">
               <Image src="/images/owner.png" alt="Sunil Singh - Founder" fill sizes="(max-width: 980px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="owner-full-img" />
               <div className="owner-glass-overlay">
                  <p className="owner-quote-modern">"Our goal is to provide high-quality materials at affordable prices. Your satisfaction means a lot to us, and we carefully craft every item to perfection."</p>
                  <div className="owner-meta-modern">
                     <strong>Sunil Singh</strong>
                     <span>Founder & Lead Fabricator</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Services" className="section">
        <div className="section-inner">
          <div className="center">
            <div className="section-label">What We Do</div>
            <h2 className="section-h2">Our Services</h2>
            <div className="divider" />
            <p className="section-p">From raw materials to refined finish — we handle every stage with precision and pride.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <div className="service-title">{service.title}</div>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Gallery" className="section section-alt">
        <div className="section-inner">
          <div className="center">
            <div className="section-label">Our Work</div>
            <h2 className="section-h2">Project Gallery</h2>
            <div className="divider" />
            <p className="section-p">A glimpse of our craftsmanship across diverse material systems and project scales.</p>
          </div>
          <div
            className="gallery-grid"
            ref={galleryRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...GALLERY, ...GALLERY].map((item, index) => (
              <GalleryItem 
                key={`${item.label}-${index}`} 
                item={item} 
                idx={index % GALLERY.length} 
                onClick={() => setLightboxIndex(index % GALLERY.length)} 
              />
            ))}
          </div>
        </div>
      </section>

      <section id="Why" className="section">
        <div className="section-inner">
          <div className="center">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-h2">The SS Difference</h2>
            <div className="divider" />
          </div>
          <div className="why-grid">
            {WHY.map((item) => (
              <div key={item.t} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <div className="why-t">{item.t}</div>
                <div className="why-d">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Contact" className="section section-alt">
        <div className="section-inner">
          <div className="center">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-h2">Let's Build Together</h2>
            <div className="divider" />
            <p className="section-p">Ready to start your project? Reach out and we'll respond within one business day.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div>
                  <h3>SS Furniture & Fabrication</h3>
                  <p>A unit of SS Engineering Company</p>
                </div>
                <a className="catalog-card" href="/catalog.pdf" target="_blank" rel="noreferrer">
                  <div>
                    <span className="catalog-label">Download Catalog</span>
                    <p>View our product portfolio, fabrication samples, and material guides.</p>
                  </div>
                  <Image src="/catalog-qr.jpeg" alt="Catalog QR" width={70} height={70} />
                </a>
              </div>
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="contact-row">
                  <div className="contact-ico">{item.ico}</div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-val">{item.val}</div>
                  </div>
                </div>
              ))}
              <a
                href="https://wa.me/917626881601?text=Hi%20SS%20Fabrication%2C%20I%27d%20like%20a%20quote%20for%20a%20project."
                className="wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.83 6.372L0 24l5.803-1.688A11.9 11.9 0 0 0 11.944 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm.056 20.04a9.96 9.96 0 0 1-5.088-1.39l-.365-.215-3.774 1.096 1.01-3.666-.237-.374a9.92 9.92 0 0 1-1.546-5.45C2 4.515 6.516 0 12 0s10 4.515 10 10.04-4.484 10-10 10zm5.498-7.514c-.302-.15-1.782-.876-2.057-.977-.275-.101-.476-.15-.676.15-.201.301-.778.977-.954 1.178-.175.201-.35.226-.652.075-.302-.15-1.274-.468-2.428-1.496-.898-.801-1.503-1.79-1.678-2.091-.176-.301-.019-.464.132-.614.135-.135.302-.351.452-.527.151-.176.201-.301.302-.502.1-.201.05-.376-.025-.527-.075-.15-.676-1.62-.927-2.217-.245-.583-.494-.504-.676-.513-.175-.01-.376-.01-.576-.01s-.527.075-.803.376c-.275.301-1.053 1.028-1.053 2.508s1.078 2.91 1.228 3.111c.15.2 2.126 3.245 5.15 4.542.72.308 1.28.492 1.718.63.722.228 1.38.196 1.895.119.578-.087 1.782-.727 2.033-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.578-.35z" />
                  </svg>
                </span> Chat on WhatsApp
              </a>
            </div>
            <div className="form-card">
              {submitted ? (
                <div className="message-sent">
                  <div className="message-sent-icon">✅</div>
                  <div className="message-sent-title">Message Sent!</div>
                  <div className="message-sent-copy">We'll get back to you within 24 hours.</div>
                  <button className="btn-outline" onClick={() => setSubmitted(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <h3>Send Us a Message</h3>
                    <p>We'll respond within one business day.</p>
                  </div>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-input" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-input" placeholder="+91 ..." />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-input" placeholder="you@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Required</label>
                    <select className="form-input">
                      <option value="">Select a service...</option>
                      {SERVICES.map((service) => (
                        <option key={service.title} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" placeholder="Describe your project — dimensions, material preferences, timeline..." />
                  </div>
                  <button className="submit-btn" onClick={() => setSubmitted(true)}>
                    Send Message →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="logo-box footer-logo">
              <div className="logo-sq logo-sq-small">
                <Image src="/images/logoWithoutBackground.png" alt="SS Logo" width={22} height={22} />
              </div>
              <div>
                <div className="logo-name">SS Furniture & Fabrication</div>
                <div className="logo-sub">A Unit of SS Engineering Company</div>
              </div>
            </div>
            <div className="footer-links">
              {navItems.map((item) => (
                <button key={item} className="footer-link" onClick={() => scrollTo(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 <span>SS Engineering Company</span>. All rights reserved.</div>
            {/* <div className="footer-copy">Crafted with care in Mumbai</div> */}
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/917626881601?text=Hi%20SS%20Fabrication%2C%20I%27d%20like%20a%20quote%20for%20a%20project."
        className="wa-sticky"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.83 6.372L0 24l5.803-1.688A11.9 11.9 0 0 0 11.944 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm.056 20.04a9.96 9.96 0 0 1-5.088-1.39l-.365-.215-3.774 1.096 1.01-3.666-.237-.374a9.92 9.92 0 0 1-1.546-5.45C2 4.515 6.516 0 12 0s10 4.515 10 10.04-4.484 10-10 10zm5.498-7.514c-.302-.15-1.782-.876-2.057-.977-.275-.101-.476-.15-.676.15-.201.301-.778.977-.954 1.178-.175.201-.35.226-.652.075-.302-.15-1.274-.468-2.428-1.496-.898-.801-1.503-1.79-1.678-2.091-.176-.301-.019-.464.132-.614.135-.135.302-.351.452-.527.151-.176.201-.301.302-.502.1-.201.05-.376-.025-.527-.075-.15-.676-1.62-.927-2.217-.245-.583-.494-.504-.676-.513-.175-.01-.376-.01-.576-.01s-.527.075-.803.376c-.275.301-1.053 1.028-1.053 2.508s1.078 2.91 1.228 3.111c.15.2 2.126 3.245 5.15 4.542.72.308 1.28.492 1.718.63.722.228 1.38.196 1.895.119.578-.087 1.782-.727 2.033-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.578-.35z" />
        </svg>
      </a>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-close" onClick={() => setLightboxIndex(null)}>✕</div>

          <div className="lightbox-nav lightbox-prev" onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : GALLERY.length - 1));
          }}>‹</div>

          <div
            className="lightbox-img-container"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {GALLERY[lightboxIndex].image && (
              <Image
                src={GALLERY[lightboxIndex].image}
                alt={GALLERY[lightboxIndex].label}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
                priority
              />
            )}
            <div className="lightbox-label">
              <div className="lightbox-label-title">{GALLERY[lightboxIndex].label}</div>
              <div className="lightbox-label-sub">{GALLERY[lightboxIndex].sub}</div>
            </div>
          </div>

          <div className="lightbox-nav lightbox-next" onClick={(e) => {
            e.stopPropagation();
            setLightboxIndex((prev) => (prev! < GALLERY.length - 1 ? prev! + 1 : 0));
          }}>›</div>
        </div>
      )}
    </>
  );
}
