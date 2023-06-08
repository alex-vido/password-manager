export type PasswordType = {
  serviceName: string;
  login: string;
  password: string;
  passwordValid: boolean;
  URL?: string;
};

export type PasswordTypeWithId = PasswordType & { id: number };
