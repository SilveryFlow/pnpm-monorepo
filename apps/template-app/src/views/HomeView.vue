<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { getSum, getNow } from '@repo/utils'
console.log(getSum(1, 2))
console.log(getNow())
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
