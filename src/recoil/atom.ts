import { atom } from "recoil";

const portfolioSelectedTheme = atom({
  key: "selectedTheme",
  default: "Interview",
});

export default portfolioSelectedTheme;
