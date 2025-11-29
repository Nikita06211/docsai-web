"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
              <Label variant="terminal">URL: target_documentation_source</Label>
              <Input
                variant="terminal"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleExecute()}
                className="w-full rounded border border-[#00ffaa]/30 bg-gray-900/50 px-4 py-2 text-white placeholder:text-gray-500 focus:border-[#00ffaa] focus:outline-none"
                placeholder="https://nextjs.org/sitemap.xml"
              />
            </div>

            {/* Execute Button */}
            <Button
              variant="terminal"
              onClick={handleExecute}
              disabled={loading}
            >
              ./execute --start-chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
