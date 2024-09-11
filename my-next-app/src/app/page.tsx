/** @format */

'use client';
import Firstsection from '@/components/firstsection';
import { Footer } from '@/components/footer';
import Header from '@/components/header';
import { SkillsSection } from '@/components/skillssection';
import { usePageContext } from '@/contexts/pageContext';
import Cookies from 'js-cookie';

export default function Home() {
  const { setTheme } = usePageContext();
  return (
    <main
      onMouseOver={() => {
        const selectedTheme = Cookies.get('theme');
        setTheme(selectedTheme);
      }}
      className={`min-h-[100vh] transition duration-500`}>
      <Header />
      <Firstsection />
      <SkillsSection />
      <Footer />
    </main>
  );
}

{
  /**bg-gray-900 bg-gradient-to-b from-black/40 to-black/40 */
}
