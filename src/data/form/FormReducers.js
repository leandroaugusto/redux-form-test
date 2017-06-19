import * as types from './FormTypes';

const initialState = {
  value: 0,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case types.SUM:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};
