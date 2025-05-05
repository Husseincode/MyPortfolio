/** @format */
/* eslint-disable @typescript-eslint/no-unused-vars */

//import React from 'react'

import React, { useEffect, useState } from 'react';

type refTypes = React.RefObject<
  | HTMLDivElement
  | HTMLSpanElement
  | HTMLElement
  | HTMLHeadingElement
  | HTMLButtonElement
  | HTMLLabelElement
>;

export const useVisibility = (ref: refTypes, once?: boolean) => {
  const [isSectionShown, setIsSectionShown] = useState<boolean>(false);

  const makeSectionVisible = () => {
    if (!ref.current) return;
    const getTop = ref.current?.getBoundingClientRect().top;
    const height = window.innerHeight;

    setIsSectionShown(getTop < height);
  };

  useEffect(() => {
    window.addEventListener('scroll', makeSectionVisible);
    return () => {
      window.removeEventListener('scroll', makeSectionVisible);
    };
  });

  return isSectionShown;
};
