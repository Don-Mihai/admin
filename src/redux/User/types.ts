export interface UserI {
  id: string;
  status: string;
  created: string;
  role: string;
  email: string;
  name: string;
  password?: string;
}

export interface LocalUserI extends Omit<UserI, 'id'> {}

export interface StateI {
  users: UserI[];
}

export interface LoginFormValuesI {
  email: string;
  password: string;
  checkbox?: boolean;
}
