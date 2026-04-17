const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {year} Ken Badertscher
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:ken@kenb.dev"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/kenbadertscher"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kenbadertscher/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
