import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
const portfolioSelectedTheme = atom({
  key: "selectedTheme",
  default: "Interview",
  effects_UNSTABLE: [persistAtom],
});

export default portfolioSelectedTheme;
