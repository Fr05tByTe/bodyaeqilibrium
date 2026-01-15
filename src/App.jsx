import { useMemo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Supplements from "./pages/Supplements";

const NAV = [
  { label: "How it Works", href: "#how" },
  { label: "Treatments", href: "#treatments" },
  { label: "Stressors", href: "#stressors" },
  { label: "What to Expect", href: "#expect" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Supplements", to: "/supplements" },
];

const FEATURES = [
  {
    title: "Stress Detection",
    desc: "Biofeedback-based scanning helps highlight areas where the body may be under stress.",
    icon: "🫧",
  },
  {
    title: "Stress Reduction Support",
    desc: "Sessions introduce healthier reference patterns to support regulation and recovery.",
    icon: "🌿",
  },
  {
    title: "Personalized Session Report",
    desc: "A summary of findings guides wellness-focused actions and supportive follow-ups.",
    icon: "📄",
  },
];

const STEPS = [
  {
    title: "Scan & measure stress responses",
    desc: "We measure stress-related electrical responses and energetic patterns.",
  },
  {
    title: "Identify patterns & stressors",
    desc: "Areas of stress are highlighted and compiled into a clear report.",
  },
  {
    title: "Introduce balancing frequencies",
    desc: "The system provides healthy reference patterns to support stress reduction.",
  },
  {
    title: "Review results + wellness guidance",
    desc: "Your therapist explains results and suggests gentle, supportive next steps.",
  },
];

const TREATMENTS = [
  "Stress Reduction",
  "Fatigue & Burnout Support",
  "Headaches & Migraines Support",
  "Digestion Support",
  "Immune Challenges Support",
  "Emotional Stress Support",
  "Allergy Support",
  "Detox / Weight Support",
  "Hormonal / Menopause Support",
  "Joint & Muscle Discomfort Support",
  "Concentration / Learning Support",
  "Sport Performance Support",
  "General Wellness Improvement",
];

const STRESSORS = [
  "Allergens",
  "Bacteria & viruses",
  "Chemicals",
  "Dehydration",
  "Emotional issues",
  "Self-concept challenges",
  "Employment stress",
  "Overworking",
  "Exercise load",
  "Fast foods",
  "Genetically altered foods",
  "Financial problems",
  "Fungi & fungal infections",
  "Headaches and migraines",
  "Heavy metals",
  "Irradiation",
  "Lack of sleep",
  "Medical conditions",
  "Microwave radiation",
  "Pain",
  "Parasites",
  "Prescription drugs",
  "Psychological conditions",
  "Relationship problems",
];

const FAQ = [
  {
    q: "Is the session invasive or painful?",
    a: "No. Sessions are non-invasive and designed to be comfortable and gentle.",
  },
  {
    q: "Does SCIO diagnose medical conditions?",
    a: "No. Biofeedback sessions are intended for stress detection and stress reduction support — not medical diagnosis or treatment.",
  },
  {
    q: "Can I do this alongside my doctor’s care?",
    a: "Yes — many clients use biofeedback as a supportive approach alongside professional medical care.",
  },
  {
    q: "How many sessions do I need?",
    a: "It varies by person and goals. Your therapist can recommend a plan after your first session.",
  },
];

function Button({ as = "button", href, variant = "primary", children, ...props }) {
  const cls =
    variant === "primary"
      ? "btn btnPrimary"
      : variant === "ghost"
        ? "btn btnGhost"
        : "btn";
  if (as === "a") {
    return (
      <a className={cls} href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Divider() {
  return (
    <div className="container">
      <div className="divider" />
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div style={{ marginBottom: 22 }}>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <div className="h2">{title}</div>
          {subtitle && <div className="sub">{subtitle}</div>}
          <div className="sectionHeaderLine" />
        </div>
        {children}
      </div>
    </section>
  );
}

function HomePage({ mobileOpen, setMobileOpen, year }) {
  return (
    <div className="bgGlow">
      <header className="topbar">
        <div className="container topbarInner">
          <a className="brand" href="#top">
              <div className="brandMark">
                <img src="/logo.png" alt="Body Aequilibrium logo" />
              </div>            
              <div className="brandText">
              <div className="brandTitle">Body Aequilibrium</div>
              <div className="brandSub">Biofeedback • Balance • Wellness</div>
            </div>
          </a>

          <nav className="nav">
            {NAV.map((n) =>
              n.to ? (
                <Link key={n.to} to={n.to}>
                  {n.label}
                </Link>
              ) : (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              )
            )}
          </nav>


          <div className="actions">
            <Button as="a" href="#contact" variant="primary" style={{ width: "100%" }}>
              Book a Session
            </Button>
          </div>

          <button className="menuBtn" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="mobileMenu">
            <div className="container">
              {NAV.map((n) =>
                n.to ? (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setMobileOpen(false)}
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a key={n.href} href={n.href} onClick={() => setMobileOpen(false)}>
                    {n.label}
                  </a>
                )
              )}
              <div className="mobileActions">
               <Button as="a" href="#contact" variant="primary" style={{ width: "100%" }}>
              Book a Session
            </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <div className="grid2">
              <div>
                <div className="badge">
                  <span className="dot" />
                  Non-invasive biofeedback sessions
                </div>

                <h1 className="h1">
                  Restore balance. <span>Reduce stress.</span> Support your body’s natural healing.
                </h1>

                <p className="lead">
                  The SCIO biofeedback system helps identify stress patterns and supports stress
                  reduction by introducing healthier energetic reference patterns — guiding the body
                  back toward balance.
                </p>

                <div className="heroBtns">
                  <Button as="a" href="#contact" variant="primary">
                    Book a Session →
                  </Button>
                  <Button as="a" href="#how" variant="ghost">
                    Learn How It Works
                  </Button>
                </div>

                <div className="pills" style={{ marginTop: 14 }}>
                  <Pill>Personalized report</Pill>
                  <Pill>200+ therapy options</Pill>
                  <Pill>Stress detection & reduction</Pill>
                </div>

                <div className="aboutAnita">
  <div className="aboutAnitaHeader">
    <div className="aboutAnitaAvatar">
      <span>A</span>
      {/* Optional later: <img src="/anita.jpg" alt="Anita" /> */}
    </div>
    <div>
      <div className="aboutAnitaEyebrow">About</div>
      <div className="aboutAnitaName">Anita</div>
    </div>
  </div>

  <div className="aboutAnitaText">
    Anita is a biofeedback practitioner focused on helping the body return to balance by gently
    identifying and reducing stress patterns. Her approach is calm, non-invasive, and deeply
    client-centred — supporting the body’s natural ability to regulate and heal itself.
  </div>

  <div className="aboutAnitaQuote">
    “The body already knows how to heal. We simply help remove what’s standing in the way.”
  </div>
</div>

              </div>

<div className="heroFeaturePanel">
  <div className="heroFeatureTop">
    <div>
      <div className="kicker">SCIO</div>
      <div className="cardTitle">Scientific Consciousness Interface Operation</div>
      <div className="cardSub">“SCIO” is also the Latin form of “to know.”</div>

      <div style={{ marginTop: 10 }}>
        <span className="heroFeatureBadge">Non-invasive • Biofeedback</span>
      </div>
    </div>

    <div className="iconBox" aria-hidden>〰️</div>
  </div>

  <div className="heroFeatureSplit">
    <div className="heroFeatureGrid">
      {FEATURES.map((f) => (
        <div key={f.title} className="miniCard">
          <div className="miniIcon">{f.icon}</div>
          <div>
            <div className="miniTitle">{f.title}</div>
            <div className="miniDesc">{f.desc}</div>
          </div>
        </div>
      ))}

      <div className="notice">
        <strong style={{ color: "var(--text)" }}>Disclaimer:</strong> Biofeedback sessions are intended
        for stress detection and stress reduction support and are not a substitute for medical diagnosis
        or treatment.
      </div>
    </div>

<div className="heroFeatureLogo">
  <img src="/logo.png" alt="Body Aequilibrium logo" />
</div>
  </div>
</div>

            </div>
          </div>
        </section>

        <Divider />

        <Section
          id="how"
          eyebrow="Process"
          title="How it works"
          subtitle="A calm, structured session designed to gently help the body unload stressors and support self-regulation."
        >
          <div className="gridCards">
            {STEPS.map((s, idx) => (
              <div key={s.title} className="step">
                <div className="stepRow">
                  <div className="stepNum">{idx + 1}</div>
                  <div>
                    <div className="stepTitle">{s.title}</div>
                    <div className="stepDesc">{s.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="step" style={{ marginTop: 14 }}>
            <div className="stepTitle">What we believe</div>
            <div className="stepDesc" style={{ marginTop: 6 }}>
              The body has an innate capacity for balance and healing. Our aim is to reduce and
              relieve stress so the body has the energy and resources it needs to take care of
              itself.
            </div>
          </div>
        </Section>

        <Divider />

        <Section
          id="treatments"
          eyebrow="Sessions"
          title="Popular session focuses"
          subtitle="The system offers 200+ biofeedback therapies. Here are some common focuses clients choose."
        >
          <div className="gridCards cols3">
            {TREATMENTS.map((t) => (
              <div key={t} className="step" style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div className="miniIcon" aria-hidden>✨</div>
                <div className="stepTitle">{t}</div>
              </div>
            ))}
          </div>

          <div className="step" style={{ marginTop: 14 }}>
            <div className="stepDesc">
              Looking for something specific? Send us a message and we’ll guide you to the most
              relevant session options.
            </div>
          </div>
        </Section>

        <Divider />

        <Section
          id="stressors"
          eyebrow="What contributes to stress"
          title="Stress can come from many factors"
          subtitle="Stress patterns may be influenced by lifestyle, environment, emotions, and more."
        >
          <div className="tags">
            {STRESSORS.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </Section>

        <Divider />

        <Section
          id="expect"
          eyebrow="First visit"
          title="What to expect"
          subtitle="A calm, guided experience with clear next steps."
        >
          <div className="gridCards cols3" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
            <div className="form">
              <div className="stepTitle">Session flow</div>
              <div className="stepDesc" style={{ marginTop: 10, lineHeight: 1.8 }}>
                • Comfortable, non-invasive session<br />
                • Stress patterns measured and compiled<br />
                • Supportive balancing frequencies introduced<br />
                • Report + wellness guidance
              </div>
            </div>

            <div className="form">
              <div className="stepTitle">Before you arrive</div>
              <div className="stepDesc" style={{ marginTop: 10, lineHeight: 1.8 }}>
                ✓ Hydrate well<br />
                ✓ Wear comfortable clothing<br />
                ✓ Arrive 10 minutes early if possible<br />
                ✓ Bring your wellness goals
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        <Section
          id="faq"
          eyebrow="Answers"
          title="FAQ"
          subtitle="Quick clarity on what biofeedback sessions are — and what they aren’t."
        >
          <div className="gridCards">
            {FAQ.map((item) => (
              <details key={item.q} className="step">
                <summary className="stepTitle" style={{ cursor: "pointer" }}>{item.q}</summary>
                <div className="stepDesc" style={{ marginTop: 10 }}>{item.a}</div>
              </details>
            ))}
          </div>
        </Section>

        <Divider />

        <Section
          id="contact"
          eyebrow="Book"
          title="Contact & booking"
          subtitle="Send an enquiry and we’ll get back to you with available session times."
        >
          <div className="gridCards contactGrid">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted (wire this to your backend / email service later).");
              }}
            >
              <div className="field">
                <div className="label">Name</div>
                <input className="input" placeholder="Your name" required />
              </div>
              <div className="field">
                <div className="label">Email</div>
                <input className="input" type="email" placeholder="you@email.com" required />
              </div>
              <div className="field">
                <div className="label">Phone / WhatsApp</div>
                <input className="input" placeholder="+27..." />
              </div>
              <div className="field">
                <div className="label">Message</div>
                <textarea className="textarea" placeholder="What would you like help with?" required />
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Button variant="primary" type="submit">Send enquiry</Button>
                <Button as="a" href="https://wa.me/27XXXXXXXXX" variant="ghost" target="_blank" rel="noreferrer">
                  WhatsApp
                </Button>
              </div>

              <div className="notice">
              Please use the WhatsApp enquiry for a faster response.
              </div>
            </form>

            <div className="form">
              <div className="stepTitle">Practice details</div>
              <div className="stepDesc" style={{ marginTop: 10, lineHeight: 1.9 }}>
                <strong style={{ color: "var(--text)" }}>Location:</strong> Add address here<br />
                <strong style={{ color: "var(--text)" }}>Hours:</strong> Mon–Fri 09:00–17:00<br />
                <strong style={{ color: "var(--text)" }}>Email:</strong> hello@yourdomain.co.za<br />
                <strong style={{ color: "var(--text)" }}>Phone:</strong> +27 xx xxx xxxx
              </div>

              <div className="notice" style={{ marginTop: 12 }}>
                <strong style={{ color: "var(--text)" }}>Medical Disclaimer:</strong> This service is
                intended for stress detection and stress reduction support. It is not a substitute
                for medical diagnosis or treatment. If you have a medical condition, consult a
                qualified healthcare professional.
              </div>

              <div className="step" style={{ marginTop: 12, height: 160, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="stepDesc">Map placeholder (embed Google Map later)</div>
              </div>
            </div>
          </div>
        </Section>

        <footer style={{ paddingBottom: 42 }}>
          <div className="container">
            <div className="footerCard">
              <div>
                <div style={{ fontWeight: 900 }}>Body Aequilibrium</div>
                <div style={{ color: "var(--muted)", fontSize: 12, marginTop: 2 }}>
                  Biofeedback • Balance • Wellness
                </div>
              </div>
              <div style={{ color: "var(--muted)", fontSize: 12 }}>
                © {year} Body Aequilibrium. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

        <a className="fab" href="https://wa.me/27XXXXXXXXX" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </main>
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
  <Routes>
    <Route
      path="/"
      element={<HomePage mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} year={year} />}
    />
    <Route path="/supplements" element={<Supplements />} />
  </Routes>
);

}
