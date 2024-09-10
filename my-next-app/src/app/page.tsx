/** @format */

'use client';
import Firstsection from '@/components/firstsection';
import Header from '@/components/header';
import { SkillsSection } from '@/components/skillssection';
import { usePageContext } from '@/contexts/pageContext';

export default function Home() {
  const { theme } = usePageContext();
  return (
    <main className={`min-h-[100vh] pb-20 ${theme} transition duration-500`}>
      <Header />
      <Firstsection />
      <SkillsSection />
    </main>
  );
}

{
  /**bg-gray-900 bg-gradient-to-b from-black/40 to-black/40 */
}
