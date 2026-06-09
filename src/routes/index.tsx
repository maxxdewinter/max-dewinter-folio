import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";
import portraitAsset from "@/assets/max-portrait-new.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Max DeWinter" },
      { name: "description", content: "Max DeWinter — founder and operator. Personal site, ventures, and contact." },
      { property: "og:title", content: "Max DeWinter" },
      { property: "og:description", content: "Max DeWinter — founder and operator." },
    ],
  }),
  component: Index,
});

const socials = [
  { label: "Instagram", href: "https://instagram.com/maxdewinter", Icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com/@maxdewinter", Icon: TikTokIcon },
  { label: "YouTube", href: "https://youtube.com/@maxdewinter", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/in/maxdewinter", Icon: Linkedin },
];

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31Z" />
    </svg>
  );
}

function SocialRow({ size = 26 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
            className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-primary/15 text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Icon width={size} height={size} />
        </a>
      ))}
    </div>
  );
}

function FlagPill({ code, name }: { code: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/60 px-3 py-1.5 text-sm">
      <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground" aria-hidden="true">{code}</span>
      <span className="text-foreground/90 font-normal">{name}</span>
    </span>
  );
}

function Index() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#hero" className="font-serif text-xl tracking-wide text-foreground">MDW</a>
          <div className="flex items-center gap-2 sm:gap-3 text-[15px] font-medium text-foreground/80" style={{ fontFamily: '"Inter", sans-serif' }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md hover:text-foreground hover:bg-foreground/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex flex-col md:flex-row pt-16">
        <div className="flex-1 flex items-center px-6 md:px-16 py-16 md:py-20">
          <div className="max-w-xl w-full">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
              Max<br />DeWinter
            </h1>
            <dl className="mt-10 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 text-base md:text-lg">
              {[
                { label: "Born", places: [{ code: "TH", name: "Thailand" }, { code: "EN", name: "England" }] },
                { label: "Raised", places: [{ code: "NZ", name: "New Zealand" }] },
                { label: "Studied", places: [{ code: "US", name: "USA" }, { code: "AU", name: "Australia" }] },
                { label: "Based", places: [{ code: "AU", name: "Australia" }] },
              ].map((row) => (
                <div key={row.label} className="contents">
                  <dt className="text-sm uppercase tracking-[0.22em] font-semibold text-foreground/90 pt-2">
                    {row.label}
                  </dt>
                  <dd className="flex flex-wrap items-center gap-2">
                    {row.places.map((p, i) => (
                      <FlagPill key={i} code={p.code} name={p.name} />
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <SocialRow />
            </div>
          </div>
        </div>
        <div className="relative flex-1 min-h-[60vh] md:min-h-screen overflow-hidden bg-muted">
          <img
            src={portraitAsset.url}
            alt="Portrait of Max DeWinter"
            className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale-[60%]"
          />
          <div className="absolute inset-0 bg-background/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent md:via-background/20" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-24 px-6 md:px-16 border-t border-border/40">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-8">About</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
            For Context.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              Current student at the University of Sydney studying Management and
              International Business, working part-time while pursuing my own
              ventures on the side.
            </p>
            <p>
              Competitive background in soccer (NCAA DII). Outside of that, I
              spend my time weightlifting, cycling, biohacking, and cooking.
              Broad music taste spanning 7,000+ liked tracks on Spotify, and a
              soft spot for classic cinema, from Hitchcock thrillers to Eastwood
              westerns.
            </p>
          </div>
        </div>
      </section>


      {/* Ventures */}
      <section id="ventures" className="py-32 px-6 md:px-16 border-t border-border/40">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-8">Ventures</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-16">Current work.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <VentureCard
              title="The Winter Shop"
              description="Quality without the markup. Curated goods chosen for how well they're made, not how well they're marketed."
              href="https://thewinter.shop"
            />
            <VentureCard
              title="Lean Salt"
              description="Two ingredients. No fillers. A better electrolyte for people who care what goes in their body."
              href="https://thewinter.shop/leansalt"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 md:px-16 border-t border-border/40">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-8">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Say hello.</h2>
          <a
            href="mailto:hello@maxdewinter.com"
            className="inline-block font-serif text-2xl md:text-3xl text-foreground border-b border-border/60 hover:border-foreground transition-colors pb-1"
          >
            hello@maxdewinter.com
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Please email for CV
          </p>
          <div className="mt-12 flex justify-center">
            <SocialRow size={20} />
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 md:px-16 border-t border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Max DeWinter</p>
          <p className="font-serif tracking-wide text-sm">MDW</p>
        </div>
      </footer>
    </main>
  );
}

function VentureCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <div className="group relative bg-card/40 border border-border/60 rounded-lg p-10 transition-all hover:border-border hover:bg-card/70">
      <h3 className="font-serif text-3xl mb-4">{title}</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-8">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground border-b border-border/60 hover:text-primary hover:border-primary transition-colors pb-1"
      >
        Visit Site
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}
