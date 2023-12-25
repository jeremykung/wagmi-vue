import "./assets/main.css"
// Vue
import { createApp } from "vue"
import App from "./App.vue"

// Pinia
import { createPinia } from "pinia"

// Web 3
import { createPublicClient, http } from "viem"
import { createConfig, configureChains, mainnet, sepolia } from "@wagmi/core"
import { arbitrum, polygon } from "@wagmi/core/chains"
import { publicProvider } from "@wagmi/core/providers/public"
import { alchemyProvider } from "@wagmi/core/providers/alchemy"

// Pinia
const pinia = createPinia()

// Web 3
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
app.use(pinia)
app.mount("#app")
