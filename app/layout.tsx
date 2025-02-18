import "./globals.css"
import localFont from "next/font/local"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"
import { Analytics } from '@vercel/analytics/react';

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
})

export const metadata: Metadata = {
  title: "sQloudAI - Gestión de Bases de Datos con IA",
  description:
    "sQloudAI ofrece soluciones innovadoras para la gestión de bases de datos utilizando inteligencia artificial.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${calSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
