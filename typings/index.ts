declare global {
  type AppEnv = {
    APP_MODE: string;
    APP_VERSION: string;
  };

  interface Window {
    appEnv: AppEnv;
  }
}

export {};
