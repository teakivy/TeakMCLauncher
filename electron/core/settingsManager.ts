// import path from "path";
import * as fs from "fs";
import * as path from "path";

import * as appConfig from "../appConfig.json";

import { ConfigSettings } from "./interfaces";

/**
 * Get the default config settings.
 * @returns {ConfigSettings} Gets the default config settings.
 */
export function getDefaultSettings(): ConfigSettings {
	return {
		accounts: [],
		activeAccount: null,
		defaultAccount: null,
		installations: [],
		activeInstallation: null,
		config: {
			resetToDefaultAccount: true,
			keepLauncherOpen: true,
			shiftPromptSignIn: true,
			openLogOnStart: false,
		},
	};
}

/**
 * Get the path to the user's app data directory.
 * @returns {string} The path to the user's app data directory.
 */
export function getAppDataPath(): string {
	return (
		process.env.APPDATA ||
		(process.platform == "darwin"
			? process.env.HOME + "/Library/Preferences"
			: process.env.HOME + "/.local/share")
	);
}

/**
 * Get the path to the application's appdata folder.
 * @returns {string} The path to the application's appdata folder.
 */
export function getAppPath(): string {
	return getAppDataPath() + `/${appConfig.appdataPath}`;
}

/**
 * Get the path to the settings file.
 * @returns {string} The path to the settings file.
 */
export function getSettingsPath(): string {
	return path.join(getAppPath(), "settings2.json");
}

/**
 * Save settings to file.
 * @param settings Settings to save
 */
export function saveSettings(settings: ConfigSettings): void {
	const settingsPath = getSettingsPath();
	const data = JSON.stringify(settings, null, 2);
	fs.writeFileSync(settingsPath, data);
}

/**
 * Get the settings from file.
 * @returns {ConfigSettings} The settings from the settings file.
 */
export function getSettings(): ConfigSettings {
	const settingsPath = getSettingsPath();
	if (!fs.existsSync(settingsPath)) {
		saveSettings(getDefaultSettings());
	}

	const data = fs.readFileSync(settingsPath, "utf8");
	let settings: ConfigSettings = JSON.parse(data);
	settings = {
		...getDefaultSettings(),
		...settings,
	};
	return settings;
}
