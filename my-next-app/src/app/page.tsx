/** @format */

'use client';
import Header from '@/components/header';
import { usePageContext } from '@/contexts/pageContext';

export default function Home() {
  const { theme } = usePageContext();
  return (
    <section className={` min-h-[100vh] ${theme} transition duration-500`}>
      <Header />
      {/* <p className=''></p> */}
    </section>
  );
}

{
  /**bg-gray-900 bg-gradient-to-b from-black/40 to-black/40 */
}
