import { Instagram, Linkedin, Youtube } from "lucide-react";

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

function SocialRow() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-8 md:gap-12">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-2 py-2"
        >
          <span className="inline-flex items-center justify-center h-16 w-16 rounded-full border border-primary/15 text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary group-hover:border-primary/50 group-hover:-translate-y-1 group-hover:shadow-sm">
            <Icon width={28} height={28} />
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium">{label}</span>
        </a>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-4xl text-center flex flex-col items-center">
          <h1 className="font-serif font-semibold leading-[0.95] tracking-tight text-[clamp(3.5rem,12vw,9rem)]">
            Max DeWinter
          </h1>

          <a
            href="mailto:business@maxdewinter.com"
            className="mt-12 inline-block font-serif text-2xl md:text-3xl text-foreground border-b border-primary/20 hover:text-primary hover:border-primary transition-colors duration-300 ease-out pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            business@maxdewinter.com
          </a>

          <div className="mt-16">
            <SocialRow />
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
