"use client";

import { useState, useEffect } from "react";

interface StatusLightProps {
  status: "indexing" | "synced";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function StatusLight({ status, size = "md", showLabel = false }: StatusLightProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (status === "indexing") {
      setIsAnimating(true);
    }
  }, [status]);

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const colorClasses = {
    indexing: "bg-minna-pop status-pulse",
    synced: "bg-minna-mint",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div
          className={`${sizeClasses[size]} ${colorClasses[status]} rounded-full transition-colors duration-500`}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-mono text-minna-muted uppercase tracking-wider">
          {status === "indexing" ? "Indexing..." : "Synced"}
        </span>
      )}
    </div>
  );
}
