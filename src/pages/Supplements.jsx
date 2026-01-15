import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { supplements, SUPPLEMENTS_CONTACT } from "../data/supplements";

export default function Supplements() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return supplements;
    return supplements.filter((p) => {
      const hay = [p.name, ...(p.beneficialFor || []), ...(p.ingredients || [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(s);
    });
  }, [q]);

  const waLink = `https://wa.me/27${SUPPLEMENTS_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I'd like to enquire about your supplements."
  )}`;

  return (
    <div className="bgGlow">
      {/* Topbar (simple + consistent) */}
      <header className="topbar">
        <div className="container topbarInner">
          <Link className="brand" to="/">
            <div className="brandMark">
              <img src="/logo.png" alt="Body Aequilibrium logo" />
            </div>
            <div className="brandText">
              <div className="brandTitle">Body Aequilibrium</div>
              <div className="brandSub">Biofeedback • Balance • Wellness</div>
            </div>
          </Link>

          <div className="actions" style={{ gap: 10 }}>
            <Link className="btn btnGhost" to="/">
              ← Home
            </Link>

            <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp →
            </a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="container section" style={{ paddingTop: 28 }}>
        <div className="eyebrow">Supplements</div>
        <div className="h2">Supplement range</div>
        <div className="sub">
          Browse common options and enquire for availability and guidance.
        </div>
        <div className="sectionHeaderLine" />
        <div className="suppMobileHome">
          <Link className="btn btnGhost" to="/">← Home</Link>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
  <input
    className="input"
    value={q}
    onChange={(e) => setQ(e.target.value)}
    placeholder="Search (e.g. stress, digestion, immunity)..."
    style={{ maxWidth: 420 }}
  />

  <a className="btn btnPrimary" href={waLink} target="_blank" rel="noreferrer">
    Enquire on WhatsApp →
  </a>

  <a className="btn btnGhost" href="/ADV-PILLE-PDF.pdf" target="_blank" rel="noreferrer">
    Download PDF
  </a>
</div>

<div className="notice" style={{ marginTop: 10, maxWidth: 680 }}>
  <strong style={{ color: "var(--text)" }}>Enquiries:</strong>{" "}
  For all supplement enquiries, please contact <strong>Jannie</strong> via the WhatsApp button above.
</div>


        <div className="gridCards" style={{ marginTop: 18 }}>
          {filtered.map((p) => (
            <div className="card" key={p.name}>
              <div className="cardTitle">{p.name}</div>

              <div className="cardSub" style={{ marginTop: 10, fontWeight: 800 }}>
                Beneficial for:
              </div>
              <ul style={{ marginTop: 8, paddingLeft: 18, color: "var(--muted)" }}>
                {p.beneficialFor.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="cardSub" style={{ marginTop: 12, fontWeight: 800 }}>
                Ingredients:
              </div>
              <ul style={{ marginTop: 8, paddingLeft: 18, color: "var(--muted)" }}>
                {p.ingredients.map((i) => (
                  <li key={i} style={{ marginBottom: 6 }}>
                    {i}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        <div className="notice" style={{ marginTop: 18 }}>
          <strong style={{ color: "var(--text)" }}>Disclaimer:</strong> This information is for general
          guidance only and is not medical advice. If you have a medical condition, consult a qualified
          healthcare professional.
        </div>

        <div style={{ height: 26 }} />
      </main>

      {/* Floating WhatsApp (optional, matches your site) */}
      <a className="fab" href={waLink} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
