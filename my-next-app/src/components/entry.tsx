/** @format */

'use client';
import React, { useEffect, useState } from 'react';
import Firstsection from '@/components/firstsection';
import { Footer } from '@/components/footer';
import Header from '@/components/header';
import { SkillsSection } from '@/components/skillssection';
import LoadingScreen from '@/components/loading';

const Entry = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearInterval(intervalID);
  }, []);

  if (isLoading) return <LoadingScreen timeElapsed={!isLoading} />;

  return (
    <main className={`min-h-[100vh] transition duration-500`}>
      <Header />
      <Firstsection />
      <SkillsSection />
      <Footer />
    </main>
  );
};

export default Entry;
