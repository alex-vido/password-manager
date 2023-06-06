import { useState } from 'react';

type FormProps = {
  cancelNewPassword: () => void
};

function Form({ cancelNewPassword }: FormProps) {
  const [passwordValid, setPasswordValid] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServiceName(event.target.value);
  };

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordValidator = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordWithLetterNumberAndAtLeastOneSpecial = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,16}$/;
    if (passwordWithLetterNumberAndAtLeastOneSpecial.test(event.target.value)
      && serviceName.length >= 1
      && login.length >= 1
    ) {
      setPasswordValid(true);
    }
  };

  return (
    <form>
      <label htmlFor="serviceName">Nome do serviço</label>
      <input
        type="text"
        id="serviceName"
        value={ serviceName }
        onChange={ (event) => handleName(event) }
      />
      <label htmlFor="Login">Login</label>
      <input
        type="text"
        id="Login"
        value={ login }
        onChange={ (event) => handleLogin(event) }
      />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        minLength={ 8 }
        maxLength={ 16 }
        onChange={ (event) => passwordValidator(event) }
      />
      <label htmlFor="URL">URL</label>
      <input type="text" id="URL" />
      <button
        id="Cadastrar"
        onClick={ cancelNewPassword }
        disabled={ !passwordValid }
      >
        Cadastrar
      </button>
      <button
        id="Cancelar"
        onClick={ cancelNewPassword }
      >
        Cancelar
      </button>
    </form>
  );
}

export default Form;
