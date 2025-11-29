"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message || "Login failed");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-[#00ffaa]/20 bg-black/50 p-8 backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-bold text-[#00ffaa]">
        &gt; LOGIN
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label variant="terminal">
            Email
          </Label>
          <Input
            variant="terminal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="user@example.com"
          />
        </div>

        <div>
          <Label variant="terminal">
            Password
          </Label>
          <Input
            variant="terminal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>

        {error && (
          <div className="rounded bg-red-500/20 border border-red-500/50 px-4 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        <Button variant="terminal" type="submit" disabled={loading}>
          {loading ? "..." : "&gt; SIGN_IN"}
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-[#00ffaa] hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}