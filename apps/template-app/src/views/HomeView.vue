<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { getSum } from '@repo/utils'
console.log(getSum(1, 2))
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
