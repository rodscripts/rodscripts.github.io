function Header() {
    return (
        <header className="relative flex justify-between items-center">
            <span className="absolute inset-0 rotate-3 bg-green-600 w-23" />
            <a href="/">
                <h2 className="relative z-10 text-lg font-medium text-white px-1">rodscripts</h2>
            </a>
            <nav className="flex gap-10 items-center text-zinc-900 text-[15px]">
                <a href="/">home</a>
                <a href="https://github.com/rodscripts" target="_blank">works</a>
                <a href="mailto:rodscripts.contact@gmail.com">contact</a>
            </nav>
        </header>
    )
}

export default Header;
