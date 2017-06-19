import * as types from './FormTypes';

export const formData = values => ({
  type: types.FORM_DATA,
  values,
});

export const sum = value => ({
  type: types.SUM,
  value,
});
