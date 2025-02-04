import Link from 'next/link'

const SignHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          認証練習
        </Link>
      </div>
    </header>
  )
}

export default SignHeader