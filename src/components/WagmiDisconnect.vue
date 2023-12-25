<script setup>
import { disconnect } from "@wagmi/core"

async function disconnectAccount() {
  const result = await disconnect()
  console.log("disconnect result:", result)
}
</script>

<template>
  <h1>Disconnect</h1>
  <button @click="disconnectAccount">Disconnect</button>
</template>
