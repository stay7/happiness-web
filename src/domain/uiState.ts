import {atom, selector} from "recoil";

const nf = new Intl.NumberFormat()

export const openRecordModalState = atom<boolean>({
    key: 'open-record-modal-state',
    default: false
})

export const formAmountNumberState = atom<number | undefined>({
    key: 'form-amount-state',
    default: undefined
})

export const formAmountStringState = selector<string>({
    key: "form-amount-string-state",
    get: ({get}) => {
        const value = get(formAmountNumberState)
        if (value == undefined) return ""
        return nf.format(value)
    }
})

