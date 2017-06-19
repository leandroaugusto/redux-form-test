const fakePromise = (email, nickname) => {
  return new Promise((resolve, reject) => {
    const hasEmail = ['leandro@fillet.com.br', 'leandro@gmail.com'].includes(email);
    const hasNickname = ['jesse_02', 'jesse_03'].includes(nickname);

    setTimeout(() => {
      if ( hasEmail || hasNickname ) {
        reject({email: hasEmail, nickname: hasNickname});
      } else {
        resolve();
      }
    }, 1000);
  });
};

export const AppAsyncValidation = values => {
  return fakePromise(values.email, values.nickname)
    .catch((message) => {
      const errors = {};

      console.log('CATCH', values, message);

      if (message.email) errors.email = 'Email já existe';
      if (message.nickname) errors.nickname = 'Apelido já existe';

      // eslint-disable-next-line
      throw errors;
    });
}
