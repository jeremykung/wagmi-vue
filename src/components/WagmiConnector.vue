<script setup>
import { connect, fetchEnsName } from "@wagmi/core"
import { InjectedConnector } from "@wagmi/core/connectors/injected"

const { address } = await connect({
  connector: new InjectedConnector(),
})
const ensName = await fetchEnsName({ address })
</script>

<template>
  <div>
    <h1>Connector</h1>
    <p>Hi</p>
    <p>{{ ensName }}</p>
  </div>
</template>
