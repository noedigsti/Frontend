import React from 'react';
import { useSelector } from 'react-redux';

import { increase, decrease } from '@redux/actions';
import { RootState } from '@redux/reducers';
import { useAppDispatch } from '@redux/store';

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useSelector(
    (state: RootState) => state.rootReducer.counter.count
  );

  return (
    <div className="text-center">
      <div className="text-4xl">
        <h2>Counter</h2>
        <button type="button" onClick={() => dispatch(increase())}>
          +
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(decrease())}>
          -
        </button>
      </div>
    </div>
  );
}
