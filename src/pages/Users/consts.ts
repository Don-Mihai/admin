export const HEADERS = ['Name', 'Email', 'Role', 'Created on', 'Status'];

export enum ROLES {
  ADMINS = 'admins',
  CLIENTS = 'clients'
}

export type RolesType = ROLES.ADMINS | ROLES.CLIENTS;
