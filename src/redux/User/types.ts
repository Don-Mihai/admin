export interface UserI {
  id: string;
  status: string;
  created: string;
  role: string;
  email: string;
  name: string;
}

export interface LocalUserI extends Omit<UserI, 'id'> {}

export interface StateI {
  users: UserI[];
}
