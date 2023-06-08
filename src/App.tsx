import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { PasswordTypeWithId } from './types';

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
    <div>
      <h1>Gerenciador de senhas</h1>
      {
        registerPassword
          ? <Form
              cancelNewPassword={ cancelNewPassword }
              handleNewPassword={ handleNewPassword }
          />
          : (
            <button id="registerPassword" onClick={ formNewPassword }>
              Cadastrar nova senha
            </button>
          )
      }
      {
        passwords.length === 0 ? (
          <h2>Nenhuma senha cadastrada</h2>
        ) : (
          <div>
            <ul>
              {
              passwords.map((password) => (
                <li key={ password.id }>
                  <a href={ password.URL }>{ password.serviceName }</a>
                  <p>
                    <span>Login </span>
                    <span>{ password.login }</span>
                  </p>
                  <span>Senha </span>

                  <p>
                    { hidePassword
                      ? '******'
                      : password.password}

                  </p>

                  <button
                    data-testid="remove-btn"
                    onClick={ () => handleDelete(password.id) }
                  >
                    X
                  </button>
                </li>
              ))
            }
            </ul>
            <label htmlFor="hidePassword">Esconder senhas</label>
            <input
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
