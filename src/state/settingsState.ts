import { atom } from "recoil";

export const resetDaySettingState = atom<number>({
  key: "reset-day-setting-state",
  default: 25,
});
