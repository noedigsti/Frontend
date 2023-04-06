import React from 'react';
import { FooterStyled } from './styled';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { useAppDispatch } from '@redux/store';
import { increase } from '@redux/actions';

export const Footer = () => {
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
      <div className="text-center text-white py-2">
        <button
          type="button"
          className="p-2 border-2 border-blue-300"
          onClick={() => dispatch(increase())}
        >
          <span className="text-white text-4xl p-4">Click! x{count}</span>
        </button>
      </div>
    </FooterStyled>
  );
};
