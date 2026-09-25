"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Small delay to ensure smooth transition and make the loader visible briefly
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        <p className="text-lg font-medium text-gray-700">Loading EdGrow Academy...</p>
      </div>
    </div>
  );
}
