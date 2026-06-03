<!--
SPDX-FileCopyrightText: 2026 The LineageOS Project

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
defineProps<{
  message: string | null
}>()
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-150 ease-in"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="message"
      role="status"
      aria-live="polite"
      class="fixed inset-x-0 bottom-6 z-50 mx-auto flex w-fit max-w-[90vw] items-center rounded-lg bg-on-surface px-4 py-3 text-sm text-surface shadow-lg"
    >
      {{ message }}
    </div>
  </Transition>
</template>
