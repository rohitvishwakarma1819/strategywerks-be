export interface User extends BaseUser {
  id: string;
  children: BaseUser;
}

export interface BaseUser {
  firstName: string;
  lastName: string;
  email: string;
}
