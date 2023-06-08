import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { PasswordTypeWithId } from './types';

function App() {
  const [registerPassword, setRegisterPassword] = useState(false);
  const [passwords, setPasswords] = useState<Array<PasswordTypeWithId>>([]);

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
          <ul>
            {
              passwords.map((password) => (
                <li key={ password.id }>
                  <a href={ password.URL }>{ password.serviceName }</a>
                  <p>
                    <span>Login </span>
                    <span>{ password.login }</span>
                  </p>
                  <p>
                    <span>Senha </span>
                    <span>{ password.password }</span>
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
        )
      }
    </div>
  );
}

export default App;
