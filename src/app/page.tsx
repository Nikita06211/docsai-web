import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-mono">
      <div className="flex flex-col items-center gap-12 px-8">
     
      <pre className="min-w-max mx-auto text-green-300 text-xs sm:text-base md:text-3xl lg:text-4xl leading-none whitespace-pre">
          {`
██████╗  ██████╗  ██████╗███████╗     █████╗ ██╗
██╔══██╗██╔═══██╗██╔════╝██╔════╝     ██╔══██╗██║
██║  ██║██║   ██║██║     ███████╗     ███████║██║
██║  ██║██║   ██║██║     ╚════██║     ██╔══██║██║
██████╔╝╚██████╔╝╚██████╗███████║     ██║  ██║██║
╚═════╝  ╚═════╝  ╚═════╝╚══════╝     ╚═╝  ╚═╝╚═╝
          `}
        </pre>

        {/* Terminal Interface */}
        <div className="flex flex-col gap-2 text-left">
          <div className="text-blue-400">
            user@documentation-assistant
          </div>
          <div className="text-[#00ffaa]">
            $ ./chat-with-docs --interactive
          </div>
        </div>

        {/* Access Terminal Button */}
        <Link
          href="/auth"
          className="group relative overflow-hidden rounded border-2 border-[#00ffaa] bg-[#00ffaa] px-8 py-4 font-mono text-sm font-semibold text-black transition-all hover:bg-transparent hover:text-[#00ffaa]"
        >
          <span className="relative z-10">&gt; ACCESS_TERMINAL</span>
          <div className="absolute inset-0 -translate-x-full bg-[#00ffaa] transition-transform duration-300 group-hover:translate-x-0" />
        </Link>
      </div>
    </div>
  );
}