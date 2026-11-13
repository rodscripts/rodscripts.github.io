import {FaGithub} from "react-icons/fa"

function Hero() {
    return (
        <main className="my-20">
            <div className="flex items-center gap-3 text-zinc-600 mb-5">
                <span className="h-2 w-2 rounded-full bg-green-600 text-sm"></span>
                <p className="text-sm">Software Developer / Brazil</p>
            </div>
            <div>
                <h1 className="relative font-bold tracking-tight text-8xl">
                    <span className="relative z-10 ax-w-md leading-15">
                        A world of ideas written in code.
                    </span>
                    <span className="absolute top-0 right-0">
                        <img className="rounded-2xl opacity-20 w-90 h-75" src="/assets/image.jpeg"/>
                    </span>
                </h1>
                <p className="mt-5 text-[15px] leading-relaxed max-w-md text-zinc-600">
                    Self-taught programmer since 2018, passionate about exploring ideas, solving problems and building things.
                </p>
            </div>
            <div className="flex gap-5 mt-5">
                <a href="https://github.com/rodscripts" className="text-neutral-500 hover:text-green-600 transition-colors opacity-70" target="_blank">
                    <FaGithub className="text-[23px]"/>
                </a>
            </div>
            <div className="mt-5 flex gap-5">
                <a href="https://github.com/rodscripts" target="_blank" className="font-bold border-b border-zinc-900 text-zinc-950 text-sm">Explore projects <span className="inline-block animate-bounce">↓</span></a>
            </div>
        </main>
    )
}

export default Hero;
