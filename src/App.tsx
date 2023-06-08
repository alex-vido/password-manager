import { useState } from 'react';
import Form from './components/Form';
import { PasswordTypeWithId } from './types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [registerPassword, setRegisterPassword] = useState(false);
  const [passwords, setPasswords] = useState<Array<PasswordTypeWithId>>([]);
  const [hidePassword, setHidePassword] = useState(false);

  const formNewPassword = () => {
    setRegisterPassword(true);
  };

  const cancelNewPassword = () => {
    setRegisterPassword(false);
  };

  const handleNewPassword = (newPassword: PasswordTypeWithId) => {
    setPasswords((prevPasswords) => [...prevPasswords, newPassword]);
    setRegisterPassword(false);
  };

  const handleDelete = (id: number) => {
    const passwordsWithoutDeleted = passwords.filter((password) => password.id !== id);
    setPasswords(passwordsWithoutDeleted);
  };

  const handleHidePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setHidePassword(event.target.checked);
    } else {
      setHidePassword(false);
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-items-center"
      style={ { maxHeight: '100vh', maxWidth: '100vw' } }
    >
      <h1
        className="display-4 p-4"
      >
        Gerenciador de senhas
      </h1>
      {
        registerPassword
          ? <Form
              cancelNewPassword={ cancelNewPassword }
              handleNewPassword={ handleNewPassword }
          />
          : (
            <button
              className="btn btn-success btn-lg mb-5"
              id="registerPassword"
              onClick={ formNewPassword }
            >
              Cadastrar nova senha
            </button>
          )
      }
      {
        passwords.length === 0 ? (
          <h2 className="display-6 p-5">Nenhuma senha cadastrada</h2>
        ) : (
          <div>
            <ul
              className="list-group container fs-4 d-flex flex-row justify-content-center"
            >
              {
              passwords.map((password) => (
                <li
                  className="list-group-item p-4 m-4"
                  style={ { maxWidth: '300px',
                    border: '1px solid rgba(50, 53, 68, 1)',
                    backgroundColor: 'rgba(50, 53, 68, 1)',
                    width: '270px',
                    borderRadius: '10px',
                  } }
                  key={ password.id }
                >
                  <p>
                    <a
                      className="link-success fs-2 fw-bolder text-decoration-none"
                      rel="noreferrer noopener"
                      href={ password.URL }
                      target="_blank"
                    >
                      { password.serviceName }
                    </a>
                  </p>
                  <span>Login</span>
                  <p>
                    <span>{ password.login }</span>
                  </p>
                  <span>Senha </span>
                  <p>
                    { hidePassword
                      ? '******'
                      : password.password}
                  </p>
                  <button
                    className="btn btn-danger"
                    data-testid="remove-btn"
                    onClick={ () => handleDelete(password.id) }
                  >
                    X
                  </button>
                </li>
              ))
            }
            </ul>
            <label
              className="form-check-label fs-4 text-success hidePasswordLabel"
              htmlFor="hidePassword"
            >
              Esconder senhas

            </label>
            <input
              className="hidePassword"
              type="checkbox"
              checked={ hidePassword }
              onChange={ (event) => handleHidePassword(event) }
              name="hidePassword"
              id="hidePassword"
            />
          </div>
        )
      }
    </div>
  );
}

export default App;
