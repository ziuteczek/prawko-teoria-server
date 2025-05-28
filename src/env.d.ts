declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET: string;
    port: number;
    SITE_URL: string;
    APP_URL: string;
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
  keepLogin: boolean;
}
