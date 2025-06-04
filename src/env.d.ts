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
declare namespace Express {
  interface Response {
    locals: {
      myVar: number
    }
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
  id: number;
  name: string;
  email: string;
  iat: number;
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
export interface QuestionJSON {
  "Lp.": number
  "Numer pytania": number
  Pytanie: string
  "Poprawna odp": string
  Media?: string
  Kategoria?: string
  Kategorie: string[]
  "Pytanie [ENG]": string
  "Pytanie [DE]": string
  "Pytanie [UA]": string
  MediaID?: string
  "Nazwa media tłumaczenie migowe (PJM) treść pyt"?: string
  "Odpowiedź A"?: string
  "Odpowiedź B"?: string
  "Odpowiedź C"?: string
  "Nazwa media tłumaczenie migowe (PJM) treść odp A"?: string
  "Nazwa media tłumaczenie migowe (PJM) treść odp B"?: string
  "Nazwa media tłumaczenie migowe (PJM) treść odp C"?: string
  "Odpowiedź A [ENG]"?: string
  "Odpowiedź B [ENG]"?: string
  "Odpowiedź C [ENG]"?: string
  "Odpowiedź A [DE]"?: string
  "Odpowiedź B [DE]"?: string
  "Odpowiedź C [DE]"?: string
  "Odpowiedź A [UA]"?: string
  "Odpowiedź B [UA]"?: string
  "Odpowiedź C [UA]"?: string
}
