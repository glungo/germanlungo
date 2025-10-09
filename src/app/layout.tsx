import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "German Lungo · Portfolio",
  description: "Portfolio and CV of German Lungo, senior game developer.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">
        <main className="min-h-screen py-10">{children}</main>
      </body>
    </html>
  )
}
