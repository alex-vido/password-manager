import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [newPassword, setNewPassword] = useState(false);

  const formNewPassword = () => {
    setNewPassword(true);
  };

  const cancelNewPassword = () => {
    setNewPassword(false);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {
        newPassword
          ? <Form cancelNewPassword={ cancelNewPassword } />
          : <button id="newPassword" onClick={ formNewPassword }>
            Cadastrar nova senha
            </button>
      }
    </div>
  );
}

export default App;
