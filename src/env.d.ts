declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    port: number;
    SITE_URL: string;
    APP_URL: string;
    SERVER_URL: string;
    EMAIL_PASSWORD: string;
    MODE: "dev" | "prod" | "test";
  }
}
interface userRegisterData {
  name: string;
  email: string;
  password: string;
}
interface userLoginData {
  email: string;
  password: string;
  keepLogin: "on" | undefined;
}
interface userTokenData {
  email: string;
  id: number;
}
interface userDataDB {
  id: number;
  email: string;
  name: string;
  password: string;
  created: string;
  verification: boolean;
}
interface testEmailData {
  [key: string]: string;
}
