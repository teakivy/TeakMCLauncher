export interface ConfigSettings {
  accounts: ConfigAccount[];
  activeAccount: string | null;
  defaultAccount: string | null;
  installations: ConfigInstallation[];
  activeInstallation: string | null;
  config: ConfigOptions;
}

export interface ConfigAccount {
  username: string;
  uuid: string;
  lastUsed: number;
  accountImageLocation: string | null;
}

export interface ConfigInstallation {
  uuid: string;
  name: string;
  imageType: "default" | "custom";
  imageName?: "original" | "optifine";
  imageLocation?: string;
  root: string;
  version: ConfigVersionInfo;
  ram: ConfigRamInfo;
  javaPath: string;
  lastUsed: number;
}

export interface ConfigVersionInfo {
  number: string;
  type: "release" | "snapshot";
}

export interface ConfigRamInfo {
  min: string;
  max: string;
}

export interface ConfigOptions {
  resetToDefaultAccount: boolean;
  keepLauncherOpen: boolean;
  shiftPromptSignIn: boolean;
  openLogOnStart: boolean;
}

export interface MSMCUser {
  access_token: string;
  client_token?: string;
  uuid: string;
  name?: string;
  meta?: {
    type: "mojang" | "xbox";
    xuid?: string;
    demo?: boolean;
  };
  user_properties?: Partial<any>;
}

export interface Account {
  username: string;
  uuid: string;
  lastUsed: number;
  accountImageLocation: string | null;
  msmcUser: MSMCUser;
}
