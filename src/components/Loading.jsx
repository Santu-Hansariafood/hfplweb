import React from "react";

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
      <div className="text-center">
        <div className="inline-flex items-center gap-2">
          <div className="w-3 h-3 bg-[#C48D3F] rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-[#C48D3F] rounded-full animate-pulse" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-[#C48D3F] rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
        </div>
        <p className="text-[#4A4A4A] mt-4 text-sm tracking-[0.2em] uppercase">Loading</p>
      </div>
    </div>
  );
}
