import { useState } from 'react';
import { PasswordType, PasswordTypeWithId } from '../types';

type FormProps = {
  cancelNewPassword: () => void;
  handleNewPassword: (newPassword: PasswordTypeWithId) => void;
};

const INITIAL_STATE: PasswordType = {
  serviceName: '',
  login: '',
  password: '',
  passwordValid: false,
  URL: '',
};

function Form({ cancelNewPassword, handleNewPassword }: FormProps) {
  const [data, setData] = useState(INITIAL_STATE);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newPasssword = { ...data, id: Date.now() };
    handleNewPassword(newPasssword);
  };

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
    <form
      onSubmit={ handleSubmit }
      className="border"
      style={ { width: '90%' } }
    >
      <div className="row d-flex flex-row justify-content-around align-items-center p-5">
        <div className="col-md-6 " style={ { maxWidth: '30%', maxHeight: '20%' } }>
          <label
            className="col-form-label d-flex"
            htmlFor="serviceName"
          >
            Nome do serviço
          </label>
          <input
            className="form-control"
            type="text"
            id="serviceName"
            name="serviceName"
            value={ data.serviceName }
            onChange={ (event) => handleChange(event) }
          />
          <label
            className="col-form-label d-flex"
            htmlFor="Login"
          >
            Login

          </label>
          <input
            className="form-control"
            type="text"
            id="Login"
            name="login"
            value={ data.login }
            onChange={ (event) => handleChange(event) }
          />
          <label
            className="col-form-label d-flex"
            htmlFor="password"
          >
            Senha

          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={ data.password }
            onChange={ (event) => {
              handleChange(event);
              passwordValidator();
            } }
          />
          <label
            className="col-form-label d-flex"
            htmlFor="URL"
          >
            URL

          </label>
          <input
            className="form-control"
            type="text"
            id="URL"
            name="URL"
            value={ data.URL }
            onChange={ (event) => {
              handleChange(event);
            } }
          />
          <div
            className="pt-5 pr-1"
          >
            <button
              className={ !data.passwordValid
                ? 'btn btn-danger btn-lg me-md-3'
                : 'btn btn-success btn-lg me-md-3' }
              id="Cadastrar"
              disabled={ !data.passwordValid }
            >
              Cadastrar
            </button>
            <button
              className="btn btn-secondary  btn-lg"
              id="Cancelar"
              onClick={ cancelNewPassword }
            >
              Cancelar
            </button>
          </div>
        </div>
        <div
          className="col-md-6 d-flex flex-column fs-5"
          style={ { backgroundColor: 'rgba(50, 53, 68, 1)',
            maxWidth: '28%',
            padding: '5rem 0',
            borderRadius: '20px',
          } }
        >
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
        </div>
      </div>
    </form>
  );
}

export default Form;
