<script setup>
import { testActions } from "viem"
import WagmiConnector from "./components/WagmiConnector.vue"
import WagmiGetAccount from "./components/WagmiGetAccount.vue"
import WagmiSignMessage from "./components/WagmiSignMessage.vue"

import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3ModalEvents,
} from "@web3modal/wagmi/vue"
import { mainnet, arbitrum, polygon, sepolia } from "viem/chains"

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

const chains = [mainnet, arbitrum, polygon, sepolia]
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({ wagmiConfig, projectId, chains })
const events = useWeb3ModalEvents()

console.log(import.meta.env)
console.log("events:", events)
</script>

<template>
  <w3m-button />

  <WagmiGetAccount />

  <WagmiSignMessage />

  <WagmiConnector />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
