export type UnvalidatedCredentials = Partial<Credentials>;

export interface Credentials {
  email: string;
  password: string;
}