import { defineStore } from "pinia"

export const useWalletStore = defineStore("counter", {
  state: () => ({
    count: 0,
    address: null,
  }),
  actions: {
    increment() {
      this.count++
    },
    setAddress(address) {
      this.address = address
    },
    getAddress() {
      return this.address
    },
  },
})
