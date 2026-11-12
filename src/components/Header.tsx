function Header() {
    return (
        <header className="relative flex justify-between items-center">
            <span className="absolute inset-0 rotate-3 bg-green-600 w-23" />
            <h2 className="relative z-10 text-lg font-medium text-white px-1">rodscripts</h2>
            <nav className="flex gap-10 items-center text-zinc-900 text-[15px]">
                <a href="/">home</a>
                <a href="#">works</a>
                <a href="#">contact</a>
            </nav>
        </header>
    )
}

export default Header;
