import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      data-test="icon"
      src="/icons/nextjs-icon.svg"
      alt="nextjs"
      width="96"
      height="58"
    />
  );
};
