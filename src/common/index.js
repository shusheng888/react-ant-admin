import { getLocalMenu, saveLocalMenu } from "../utils";
import { getMenu } from "@/api";
const RouterBasename = "/react-ant-admin";

function getMenus() {
  return new Promise((res, rej) => {
    let localMenu = getLocalMenu();
    if (localMenu) {
      return res(localMenu);
    }
  });
}

export { getMenus, RouterBasename };
