import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";


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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/max-dewinter", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/maxdewinter/", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@maxxdewinter", Icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@maxdewinter03", Icon: Youtube },
  { label: "Spotify", href: "https://open.spotify.com/user/1vli30c9e95hzkqp631fhbzam", Icon: SpotifyIcon },
];

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31Z" />
    </svg>
  );
}

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}


const FLAGS: Record<string, string> = {
  Thailand: "🇹🇭",
  England: "🇬🇧",
  "New Zealand": "🇳🇿",
  USA: "🇺🇸",
  Australia: "🇦🇺",
};

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

function Index() {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#hero" className="font-serif text-xl tracking-wide text-foreground">MDW</a>
          <div className="flex items-center gap-2 sm:gap-3 text-[15px] font-medium text-foreground/80" style={{ fontFamily: '"Inter", sans-serif' }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md hover:text-foreground hover:bg-foreground/5 transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="w-full max-w-4xl text-center flex flex-col items-center">
          <h1 className="font-serif font-semibold leading-[0.95] tracking-tight text-[clamp(3.5rem,12vw,9rem)]">
            Max DeWinter
          </h1>

          <div className="mt-14 w-full max-w-2xl">
            <dl className="grid grid-cols-[auto_1fr] gap-x-8 md:gap-x-12 gap-y-5 text-base md:text-lg text-left">
              {[
                { label: "Born", places: ["Thailand", "England"] },
                { label: "Raised", places: ["New Zealand"] },
                { label: "Studied", places: ["USA", "Australia"] },
                { label: "Based", places: ["Australia"] },
              ].map((row) => (
                <div key={row.label} className="contents">
                  <dt className="text-xs md:text-sm uppercase tracking-[0.28em] font-semibold text-foreground/90 pt-1.5">
                    {row.label}
                  </dt>
                  <dd className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[1.35rem] md:text-[1.5rem] leading-none">
                    {row.places.map((name, i) => (
                      <span key={i} aria-label={name} title={name}>
                        {FLAGS[name]}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12">
            <SocialRow />
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="py-20 md:py-24 px-6 md:px-16 border-t border-primary/10">
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
              Competitive background in soccer (NCAA DII). Nowadays, I spend my
              time weightlifting, cycling, biohacking, and cooking. Broad music
              taste spanning 7,000+ liked tracks on Spotify, and a soft spot for
              classic cinema, from Hitchcock thrillers to Eastwood westerns.
            </p>
          </div>
        </div>
      </section>


      {/* Ventures */}
      <section id="ventures" className="py-32 px-6 md:px-16 border-t border-primary/10">
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
      <section id="contact" className="py-32 px-6 md:px-16 border-t border-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-8">Contact</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Say hello.</h2>
          <a
            href="mailto:hello@maxdewinter.com"
            className="inline-block font-serif text-2xl md:text-3xl text-foreground border-b border-primary/20 hover:border-primary transition-colors duration-300 ease-out pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
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

      <footer className="py-10 px-6 md:px-16 border-t border-primary/10">
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
    <div className="group relative bg-card/40 border border-primary/15 rounded-lg p-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/30 hover:bg-card/70">
      <h3 className="font-serif text-3xl mb-4">{title}</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-8">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground border-b border-primary/20 hover:text-primary hover:border-primary transition-colors duration-300 ease-out pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
      >
        Visit Site
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}
