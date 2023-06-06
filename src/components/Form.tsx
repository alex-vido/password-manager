type FormProps = {
  cancelNewPassword: () => void
};

function Form({ cancelNewPassword }: FormProps) {
  return (
    <form>
      <label htmlFor="serviceName">Nome do serviço</label>
      <input type="text" id="serviceName" />
      <label htmlFor="Login">Login</label>
      <input type="text" id="Login" />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />
      <label htmlFor="URL">URL</label>
      <input type="text" id="URL" />
      <button id="Cadastrar" onClick={ cancelNewPassword }>Cadastrar:</button>
      <button id="Cancelar" onClick={ cancelNewPassword }>Cancelar:</button>
    </form>
  );
}

export default Form;
