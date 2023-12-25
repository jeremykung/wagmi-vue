<script setup>
import { useWalletStore } from "@/stores/walletStore"
import { getAccount } from "@wagmi/core"

// Setup
const walletStore = useWalletStore()

let account

async function wagmiGetAccount() {
  console.log("getting account..")
  account = await getAccount()
  console.log("account:", account)
  // Update Pinia
  walletStore.setAddress(account.address)
}
</script>

<template>
  <div>
    <h1>Account</h1>
    <button @click="wagmiGetAccount()">Get Account</button>
    <p>{{ account }}</p>
  </div>
</template>
