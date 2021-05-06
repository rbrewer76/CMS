import {atom} from 'recoil'

export const searchState = atom({
  key: "search",
  default: ""
})


export const editingState = atom({
  key: "editing",
  default: false
})