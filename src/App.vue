<template>
  <h1>{{ web3Modal }}</h1>
  <h2>Pinia</h2>
  <p>{{ walletStore.address }}</p>
  <p>{{ walletStore.count }}</p>
  <button @click="walletStore.increment()">Add</button>
  <WalletConnect />
  <WagmiGetAccount />
  <WagmiSignMessage />
  <WagmiConnector />
</template>

<script setup>
// Pinia
import { useWalletStore } from "@/stores/walletStore"

// Web 3
import WalletConnect from "@/components/WalletConnect.vue"
import { testActions } from "viem"
import WagmiConnector from "./components/WagmiConnector.vue"
import WagmiGetAccount from "./components/WagmiGetAccount.vue"
import WagmiSignMessage from "./components/WagmiSignMessage.vue"
import { watchAccount } from "@wagmi/core"
import {
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3ModalEvents,
} from "@web3modal/wagmi/vue"
import { mainnet, arbitrum, polygon, sepolia } from "viem/chains"

// Dotenv
console.log(import.meta.env)

// Pinia
const walletStore = useWalletStore()

// Web 3
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

const chains = [mainnet, arbitrum, polygon, sepolia]
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

let web3Modal

try {
  async function connectWeb3() {
    web3Modal = await createWeb3Modal({ wagmiConfig, projectId, chains })
    console.log("web3Modal:", web3Modal)
    console.log("connected to web3")
    console.log("getProvider:", web3Modal.getProvider())
  }
  connectWeb3()
} catch (error) {
  console.log("error:", error)
}

const events = useWeb3ModalEvents()
console.log("events:", events)
</script>

<style scoped>
@media (min-width: 1024px) {
}
</style>
