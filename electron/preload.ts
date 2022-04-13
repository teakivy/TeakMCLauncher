import { contextBridge } from "electron";
import { getDefaultSettings, saveSettings } from "./core/settingsManager";
saveSettings(getDefaultSettings());
import { login } from "./core/accountManager";

declare global {
  interface Window {
    api: any;
  }
}

contextBridge.exposeInMainWorld("api", {
  accounts: {
    login,
  },
});
