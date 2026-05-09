"use client";

import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [niche, setNiche] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!niche.trim()) {
      setError("Please enter a niche to analyze");
      return;
    }

    console.log("🔎 Starting analysis for niche:", niche);
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ niche }),
      });

      const data = await res.json();
      console.log("📡 API response:", data);

      if (!res.ok) {
        throw new Error(data.error || "Failed to analyze niche");
      }

      setResults(data.products || []);
    } catch (err: any) {
      console.error("❌ Analysis error:", err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
      console.log("✅ Loading state cleared");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        AI Etsy OS
      </h1>
      <p className="text-zinc-400 text-center max-w-xl mb-10">
        Discover trending Etsy digital products with AI.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl mb-10">
        <input
          type="text"
          placeholder="Enter niche..."
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-200 transition-colors"
        >
          {loading ? <LoadingSpinner /> : "Analyze"}
        </button>
      </div>

      {error && (
        <div className="bg-red-900/20 border border-red-900/50 text-red-200 px-4 py-3 rounded-xl mb-6 max-w-xl">
          {error}
        </div>
      )}

      {loading && <LoadingSpinner />}

      {results.length > 0 && (
        <div className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Product Ideas for "{niche}"</h2>
          <div className="flex flex-col gap-3">
            {results.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-zinc-600 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && results.length === 0 && !error && (
        <div className="text-zinc-600 text-center mt-8">
          Enter a niche above to get started
        </div>
      )}
    </main>
  );
}
