<script setup>
import { getAccount } from "@wagmi/core"

let account

async function wagmiGetAccount() {
  console.log("getting account..")
  account = await getAccount()
}
</script>

<template>
  <div>
    <h1>Account</h1>
    <button @click="wagmiGetAccount()">Get Account</button>
    <p>{{ account }}</p>
  </div>
</template>
