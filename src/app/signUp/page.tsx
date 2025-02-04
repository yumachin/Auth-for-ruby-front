"use client";

import { useState } from 'react';
import { signUp } from '../../utils/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      return;
    }

    try {
      await signUp(email, password, passwordConfirmation);
      console.log("サインアップが完了しました。");
      router.push("/");
    } catch (error) {
      console.error("サインアップ時のエラーは => ", error)
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">SignUp</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="passwordConfirmation" className="block mb-1">
            Password(確認用)
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          SignUp
        </button>
      </form>
      <Link href={"/Login"} className="text-blue-500 font-semibold hover:text-blue-700 hover:underline transition-all duration-300">
        既にアカウントをお持ちの方はこちら
      </Link>
    </div>
  );
};

export default SignUp;
