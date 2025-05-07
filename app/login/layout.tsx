import React from "react";

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto flex min-h-screen items-center">
          {children}
        </main>
      </div>
    )
  }