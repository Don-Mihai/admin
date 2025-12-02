export interface UserI {
  id: string;
  status: string;
  created: string | Date;
  role: string;
  email: string;
  name: string;
}

export type LocalUserI = Omit<UserI, 'id'>;

export interface StateI {
  users: UserI[];
}
