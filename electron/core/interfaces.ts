export interface ConfigSettings {
	accounts: ConfigAccount[];
	activeAccount: string | null;
	defaultAccount: string | null;
	installations: ConfigInstallation[];
	activeInstallation: string | null;
	config: ConfigOptions;
}

export interface ConfigAccount {
	lastUsed: number;
	username: string;
	uuid: string;
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
