import { Account, ConfigAccount } from "./interfaces";
import * as settings from "./settingsManager";
import { getPassword, setPassword, deletePassword } from "keytar";
import * as minecraftPlayer from "minecraft-player";
import msmc, { mclcUser, fastLaunch } from "./modules/msmc/index.js";

let keytarService = "teakmc-launcher";

export function getAccounts() {}

export function getAccountByUUID(uuid: string) {
  let config = settings.getSettings();

  let accounts = config.accounts;
  for (let i = 0; i < accounts.length; i++) {
    let acc = accounts[i];
    if (acc.uuid === uuid) {
      return acc;
    }
  }

  return null;
}

export function setAccount(account: Account) {
  let config = settings.getSettings();
  let cAccount: ConfigAccount = {
    username: account.username,
    uuid: account.uuid,
    lastUsed: account.lastUsed,
    accountImageLocation: account.accountImageLocation,
  };

  setPassword(keytarService, account.uuid, JSON.stringify(account.msmcUser));
  config.accounts.push(cAccount);

  settings.saveSettings(config);
}

export async function getMinecraftAccount(player: string) {
  return await minecraftPlayer(player);
}

export function login() {
  fastLaunch("electron", (update) => {
    //A hook for catching loading bar events and errors, standard with MSMC
    console.log("CallBack!!!!!");
    console.log(update);
  })
    .then((result) => {
      //If the login works
      if (msmc.errorCheck(result)) {
        console.log("We failed to log someone in because : " + result.reason);
        return;
      }
      console.log("Player profile and mojang token : " + result);
    })
    .catch((reason) => {
      //If the login fails
      console.log("We failed to log someone in because : " + reason);
    });
}
