import { atom, selector } from "recoil";

const nf = new Intl.NumberFormat();

export const TAB_NAME = ["달력", "분류"] as const;

export const openRecordModalState = atom<boolean>({
  key: "open-record-modal-state",
  default: false,
});

export const formAmountNumberState = atom<number | undefined>({
  key: "form-amount-state",
  default: undefined,
});

export const formAmountStringState = selector<string>({
  key: "form-amount-string-state",
  get: ({ get }) => {
    const value = get(formAmountNumberState);
    if (value == undefined) return "";
    return nf.format(value);
  },
});

export const selectedTabIndexState = atom<number>({
  key: "selected-tab-index-state",
  default: 0,
});
