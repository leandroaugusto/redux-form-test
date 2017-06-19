import * as types from './FormTypes';

const initialState = {
  sum: 0,
  formData: null,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case types.SUM:
      return {
        ...state,
        sum: action.value,
      };
    case types.FORM_DATA:
      return {
        ...state,
        formData: action.values,
      };
    default:
      return state;
  }
};
