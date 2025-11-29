"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [url, setUrl] = useState("https://nextjs.org/sitemap.xml");
  const [loading, setLoading] = useState(false);

  const handleExecute = () => {
    if (!url.trim()) return;
    setLoading(true);
    // Navigate to chat with sitemap URL as query parameter
    router.push(`/chat?sitemapurl=${encodeURIComponent(url)}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-mono">
      <div className="flex w-full max-w-4xl flex-col gap-12 px-8 py-12">
        {/* DOCS AI Title */}
        <pre className="min-w-max mx-auto text-green-300 text-xs sm:text-base md:text-3xl lg:text-4xl leading-none whitespace-pre">
          {`
██████╗  ██████╗  ██████╗███████╗     █████╗ ██╗
██╔══██╗██╔═══██╗██╔════╝██╔════╝     ██╔══██╗██║
██║  ██║██║   ██║██║     ███████╗     ███████║██║
██║  ██║██║   ██║██║     ╚════██║     ██╔══██║██║
██████╔╝╚██████╔╝╚██████╗███████║     ██║  ██║██║
╚═════╝  ╚═════╝  ╚═════╝╚══════╝     ╚═╝  ╚═╝╚═╝
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

        {/* Initialization Block */}
        <div className="rounded-lg border-2 border-[#00ffaa] bg-black/50 p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            {/* Command */}
            <div className="text-[#00ffaa] font-semibold">
              $ initialize-docs-chat
            </div>

            {/* Loading Message */}
            <div className="text-white">
              Loading documentation parser module...
            </div>

            {/* URL Prompt and Input */}
            <div className="flex flex-col gap-2">
              <label className="text-white">URL: target_documentation_source</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleExecute()}
                className="w-full rounded border border-[#00ffaa]/30 bg-gray-900/50 px-4 py-2 text-white placeholder:text-gray-500 focus:border-[#00ffaa] focus:outline-none"
                placeholder="https://nextjs.org/sitemap.xml"
              />
            </div>

            {/* Execute Button */}
            <button
              onClick={handleExecute}
              disabled={loading}
              className="group relative mt-4 flex items-center gap-2 rounded border-2 border-[#00ffaa] bg-[#00ffaa] px-6 py-3 font-mono text-sm font-semibold text-black transition-all hover:bg-transparent hover:text-[#00ffaa] disabled:opacity-50"
            >
              <span className="relative h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(255,20,147,0.8)]" />
              <span className="relative z-10">./execute --start-chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
