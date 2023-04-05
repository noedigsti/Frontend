import React from 'react';
import Image from 'next/image';
import { FooterStyled } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useAppDispatch } from '@redux/store';
import { increase } from '@redux/actions';

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useSelector(
    (state: RootState) => state.rootReducer.counter.count
  );
  return (
    <FooterStyled
      position="fixed"
      right={0}
      bottom={0}
      left={0}
      py={3}
      bg="#1f2937"
    >
      <p className="text-center text-white py-2">Hello x{count}</p>
      <div className="text-center text-white py-2">
        <button
          type="button"
          className="p-2 border-2 border-blue-300"
          onClick={() => dispatch(increase())}
        >
          Click Me !
        </button>
      </div>
      <ul className="flex justify-center list-none p-0 m-0">
        <li className="mx-3">
          <a href="https://youtube.com" target="_blank" className="block">
            <Image
              data-test="icon"
              src="/icons/github-icon.svg"
              alt="github"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li className="mx-3">
          <a href="https://twitter.com" target="_blank" className="block">
            <Image
              data-test="icon"
              src="/icons/twitter-icon.svg"
              alt="nextjs"
              width="28"
              height="28"
            />
          </a>
        </li>
        <li className="mx-3">
          <a href="https://youtube.com" target="_blank" className="block">
            <Image
              data-test="icon"
              src="/icons/youtube-icon.svg"
              alt="youtube"
              width="28"
              height="29"
            />
          </a>
        </li>
        <li className="mx-3">
          <a href="https://linkedin.com" target="_blank" className="block">
            <Image
              data-test="icon"
              src="/icons/linkedin-icon.svg"
              alt="linkedin"
              width="28"
              height="32"
            />
          </a>
        </li>
      </ul>
    </FooterStyled>
  );
};
