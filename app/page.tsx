"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import Link from "next/link";

export default function Home() {
  const user = {
    fullName: "Bryan"
  }
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-xl text-bold">Landing Page</h1>
          <h2>Welcome back {user?.fullName}</h2>
          <Button>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
      </div>
    </div>
  );
}
