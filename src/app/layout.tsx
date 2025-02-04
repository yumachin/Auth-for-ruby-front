import { Inter } from "next/font/google"
import Link from "next/link"
import { Suspense } from "react"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "認証練習",
  description: "Next.jsとRailsを用いた認証機能の実装",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              認証練習
            </Link>
            <Suspense fallback={<div>ローディング中...</div>}>
              <Link href="Login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </Link>
              <Link href="signUp" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                SignUp
              </Link>
            </Suspense>
          </div>
        </header>
        <main className="container mx-auto mt-8 px-4">{children}</main>
      </body>
    </html>
  )
}