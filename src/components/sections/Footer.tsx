export const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-wider text-foreground">Wilson Labs</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            contactwilsonlabs@gmail.com
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Wilson Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
