<script setup>
import { onMounted } from "vue"
import { connect, fetchEnsName } from "@wagmi/core"
import { mainnet, sepolia, polygon } from "@wagmi/core/chains"
import { InjectedConnector } from "@wagmi/core/connectors/injected"
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask"

onMounted(async () => {
  const connector = new InjectedConnector({
    chains: [mainnet, sepolia, polygon],
    options: {
      name: "My Injected Wallet",
      getProvider: () =>
        typeof window !== "undefined" ? window.myInjectedWallet : undefined,
    },
  })
  console.log("connector:", connector)

  const { account } = await connect({
    connector: new InjectedConnector({
      chains: [mainnet, sepolia, polygon],
      options: {
        shimDisconnnect: true,
      },
    }),
  })
  console.log("account", account)
})
</script>

<template>
  <div>
    <h1>Connector</h1>
    <button @click="connectToChain()">Connect</button>
  </div>
</template>
