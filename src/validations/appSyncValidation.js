export const AppSyncValidate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'É preciso preencher o campo';
  }

  if (!values.email) {
    errors.email = 'É preciso preencher o campo';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.nickname) {
    errors.nickname = 'É preciso preencher o campo';
  }

  return errors;
}
