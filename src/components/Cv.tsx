export default function CvMarine() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --pink: #FD6E8B;
          --pink-dark: #D94B68;
          --pink-pale: #FFF0F3;
          --pink-mid: #FDDAE2;
          --mauve: #C47FBF;
          --dark: #18111A;
          --dark2: #241A27;
          --surface: #FFFFFF;
          --bg: #FBF7F8;
          --text: #1C1218;
          --muted: #8E7D88;
          --border: #EFE3E8;
          --tag-bg: #F9ECF0;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          font-size: 12.5px;
          line-height: 1.6;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }

        .page {
          max-width: 880px;
          margin: 28px auto;
          background: var(--surface);
          display: grid;
          grid-template-columns: 220px 1fr;
          min-height: 1100px;
          box-shadow: 0 8px 60px rgba(253,110,139,0.13), 0 2px 16px rgba(0,0,0,0.06);
        }

        .sidebar {
          background: var(--dark);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .sidebar::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(253,110,139,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .sidebar::after {
          content: '';
          position: absolute;
          bottom: 80px;
          left: -80px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,127,191,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .sidebar-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0 0 32px;
        }

        .s-header {
          padding: 32px 22px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
        }

        .avatar {
          width: 68px;
          height: 68px;
          border-radius: 20px;
          background: linear-gradient(135deg, var(--pink) 0%, var(--pink-dark) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 1px;
          flex-shrink: 0;
        }

        .s-name {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          line-height: 1.25;
        }

        .s-role {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--pink);
          margin-top: -6px;
        }

        .s-body {
          padding: 24px 22px 0;
          display: flex;
          flex-direction: column;
          gap: 26px;
        }

        .s-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .s-label {
          font-family: 'Syne', sans-serif;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .c-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 11px;
          color: rgba(255,255,255,0.68);
          line-height: 1.45;
        }

        .c-item svg {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          margin-top: 1px;
          color: var(--pink);
          opacity: 0.85;
        }

        .c-item a {
          color: rgba(255,255,255,0.68);
          text-decoration: none;
        }

        .skill-cat {
          font-size: 9px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.28);
          margin-top: 4px;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 4px;
        }

        .stag {
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          padding: 2px 8px;
          border-radius: 4px;
          background: rgba(253,110,139,0.13);
          border: 1px solid rgba(253,110,139,0.22);
          color: rgba(255,255,255,0.80);
        }

        .stag.in-progress {
          background: rgba(196,127,191,0.14);
          border-color: rgba(196,127,191,0.28);
          color: #D4A8D2;
          font-style: italic;
        }

        .lang-row {
          display: flex;
          justify-content: space-between;
          font-size: 11.5px;
          color: rgba(255,255,255,0.72);
        }

        .lang-lv {
          font-size: 10px;
          color: rgba(255,255,255,0.30);
          font-style: italic;
        }

        .q-item {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 11.5px;
          color: rgba(255,255,255,0.72);
        }

        .q-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--pink);
          flex-shrink: 0;
        }

        .int-row {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .int-chip {
          border: 1px solid rgba(253,110,139,0.18);
          border-radius: 20px;
          padding: 3px 10px;
          font-size: 10.5px;
          color: rgba(255,255,255,0.55);
        }

        .main {
          display: flex;
          flex-direction: column;
        }

        .hero-band {
          background: var(--pink-pale);
          border-bottom: 1px solid var(--pink-mid);
          padding: 28px 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hero-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pink-dark);
        }

        .hero-text {
          font-size: 12.5px;
          color: #4A3540;
          line-height: 1.72;
          font-weight: 300;
          max-width: 520px;
        }

        .hero-text strong {
          color: var(--text);
          font-weight: 600;
        }

        .dispo {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid var(--pink-mid);
          border-radius: 6px;
          padding: 7px 14px;
          font-size: 11.5px;
          font-weight: 600;
          color: var(--pink-dark);
          width: fit-content;
          margin-top: 4px;
        }

        .dispo-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--pink);
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: .35; }
        }

        .content {
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          flex: 1;
        }

        .sec-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .sec-label {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          white-space: nowrap;
        }

        .sec-line {
          height: 1px;
          background: var(--border);
          flex: 1;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .proj-card {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #fff;
          position: relative;
          overflow: hidden;
          transition: box-shadow .2s;
        }

        .proj-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--pink) 0%, #FFB3C3 100%);
        }

        .proj-card.perso::after {
          background: linear-gradient(90deg, var(--mauve) 0%, #DDB0D8 100%);
        }

        .proj-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .proj-name {
          font-family: 'Syne', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: var(--text);
        }

        .proj-meta {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: var(--muted);
          text-align: right;
          line-height: 1.4;
          white-space: nowrap;
          margin-left: 8px;
        }

        .proj-desc {
          font-size: 11.5px;
          color: #6A5260;
          line-height: 1.55;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 2px;
        }

        .ptag {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          padding: 2px 7px;
          border-radius: 4px;
          background: var(--tag-bg);
          border: 1px solid var(--pink-mid);
          color: var(--pink-dark);
        }

        .proj-card.perso .ptag {
          background: #F5E8F5;
          border-color: #DFC0DF;
          color: #844080;
        }

        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .exp-item {
          display: grid;
          grid-template-columns: 3px 1fr;
          gap: 0 14px;
        }

        .exp-line {
          width: 3px;
          background: linear-gradient(180deg, var(--pink) 0%, var(--pink-mid) 100%);
          border-radius: 3px;
          margin-top: 4px;
        }

        .exp-body {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .exp-role {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--text);
        }

        .exp-period {
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          color: var(--muted);
          white-space: nowrap;
          margin-left: 8px;
          margin-top: 2px;
        }

        .exp-co {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--pink);
        }

        .exp-bul {
          display: flex;
          flex-direction: column;
          gap: 3px;
          margin-top: 5px;
        }

        .bul {
          display: flex;
          gap: 8px;
          font-size: 11.5px;
          color: #6A5260;
        }

        .bul::before {
          content: '–';
          color: var(--pink-mid);
          flex-shrink: 0;
          font-size: 11px;
          margin-top: 1px;
        }

        .form-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-item {
          display: grid;
          grid-template-columns: 3px 1fr;
          gap: 0 14px;
        }

        .form-line {
          width: 3px;
          background: linear-gradient(180deg, var(--mauve) 0%, #ECD4EC 100%);
          border-radius: 3px;
          margin-top: 4px;
        }

        .form-body {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .form-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .form-name {
          font-family: 'Syne', sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text);
        }

        .form-period {
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          color: var(--muted);
          white-space: nowrap;
          margin-left: 8px;
          margin-top: 2px;
        }

        .form-desc {
          font-size: 11.5px;
          color: #6A5260;
          line-height: 1.55;
          margin-top: 3px;
        }

        @media print {
          body {
            background: white;
          }

          .page {
            margin: 0;
            box-shadow: none;
            max-width: 100%;
          }
        }
      `}</style>

      <div className="page">
        <aside className="sidebar">
          <div className="sidebar-inner">
            <div className="s-header">
  <div>
    <div className="s-name">Marine Agasse</div>
    <div className="s-role">Développeuse Full-Stack</div>
  </div>
</div>

            <div className="s-body">
              <div className="s-section">
                <div className="s-label">Contact</div>

                <div className="c-item">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <path d="M1 3l5 4 5-4M1 3h10v7H1V3z" />
                  </svg>
                  <a href="mailto:agsmarine23@gmail.com">agsmarine23@gmail.com</a>
                </div>

                <div className="c-item">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <path d="M2 1h8a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm3 3v5M3 6.5h2.5V4" />
                  </svg>
                  06 38 82 98 26
                </div>

                <div className="c-item">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <path d="M6 1a4 4 0 014 4c0 2.8-4 7-4 7S2 7.8 2 5a4 4 0 014-4z" />
                    <circle cx="6" cy="5" r="1.2" />
                  </svg>
                  St-Herblain (44)
                </div>

                <div className="c-item">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <rect x="1" y="1" width="10" height="10" rx="1.5" />
                    <path d="M1 5h10M5 1v10" />
                  </svg>
                  <a href="https://github.com/marineags" target="_blank" rel="noreferrer">
                    github.com/marineags
                  </a>
                </div>

                <div className="c-item">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <rect x="1" y="1" width="10" height="10" rx="2" />
                    <path d="M4 5.5v4M4 3.5v.5M6.5 9.5V5.5c0-1 .7-1.5 1.5-1.5s1.5.5 1.5 1.5v4" />
                  </svg>
                  <a href="https://linkedin.com/in/marine-agasse-dev" target="_blank" rel="noreferrer">
                    marine-agasse-dev
                  </a>
                </div>
              </div>

              <div className="s-section">
                <div className="s-label">Compétences</div>

                <div className="skill-cat">Front-end</div>
                <div className="tag-row">
                  <span className="stag">HTML</span>
                  <span className="stag">CSS</span>
                  <span className="stag">JavaScript</span>
                  <span className="stag">TypeScript</span>
                  <span className="stag">React</span>
                  <span className="stag">Tailwind</span>
                </div>

                <div className="skill-cat">Back-end</div>
                <div className="tag-row">
                  <span className="stag">API REST</span>
                  <span className="stag">SQL</span>
                </div>

                <div className="skill-cat">Outils</div>
                <div className="tag-row">
                  <span className="stag">Git</span>
                  <span className="stag">GitHub</span>
                  <span className="stag">IntelliJ</span>
                  <span className="stag">Vite</span>
                </div>

                <div className="skill-cat">En apprentissage</div>
                <div className="tag-row">
                  <span className="stag in-progress">Java</span>
                  <span className="stag in-progress">Python</span>
                  <span className="stag in-progress">Angular</span>
                </div>
              </div>

              <div className="s-section">
                <div className="s-label">Langues</div>
                <div className="lang-row">
                  <span>Français</span>
                  <span className="lang-lv">Natif</span>
                </div>
                <div className="lang-row">
                  <span>Anglais</span>
                  <span className="lang-lv">Notions</span>
                </div>
              </div>

              <div className="s-section">
                <div className="s-label">Qualités</div>
                <div className="q-item"><span className="q-dot"></span>Autonome et rigoureuse</div>
                <div className="q-item"><span className="q-dot"></span>Curiosité & apprentissage rapide</div>
                <div className="q-item"><span className="q-dot"></span>Esprit d'équipe</div>
              </div>

              <div className="s-section">
                <div className="s-label">Intérêts</div>
                <div className="int-row">
                  <span className="int-chip">🎨 Créativité</span>
                  <span className="int-chip">🏃 Sport</span>
                  <span className="int-chip">🍳 Cuisine</span>
                  <span className="int-chip">💻 Veille tech</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="main">
          <div className="hero-band">
            <div className="hero-eyebrow">Profil</div>
            <p className="hero-text">
              Issue du domaine commercial, j'ai choisi de me réorienter vers le développement web — un
              secteur en constante évolution qui correspond à ma curiosité et mon envie d'apprendre.
              <strong> En quelques mois, j'ai acquis des bases solides en front-end</strong> et développé
              plusieurs projets concrets, scolaires comme personnels. Je cherche une alternance pour
              progresser dans un environnement technique stimulant.
            </p>
            <div className="dispo">
              <span className="dispo-dot"></span>
              Alternance dès septembre 2026 · 4j entreprise / 1j formation (vendredi)
            </div>
          </div>

          <div className="content">
            <div>
              <div className="sec-head">
                <span className="sec-label">Projets scolaires</span>
                <span className="sec-line"></span>
              </div>

              <div className="proj-grid">
                <div className="proj-card">
                  <div className="proj-top">
                    <div className="proj-name">DataViz</div>
                    <div className="proj-meta">
                      3 pers.
                      <br />
                      3 semaines
                    </div>
                  </div>
                  <div className="proj-desc">
                    Visualisation de données interactive : graphiques dynamiques, composants modulaires,
                    gestion d'état avancée.
                  </div>
                  <div className="proj-tags">
                    <span className="ptag">React</span>
                    <span className="ptag">TypeScript</span>
                    <span className="ptag">Vite</span>
                  </div>
                </div>

                <div className="proj-card">
                  <div className="proj-top">
                    <div className="proj-name">Adaopte</div>
                    <div className="proj-meta">
                      2 pers.
                      <br />
                      2 semaines
                    </div>
                  </div>
                  <div className="proj-desc">
                    Plateforme de gestion de profils d'animaux à adopter, avec filtrage interactif et
                    navigation fluide.
                  </div>
                  <div className="proj-tags">
                    <span className="ptag">React.js</span>
                    <span className="ptag">Filtrage dynamique</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sec-head">
                <span className="sec-label">Projets personnels</span>
                <span className="sec-line"></span>
              </div>

              <div className="proj-grid">
                <div className="proj-card perso">
                  <div className="proj-top">
                    <div className="proj-name">TodoList</div>
                    <div className="proj-meta">
                      Solo
                      <br />
                      3 jours
                    </div>
                  </div>
                  <div className="proj-desc">
                    Application de gestion de tâches — CRUD complet, filtrage et interface interactive.
                  </div>
                  <div className="proj-tags">
                    <span className="ptag">React.js</span>
                    <span className="ptag">DaisyUI</span>
                  </div>
                </div>

                <div className="proj-card perso">
                  <div className="proj-top">
                    <div className="proj-name">
                      Lunéa{" "}
                      <span
                        style={{
                          fontSize: "9px",
                          color: "var(--mauve)",
                          fontFamily: "'DM Mono', monospace",
                          fontWeight: 400,
                          marginLeft: "4px",
                        }}
                      >
                        en cours
                      </span>
                    </div>
                    <div className="proj-meta">Solo</div>
                  </div>
                  <div className="proj-desc">
                    Application de suivi de la ménopause croisant données sommeil, humeur, nutrition.
                    Travail approfondi sur la modélisation et l'UX.
                  </div>
                  <div className="proj-tags">
                    <span className="ptag">UX Design</span>
                    <span className="ptag">Modélisation</span>
                    <span className="ptag">React</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sec-head">
                <span className="sec-label">Expériences</span>
                <span className="sec-line"></span>
              </div>

              <div className="exp-list">
                <div className="exp-item">
                  <div className="exp-line"></div>
                  <div className="exp-body">
                    <div className="exp-top">
                      <div className="exp-role">Préparatrice de commandes</div>
                      <div className="exp-period">Fév. – Juin 2025</div>
                    </div>
                    <div className="exp-co">Leclerc Drive</div>
                    <div className="exp-bul">
                      <div className="bul">Organisation et priorisation en flux tendu</div>
                      <div className="bul">Rigueur, sens du détail, respect des délais</div>
                      <div className="bul">Travail d'équipe collaboratif</div>
                    </div>
                  </div>
                </div>

                <div className="exp-item">
                  <div className="exp-line"></div>
                  <div className="exp-body">
                    <div className="exp-top">
                      <div className="exp-role">Vendeuse en alternance</div>
                      <div className="exp-period">2024 – 2025</div>
                    </div>
                    <div className="exp-co">Bazar Avenue</div>
                    <div className="exp-bul">
                      <div className="bul">Conseil client et identification des besoins</div>
                      <div className="bul">Organisation du rayon et gestion des priorités</div>
                      <div className="bul">Travail en équipe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sec-head">
                <span className="sec-label">Formations</span>
                <span className="sec-line"></span>
              </div>

              <div className="form-list">
                <div className="form-item">
                  <div className="form-line"></div>
                  <div className="form-body">
                    <div className="form-top">
                      <div className="form-name">Concepteur Développeur d'Applications · RNCP niv. 6</div>
                      <div className="form-period">2025 – 2026</div>
                    </div>
                    <div className="form-desc">
                      Développement d'applications web et mobile, conception, architecture front & back,
                      méthodologie agile.
                    </div>
                  </div>
                </div>

                <div className="form-item">
                  <div className="form-line"></div>
                  <div className="form-body">
                    <div className="form-top">
                      <div className="form-name">BTS Management Commercial Opérationnel</div>
                      <div className="form-period">2024 – 2025</div>
                    </div>
                    <div className="form-desc">
                      Gestion d'unité commerciale, relation client, organisation et communication.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}