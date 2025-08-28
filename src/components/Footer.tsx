const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const TikTokIcon = () => (
    <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="w-full bg-deep-black-bg text-center py-8 px-[5%]">
            <div className="flex flex-col items-center gap-6">
                <a href="#hero" aria-label="Ir al inicio">
                    <img src="https://imagenes.trascenderbot.com/trascendit.png" alt="Logo de Trascendit" className="max-w-[70px] w-auto rounded-full opacity-80 transition-opacity duration-300 hover:opacity-100" />
                </a>
                <div className="flex items-center gap-6">
                    <a href="https://www.instagram.com/trascenditcomunidad" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Trascendit" className="text-off-white-text/70 transition-colors duration-300 hover:text-golden-glow">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.tiktok.com/@trascenditcomunidad" target="_blank" rel="noopener noreferrer" aria-label="TikTok de Trascendit" className="text-off-white-text/70 transition-colors duration-300 hover:text-golden-glow">
                        <TikTokIcon />
                    </a>
                </div>
                <p className="text-sm text-off-white-text/50">© 2025 Trascendit. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
