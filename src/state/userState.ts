import { atom } from "recoil";
import { User } from "../domain/user";

export const userState = atom<User | undefined>({
  key: "user-state",
  default: undefined,
});
