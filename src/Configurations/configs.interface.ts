export interface EnvVariables {
  ENV: 'development' | 'stating' | 'production';

  API_KEY: string;

  URL: string;

  REDIS_HOST: string;
  REDIS_PORT: string;

  JWT_SECRET: string;

  POSTGRES_HOST: string;
  POSTGRES_PORT: string;
  POSTGRES_DB: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;

  MAIL_HOST: string;
  MAIL_PORT: string;
  MAIL_AUTH_USER: string;
  MAIL_AUTH_PWD: string;
  MAIL_FROM: string;

  LOG_LEVEL: string; // -1: none, 0: info, 1: debug, 2: verbose
  LOG_TO_FILE: string; // 0: No, 1: Yes
  LOG_SQL: string; // 0: No, 1: Yes

  TRIAL_PERIOD: number;
}
