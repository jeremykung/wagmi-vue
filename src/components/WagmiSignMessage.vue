<script setup>
import { signMessage } from "@wagmi/core"

let signature

async function sign() {
  signature = await signMessage({
    message: "Sign here pls.",
  })
  console.log("signature hash:", signature)
}
</script>

<template>
  <h1>Signature</h1>
  <button @click="sign()">Sign</button>
</template>
