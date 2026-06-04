import { ScrollAnimations } from "./ScrollAnimations";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;
const navItems = ["About us", "Programs", "Coaches", "Facilities", "Contacts"];
const aboutFeatures = [
  {
    icon: "person",
    title: "Elite Coaching",
    copy: ["Experienced coaches.", "Personalized for every player."],
  },
  {
    icon: "facility",
    title: "World-Class Facilities",
    copy: ["Professional courts.", "Modern training center."],
  },
  {
    icon: "target",
    title: "Champion Mindset",
    copy: ["Discipline. Focus. Resilience.", "We train the mind as much as the game."],
  },
];
const testimonials = [
  {
    quote:
      "The coaches push me to be better every day while keeping training fun. I've improved my game and made great friends.",
    name: "Liam R.",
    role: "Junior Player",
    detail: "3 Years at Kyiv Tennis School",
    image: "/images/testimonial-liam.png",
  },
  {
    quote:
      "The training is structured, the coaches are world-class, and the facilities are unmatched. It's the perfect environment to grow.",
    name: "Anastasiia M.",
    role: "Competitive Player",
    detail: "2 Years at Kyiv Tennis School",
    image: "/images/testimonial-anastasiia.png",
  },
  {
    quote:
      "We love the positive atmosphere and attention to every detail. Our daughter is happier, more confident, and motivated.",
    name: "Olena K.",
    role: "Parent",
    detail: "Kyiv Tennis School Community",
    image: "/images/testimonial-olena.png",
  },
];
const pricingPlans = [
  {
    icon: "junior",
    title: "Junior",
    subtitle: "Foundation for young athletes",
    price: "$149",
    features: [
      "2 group training sessions / week",
      "Skill development & match play",
      "Progress tracking & reports",
    ],
    cta: "Choose Junior",
  },
  {
    icon: "performance",
    title: "Performance",
    subtitle: "Elevate your game",
    price: "$249",
    features: [
      "3 training sessions / week",
      "Tactical & match play training",
      "Video analysis & performance reviews",
      "Priority court booking",
    ],
    cta: "Choose Performance",
    featured: true,
    badge: "Most Popular",
  },
  {
    icon: "private",
    title: "Private",
    subtitle: "Personalized 1:1 coaching",
    price: "$399",
    features: [
      "1:1 coaching tailored to your goals",
      "Flexible scheduling",
      "In-depth performance analysis",
    ],
    cta: "Choose Private",
  },
];
const footerLinks = ["About Us", "Programs", "Coaches", "Facilities", "Book a Trial", "Contacts"];
const socialLinks = ["◎", "f", "▶"];

function SiteHeader() {
  return (
    <header className="nav">
      <a className="brand" href="#" aria-label="Kyiv Tennis School home">
        <span className="brand-mark">K</span>
        <span className="brand-text">
          <span>Kyiv</span>
          <span>Tennis School</span>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>

      <a className="trial-link nav-trial" href="#">
        <span>Book a trial</span>
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollAnimations />
      <SiteHeader />

      <section className="hero scroll-animate" data-reveal-section>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" />
              Premium training in Kyiv
            </p>
            <h1>Train Beyond Limits.</h1>
            <p className="lede">
              Elite coaching, world-class facilities, and a community built for
              those who play to win.
            </p>

            <div className="hero-actions" aria-label="Hero actions">
              <a className="trial-link" href="#">
                <span>Book a trial session</span>
                <span aria-hidden="true">↗</span>
              </a>
              <span className="action-divider" aria-hidden="true" />
              <a className="video-link" href="#">
                <span className="play-button" aria-hidden="true">
                  ▶
                </span>
                <span>Watch video</span>
              </a>
            </div>

            <dl className="stats">
              <div>
                <dt>15+</dt>
                <dd>Years of excellence</dd>
              </div>
              <div>
                <dt>200+</dt>
                <dd>Active athletes</dd>
              </div>
              <div>
                <dt>20+</dt>
                <dd>Professional coaches</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual" aria-label="Tennis training image">
            <img
              src={assetPath("/images/hero-athlete.png")}
              alt=""
              className="hero-photo"
              aria-hidden="true"
            />
            <div className="image-fallback" aria-hidden="true">
              <span>Add hero-athlete.png</span>
            </div>

            <article className="champion-card">
              <span className="tennis-ball" aria-hidden="true" />
              <h2>Built for Champions</h2>
              <span className="card-rule" aria-hidden="true" />
              <p>
                <span>We develop confident players</span>
                <span>through discipline, smart training,</span>
                <span>and a winning mindset.</span>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section scroll-animate" id="about" data-reveal-section>
        <div className="about-grid">
          <div className="about-copy">
            <p className="section-kicker">About Kyiv Tennis School</p>
            <h2>Coaching That Builds Champions.</h2>
            <div className="about-text">
              <p>
                We develop more than skills. We build confident athletes with
                strong character, professional habits, and a relentless drive to
                improve.
              </p>
              <p>
                Every session is intentional. Every player is seen.
                <br />
                <span>Every detail matters.</span>
              </p>
            </div>

            <div className="about-features">
              {aboutFeatures.map((feature) => (
                <article className="about-feature" key={feature.title}>
                  <span className={`feature-icon feature-icon-${feature.icon}`} aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>
                    <span>{feature.copy[0]}</span>
                    <span>{feature.copy[1]}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-visual" aria-label="Coach mentoring a young tennis player">
            <img
              src={assetPath("/images/about-coaching.png")}
              alt=""
              className="about-photo"
              aria-hidden="true"
            />
            <div className="about-image-fallback" aria-hidden="true">
              <span>Add about-coaching.png</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section scroll-animate" id="testimonials" data-reveal-section>
        <div className="testimonials-intro">
          <div className="testimonials-heading">
            <p className="eyebrow testimonials-eyebrow">
              <span aria-hidden="true" />
              Testimonials
            </p>
            <h2>Trusted by Players. Chosen by Families.</h2>
          </div>

          <div className="testimonials-summary">
            <p>
              From first-time players to competitive athletes, our community
              counts on us to deliver coaching that builds skills, confidence,
              and character.
            </p>
            <div className="rating-row" aria-label="Rated 4.9 out of 5 based on 250 reviews">
              <strong>4.9</strong>
              <span aria-hidden="true">★★★★★</span>
            </div>
            <p className="review-count">Based on 250+ reviews</p>
          </div>
        </div>

        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <article className={`testimonial-card testimonial-card-${index + 1}`} key={testimonial.name}>
              <span className="quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div
                  className="testimonial-avatar"
                  style={{ backgroundImage: `url(${assetPath(testimonial.image)})` }}
                  aria-hidden="true"
                />
                <div className="avatar-fallback" aria-hidden="true">
                  Add image
                </div>
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                  <p>{testimonial.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-section scroll-animate" id="pricing" data-reveal-section>
        <div className="pricing-visual" aria-hidden="true">
          <img src={assetPath("/images/pricing-court.png")} alt="" className="pricing-photo" />
          <div className="pricing-image-fallback">
            <span>Add pricing-court.png</span>
          </div>
        </div>

        <div className="pricing-copy">
          <p className="eyebrow pricing-eyebrow">
            <span aria-hidden="true" />
            Pricing
          </p>
          <h2>Invest in Skills That Last.</h2>
          <p>
            Thoughtfully designed training plans for every age and ambition.
            Choose the path that fits your game.
          </p>
        </div>

        <div className="pricing-cards">
          {pricingPlans.map((plan) => (
            <article className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`} key={plan.title}>
              <div className="pricing-card-head">
                <span className={`pricing-icon pricing-icon-${plan.icon}`} aria-hidden="true" />
                <div>
                  <h3>{plan.title}</h3>
                  <p>{plan.subtitle}</p>
                </div>
                {plan.badge ? <span className="pricing-badge">{plan.badge}</span> : null}
              </div>

              <p className="price">
                <strong>{plan.price}</strong>
                <span>/ Month</span>
              </p>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a className="pricing-cta" href="#">
                <span>{plan.cta}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>

        <a className="pricing-help" href="#">
          <span aria-hidden="true">?</span>
          Need help choosing? Contact our team
        </a>
      </section>

      <section className="cta-section scroll-animate" id="contact" data-reveal-section>
        <div className="cta-visual" aria-hidden="true">
          <img src={assetPath("/images/cta-player.png")} alt="" className="cta-photo" />
          <div className="cta-image-fallback">
            <span>Add cta-player.png</span>
          </div>
        </div>

        <div className="cta-content">
          <p className="cta-kicker">Premium training in Kyiv</p>
          <h2>Built for Focus. Driven by Passion.</h2>
          <p className="cta-lede">
            High-performance coaching, elite facilities, and a community that
            pushes you forward.
          </p>

          <div className="cta-actions" aria-label="CTA actions">
            <a className="cta-primary" href="#">
              <span>Book a trial session</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="cta-secondary" href="#">
              <span>Explore programs</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure className="cta-quote">
            <span className="cta-crest" aria-hidden="true">K</span>
            <blockquote>
              “Kyiv Tennis School transformed my game and my mindset.
              World-class coaching.”
            </blockquote>
            <figcaption>
              <strong>Marta K.</strong>
              <span aria-hidden="true">|</span>
              <span>WTA Player</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <footer className="footer-section scroll-animate" data-reveal-section>
        <div className="footer-grid">
          <div className="footer-lead">
            <a className="footer-brand" href="#" aria-label="Kyiv Tennis School home">
              <span className="footer-brand-mark">K</span>
              <span className="footer-brand-text">
                <span>Kyiv</span>
                <span>Tennis School</span>
              </span>
            </a>

            <p className="footer-kicker">Premium training in Kyiv</p>
            <h2>Building Champions. Shaping Character. Elevating Every Day<span>.</span></h2>
            <p className="footer-copy">
              More than tennis training. We build confidence, discipline, and a
              mindset for success on and off the court.
            </p>
            <a className="trial-link footer-trial" href="#">
              <span>Book a trial</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <span aria-hidden="true">⌖</span>
                <span>
                  Kyiv, Ukraine
                  <br />
                  Training Center
                </span>
              </li>
              <li>
                <span aria-hidden="true">♧</span>
                <span>+380 44 123 45 67</span>
              </li>
              <li>
                <span aria-hidden="true">✉</span>
                <span>info@kyivtennisschool.com</span>
              </li>
            </ul>
            <span className="footer-mini-rule" aria-hidden="true" />
            <div className="footer-hours">
              <h3>Visit Us</h3>
              <p>
                Mon – Fri: 7:00 – 21:00
                <br />
                Sat – Sun: 8:00 – 20:00
              </p>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </nav>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div>
                {socialLinks.map((link) => (
                  <a href="#" key={link} aria-label="Social link">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3>Stay in the Game</h3>
            <p>Get updates on programs, camps, and academy news.</p>
            <form className="newsletter-form">
              <label>
                <span className="sr-only">Email address</span>
                <input type="email" placeholder="Enter your email" />
              </label>
              <button type="submit" aria-label="Subscribe">
                ↗
              </button>
            </form>
            <label className="newsletter-consent">
              <input type="checkbox" />
              <span>I agree to receive emails from Kyiv Tennis School.</span>
            </label>
          </div>

          <div className="footer-visual" aria-hidden="true">
            <img src={assetPath("/images/footer-court.png")} alt="" className="footer-photo" />
            <div className="footer-image-fallback">
              <span>Add footer-court.png</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Kyiv Tennis School. All rights reserved.</p>
          <nav aria-label="Legal navigation">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
