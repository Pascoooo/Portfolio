"use client";

import { useEffect, useState } from "react";
import Section from "../section";
import { Music, Disc3, Radio } from "lucide-react";

import type { NowPlayingData } from "@/lib/spotify";
import Image from "next/image";

export default function NowPlaying() {
    const [data, setData] = useState<NowPlayingData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await fetch("/api/spotify/now-playing");
                const nowPlaying = await response.json();
                setData(nowPlaying);
            } catch (error) {
                console.error("Error fetching now playing:", error);
                setData({ isPlaying: false });
            } finally {
                setLoading(false);
            }
        };

        fetchNowPlaying();
        // Refresh every 10 seconds
        const interval = setInterval(fetchNowPlaying, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section
            title="🎵 Pasco is Listening To 🎵"
            className="w-full"
            contentClassName="flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-2xl">
                {loading ? (
                    <LoadingState />
                ) : data?.isPlaying ? (
                    <PlayingCard data={data} />
                ) : (
                    <NotPlayingCard />
                )}
            </div>
        </Section>
    );
}

function LoadingState() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-muted/20 p-8">
            <div className="flex items-center gap-6">
                <div className="h-24 w-24 animate-pulse rounded-lg bg-muted" />
                <div className="flex-1 space-y-3">
                    <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                </div>
            </div>
        </div>
    );
}

function PlayingCard({ data }: { data: NowPlayingData }) {
    if (!data.isPlaying) return <NotPlayingCard />;

    return (
        <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-emerald-500/10 via-background to-blue-500/10 p-6 transition-all hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

            {/* Animated music bars */}
            <div className="absolute right-4 top-4 flex items-end gap-1">
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="w-1 rounded-full bg-emerald-500"
                        style={{
                            height: "16px",
                            animation: `musicBar 0.8s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative flex items-center gap-6">
                {/* Album Art */}
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg shadow-lg">
                    {data.albumImageUrl ? (
                        <Image
                            src={data.albumImageUrl}
                            alt={data.album || "Album art"}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-blue-500">
                            <Disc3 className="h-12 w-12 text-white" />
                        </div>
                    )}
                    {/* Spinning vinyl effect */}
                    <div className="absolute inset-0 animate-spin-slow rounded-lg border-2 border-white/20" style={{ animationDuration: '3s' }} />
                </div>

                {/* Track Info */}
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                        <Radio className="h-4 w-4 animate-pulse text-emerald-500" />
                        <span className="text-xs font-medium text-emerald-500">
                            Currently Playing
                        </span>
                    </div>
                    <h3 className="line-clamp-1 text-xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                        {data.title}
                    </h3>
                    <p className="line-clamp-1 text-sm text-muted-foreground">
                        {data.artist}
                    </p>
                    {data.album && (
                        <p className="line-clamp-1 text-xs text-muted-foreground/70">
                            {data.album}
                        </p>
                    )}
                </div>
            </div>

            <style jsx>{`
        @keyframes musicBar {
          0%, 100% { height: 8px; }
          50% { height: 20px; }
        }
      `}</style>
        </a>
    );
}

function NotPlayingCard() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background to-muted/20 p-8">
            {/* Subtle animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-muted/5 via-muted/10 to-muted/5 animate-pulse" />

            <div className="relative flex flex-col items-center justify-center gap-4 text-center">
                <div className="rounded-full bg-muted/50 p-4">
                    <Music className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                        Pasco is not playing
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Check back later when I&apos;m vibing to some tunes 🎵
                    </p>
                </div>
            </div>
        </div>
    );
}
