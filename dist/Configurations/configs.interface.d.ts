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
    LOG_LEVEL: string;
    LOG_TO_FILE: string;
    LOG_SQL: string;
    TRIAL_PERIOD: number;
}
