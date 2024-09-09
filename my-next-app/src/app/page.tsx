/** @format */

'use client';
import Header from '@/components/header';
import { usePageContext } from '@/contexts/pageContext';

export default function Home() {
  const { theme } = usePageContext();
  return (
    <section
      className={`bg-gray-900 bg-gradient-to-b from-black/40 to-black/40 container min-h-[100vh] ${theme}`}>
      <Header />
    </section>
  );
}
