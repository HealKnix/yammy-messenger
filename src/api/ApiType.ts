import { SignUpUser, User } from '@/models/User';

export type ApiNames = 'users';

export interface ApiType {
  signUp: (form: SignUpUser) => Promise<User | null>;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
  auth: (email: string, password: string) => Promise<User | null>;
  get: <T>(apiName: ApiNames) => Promise<T[]>;
  getById: <T>(apiName: ApiNames, id: number | null) => Promise<T | null>;
  post: <T>(apiName: ApiNames, dataBody: T) => Promise<T>;
  update: <T>(
    apiName: ApiNames,
    id: number | null,
    dataBody: T,
  ) => Promise<T | null>;
  delete: <T>(apiName: ApiNames, id: number | null) => Promise<T | null>;
}
