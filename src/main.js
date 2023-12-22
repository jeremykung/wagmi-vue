import "./assets/main.css"

import { createApp } from "vue"
import { createPublicClient, http } from "viem"
import App from "./App.vue"

import { createConfig, configureChains, mainnet, sepolia } from "@wagmi/core"
import { arbitrum, polygon } from "@wagmi/core/chains"
import { publicProvider } from "@wagmi/core/providers/public"
import { alchemyProvider } from "@wagmi/core/providers/alchemy"

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, arbitrum, polygon, sepolia],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }),
    publicProvider(),
  ]
)

const config = createConfig({
  autoConnect: false,
  publicClient,
  webSocketPublicClient,
})

const app = createApp(App)
// app.use(UseWagmiPlugin, config)
app.mount("#app")
