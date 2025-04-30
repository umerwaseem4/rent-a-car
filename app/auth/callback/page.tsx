"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      // Removed import { createBrowserClient } from "@/lib/supabase";
      // Removed const supabase = createBrowserClient();
      // Removed } = await supabase.auth.getSession();

      if (session) {
        router.push("/");
        router.refresh();
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Verifying your email...</h1>
        <p className="text-gray-600">
          Please wait while we verify your email address.
        </p>
      </div>
    </div>
  );
}
