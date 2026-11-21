import { Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/maxdewinter/", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@maxxdewinter", Icon: TikTokIcon },
  { label: "Spotify", href: "https://open.spotify.com/user/1vli30c9e95hzkqp631fhbzam", Icon: SpotifyIcon },
  { label: "SoundCloud", href: "https://soundcloud.com/maxdewinter", Icon: SoundCloudIcon },
  { label: "YouTube", href: "https://www.youtube.com/@maxdewinter03", Icon: Youtube },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/max-dewinter", Icon: Linkedin },
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

function SoundCloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z" />
    </svg>
  );
}

function SocialRow() {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-4 sm:gap-x-12 gap-y-8">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-1 py-2"
        >
          <span className="inline-flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-primary/15 text-muted-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary group-hover:border-primary/50 group-hover:-translate-y-1 group-hover:shadow-sm">
            <Icon width={24} height={24} className="sm:hidden" />
            <Icon width={28} height={28} className="hidden sm:block" />
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium">{label}</span>
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
            href="mailto:hello@maxdewinter.com"
            className="mt-12 inline-block font-serif text-2xl md:text-3xl text-foreground border-b border-primary/20 hover:text-primary hover:border-primary transition-colors duration-300 ease-out pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            hello@maxdewinter.com
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
