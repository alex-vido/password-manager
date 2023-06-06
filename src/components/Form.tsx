import { useState } from 'react';

type FormProps = {
  cancelNewPassword: () => void
};

function Form({ cancelNewPassword }: FormProps) {
  const [data, setData] = useState({
    serviceName: '',
    login: '',
    password: '',
    passwordValid: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const valid = 'valid-password-check';
  const invalid = 'invalid-password-check';

  const withLettersAndNumbers = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  const withSpecialCharacter = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/img;

  const passwordValidator = () => {
    const passwordWithLetterNumberAndAtLeastOneSpecial = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).*$/;
    if (passwordWithLetterNumberAndAtLeastOneSpecial.test(data.password)
    && data.password.length >= 8
      && data.password.length <= 16
      && data.serviceName.length >= 1
      && data.login.length >= 1
    ) {
      setData((prevData) => ({
        ...prevData,
        passwordValid: true,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        passwordValid: false,
      }));
    }
  };

  return (
    <form>
      <label htmlFor="serviceName">Nome do serviço</label>
      <input
        type="text"
        id="serviceName"
        name="serviceName"
        value={ data.serviceName }
        onChange={ (event) => handleChange(event) }
      />
      <label htmlFor="Login">Login</label>
      <input
        type="text"
        id="Login"
        name="login"
        value={ data.login }
        onChange={ (event) => handleChange(event) }
      />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        value={ data.password }
        onChange={ (event) => {
          handleChange(event);
          passwordValidator();
        } }
      />
      <label htmlFor="URL">URL</label>
      <input type="text" id="URL" />
      <button
        id="Cadastrar"
        onClick={ cancelNewPassword }
        disabled={ !data.passwordValid }
      >
        Cadastrar
      </button>
      <button
        id="Cancelar"
        onClick={ cancelNewPassword }
      >
        Cancelar
      </button>
      <p
        className={ data.password.length >= 8
          ? valid
          : invalid }
      >
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={ data.password.length <= 16
          ? valid
          : invalid }
      >
        Possuir até 16 caracteres
      </p>
      <p
        className={ withLettersAndNumbers.test(data.password)
          ? valid
          : invalid }
      >
        Possuir letras e números

      </p>
      <p
        className={ withSpecialCharacter.test(data.password)
          ? valid
          : invalid }
      >
        Possuir algum caractere especial
      </p>
    </form>
  );
}

export default Form;
