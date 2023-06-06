function Form() {
  return (
    <form>
      <label htmlFor="serviceName">Nome do serviço</label>
      <input type="text" id="serviceName" />
      <label htmlFor="login">Login</label>
      <input type="text" id="login" />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />
      <label htmlFor="url">URL</label>
      <input type="text" id="url" />
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
