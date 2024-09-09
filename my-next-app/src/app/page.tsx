/** @format */

'use client';
import Firstsection from '@/components/firstsection';
import Header from '@/components/header';
import { usePageContext } from '@/contexts/pageContext';

export default function Home() {
  const { theme } = usePageContext();
  return (
    <main className={`min-h-[100vh] ${theme} transition duration-500`}>
      <Header />
      <Firstsection />
    </main>
  );
}

{
  /**bg-gray-900 bg-gradient-to-b from-black/40 to-black/40 */
}
