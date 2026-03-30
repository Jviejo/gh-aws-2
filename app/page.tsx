export default function Home() {
  const modules = [
    {
      num: "01",
      title: "Fundamentos de IA",
      desc: "Historia, conceptos clave, machine learning clásico y el ecosistema actual de herramientas.",
      tag: "Base",
    },
    {
      num: "02",
      title: "Python para IA",
      desc: "NumPy, Pandas, Matplotlib y Scikit-learn. El stack esencial para cualquier proyecto de datos.",
      tag: "Práctica",
    },
    {
      num: "03",
      title: "Deep Learning",
      desc: "Redes neuronales, PyTorch, CNNs, RNNs y transformers desde cero hasta producción.",
      tag: "Núcleo",
    },
    {
      num: "04",
      title: "IA Generativa",
      desc: "LLMs, prompting avanzado, fine-tuning, RAG y construcción de pipelines con LangChain.",
      tag: "Avanzado",
    },
    {
      num: "05",
      title: "Agentes Autónomos",
      desc: "Diseño de agentes multi-step, herramientas, memory y sistemas multi-agente con CrewAI.",
      tag: "Avanzado",
    },
    {
      num: "06",
      title: "MLOps & Despliegue",
      desc: "Docker, FastAPI, AWS/GCP, monitoreo de modelos y CI/CD para proyectos de IA en producción.",
      tag: "Producción",
    },
  ];

  const testimonials = [
    {
      name: "Sara M.",
      role: "Ingeniera de Software",
      text: "En 12 semanas pasé de no saber nada de IA a desplegar mi primer agente autónomo en producción. El programa es brutal.",
    },
    {
      name: "Carlos R.",
      role: "Data Scientist",
      text: "El módulo de agentes me cambió la forma de pensar los problemas. Ahora soy el referente de IA en mi empresa.",
      featured: true,
    },
    {
      name: "Ana T.",
      role: "Product Manager",
      text: "Nunca había programado. Hoy tengo un chatbot con RAG funcionando para mi startup. Imposible sin este programa.",
    },
  ];

  return (
    <div
      style={{ background: "var(--ink)", color: "var(--text)", position: "relative", overflowX: "hidden" }}
    >
      {/* ── AMBIENT ORBS ─────────────────────────────────── */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          top: -100,
          left: "20%",
          background: "radial-gradient(circle, rgba(200,146,42,0.18) 0%, transparent 70%)",
          animationDuration: "20s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          top: 200,
          right: "-100px",
          background: "radial-gradient(circle, rgba(0,200,212,0.12) 0%, transparent 70%)",
          animationDuration: "24s",
          animationDelay: "-8s",
        }}
      />

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid var(--border)",
          background: "rgba(6,6,15,0.85)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2rem",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
              color: "var(--gold-light)",
            }}
          >
            IA4DEVS
          </span>
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
            <a
              href="#programa"
              style={{ fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.05em" }}
            >
              PROGRAMA
            </a>
            <a
              href="#testimonios"
              style={{ fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none", letterSpacing: "0.05em" }}
            >
              TESTIMONIOS
            </a>
            <a
              href="#inscripcion"
              style={{
                fontSize: "0.85rem",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                padding: "0.5rem 1.25rem",
                border: "1px solid var(--gold)",
                color: "var(--gold-light)",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.background = "rgba(200,146,42,0.1)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.background = "transparent")
              }
            >
              INSCRÍBETE
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 2rem 4rem",
        }}
      >
        <p
          className="animate-fade-in"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            color: "var(--gold)",
            marginBottom: "2rem",
            opacity: 0,
          }}
        >
          FORMACIÓN INTENSIVA · 12 SEMANAS · 100% ONLINE
        </p>

        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            maxWidth: 900,
            opacity: 0,
          }}
        >
          Domina la IA
          <br />
          <span style={{ color: "var(--gold-light)" }}>que redefine</span>
          <br />
          el mundo
        </h1>

        <p
          className="animate-fade-up delay-300"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "var(--muted)",
            maxWidth: 580,
            lineHeight: 1.7,
            marginTop: "2rem",
            opacity: 0,
          }}
        >
          El programa más completo en español: desde fundamentos hasta agentes
          autónomos con IA generativa. Aprende haciendo, con proyectos reales y
          mentores en activo.
        </p>

        <div
          className="animate-fade-up delay-500"
          style={{ display: "flex", gap: "1rem", marginTop: "3rem", flexWrap: "wrap", justifyContent: "center", opacity: 0 }}
        >
          <a
            href="#inscripcion"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              padding: "1rem 2.5rem",
              background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
              color: "#060610",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = "0.9";
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = "1";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            QUIERO EMPEZAR
          </a>
          <a
            href="#programa"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              padding: "1rem 2.5rem",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--gold)";
              (e.target as HTMLElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--border)";
              (e.target as HTMLElement).style.color = "var(--muted)";
            }}
          >
            VER PROGRAMA
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up delay-700"
          style={{
            display: "flex",
            gap: "4rem",
            marginTop: "6rem",
            opacity: 0,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { val: "500+", label: "estudiantes formados" },
            { val: "96%", label: "satisfacción" },
            { val: "12", label: "semanas intensivas" },
            { val: "6", label: "módulos prácticos" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                  color: "var(--gold-light)",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  marginTop: "0.4rem",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "1rem 0",
          overflow: "hidden",
          background: "var(--surface)",
        }}
      >
        <div className="ticker-track">
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <span key={i} style={{ display: "inline-flex", gap: "3rem", paddingRight: "3rem" }}>
                {[
                  "Python",
                  "PyTorch",
                  "LangChain",
                  "OpenAI",
                  "RAG",
                  "Agentes",
                  "MLOps",
                  "Docker",
                  "FastAPI",
                  "Transformers",
                  "Fine-Tuning",
                  "CrewAI",
                  "AWS",
                  "Scikit-learn",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "var(--muted)",
                      padding: "0 1.5rem",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </span>
            ))}
        </div>
      </div>

      {/* ── PROGRAMA ─────────────────────────────────────── */}
      <section id="programa" style={{ padding: "8rem 2rem", position: "relative" }}>
        <div className="orb" style={{
          width: 400,
          height: 400,
          bottom: 0,
          left: "-100px",
          background: "radial-gradient(circle, rgba(0,200,212,0.08) 0%, transparent 70%)",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ position: "relative", marginBottom: "6rem" }}>
            <div className="section-num" style={{ position: "absolute", top: "-4rem", left: "-1rem" }}>
              02
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              PLAN DE ESTUDIOS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
              }}
            >
              Seis módulos.
              <br />
              Un solo objetivo.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1px",
              background: "var(--border)",
            }}
          >
            {modules.map((m) => (
              <div
                key={m.num}
                className="glass-card"
                style={{ padding: "2.5rem", background: "var(--ink)" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "2.5rem",
                      letterSpacing: "-0.04em",
                      color: "rgba(200,146,42,0.3)",
                      lineHeight: 1,
                    }}
                  >
                    {m.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      padding: "0.25rem 0.6rem",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {m.tag.toUpperCase()}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.8rem",
                  }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARA QUIÉN ───────────────────────────────────── */}
      <section
        style={{
          padding: "8rem 2rem",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ position: "relative", marginBottom: "5rem" }}>
            <div className="section-num" style={{ position: "absolute", top: "-4rem", left: "-1rem" }}>
              03
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              ¿ES PARA MÍ?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Hecho para quienes
              <br />
              <span style={{ color: "var(--gold-light)" }}>crean el futuro.</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "⬡",
                title: "Desarrolladores",
                desc: "Que quieren sumar IA a sus proyectos y convertirse en perfiles senior demandados.",
              },
              {
                icon: "◈",
                title: "Data Scientists",
                desc: "Que necesitan dominar LLMs, agentes y despliegue en producción.",
              },
              {
                icon: "◇",
                title: "Product Managers",
                desc: "Que quieren tomar decisiones informadas e identificar oportunidades de IA.",
              },
              {
                icon: "○",
                title: "Emprendedores",
                desc: "Que construyen productos y quieren la IA como ventaja competitiva real.",
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  padding: "2rem",
                  border: "1px solid var(--border)",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(200,146,42,0.3)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                }
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    color: "var(--gold)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {p.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ──────────────────────────────────── */}
      <section id="testimonios" style={{ padding: "8rem 2rem", position: "relative" }}>
        <div className="orb" style={{
          width: 500,
          height: 500,
          top: "50%",
          right: "-150px",
          background: "radial-gradient(circle, rgba(200,146,42,0.1) 0%, transparent 70%)",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ position: "relative", marginBottom: "5rem" }}>
            <div className="section-num" style={{ position: "absolute", top: "-4rem", left: "-1rem" }}>
              04
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              TESTIMONIOS
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Lo que dicen
              <br />
              nuestros alumnos.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  padding: "2.5rem",
                  border: `1px solid ${t.featured ? "rgba(200,146,42,0.4)" : "var(--border)"}`,
                  background: t.featured ? "rgba(200,146,42,0.04)" : "transparent",
                  position: "relative",
                }}
              >
                {t.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "2rem",
                      right: "2rem",
                      height: "2px",
                      background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
                    }}
                  />
                )}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    color: "var(--text)",
                    marginBottom: "2rem",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      letterSpacing: "0.08em",
                      marginTop: "0.2rem",
                    }}
                  >
                    {t.role.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / INSCRIPCIÓN ────────────────────────────── */}
      <section
        id="inscripcion"
        style={{
          padding: "8rem 2rem",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="orb" style={{
          width: 800,
          height: 800,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(200,146,42,0.12) 0%, transparent 60%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <div className="section-num" style={{ margin: "0 auto -4rem" }}>05</div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "var(--gold)",
              marginBottom: "1.5rem",
            }}
          >
            PRÓXIMA CONVOCATORIA
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              marginBottom: "2rem",
            }}
          >
            El momento
            <br />
            <span style={{ color: "var(--gold-light)" }}>es ahora.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.15rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: "3rem",
            }}
          >
            Las plazas son limitadas. Cada cohorte trabaja en pequeños grupos para
            garantizar la atención personalizada que mereces.
          </p>

          <div
            style={{
              display: "inline-block",
              border: "1px solid var(--border)",
              padding: "2.5rem",
              marginBottom: "2.5rem",
              background: "var(--surface)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                letterSpacing: "-0.03em",
                color: "var(--gold-light)",
                lineHeight: 1,
              }}
            >
              997€
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--muted)",
                marginTop: "0.5rem",
              }}
            >
              acceso vitalicio · mentorías · comunidad privada
            </div>
          </div>

          <br />
          <a
            href="mailto:hola@ia4devs.com"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              padding: "1.25rem 3.5rem",
              background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
              color: "#060610",
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.opacity = "0.9";
              (e.target as HTMLElement).style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.opacity = "1";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            RESERVAR MI PLAZA
          </a>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--muted)",
              marginTop: "1.5rem",
              fontStyle: "italic",
            }}
          >
            Garantía de devolución de 14 días sin preguntas.
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "3rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "0.9rem",
            letterSpacing: "-0.01em",
            color: "var(--gold-light)",
          }}
        >
          IA4DEVS
        </span>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--muted)",
          }}
        >
          © 2025 IA4Devs. Todos los derechos reservados.
        </p>
        <a
          href="mailto:hola@ia4devs.com"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            color: "var(--muted)",
            textDecoration: "none",
          }}
        >
          hola@ia4devs.com
        </a>
      </footer>
    </div>
  );
}
