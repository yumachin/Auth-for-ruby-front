import Link from 'next/link'
import React, { Suspense } from 'react'

const Header = () => {
  return (
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
  )
}

export default Header