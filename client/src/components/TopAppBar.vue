<!--
SPDX-FileCopyrightText: 2026 The LineageOS Project

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import navbarLogo from '@/assets/navbar-logo.svg'
import { ExternalLink } from '@lucide/vue'
</script>

<template>
  <header class="border-outline-variant bg-surface sticky top-0 z-20 border-b px-4 sm:px-8">
    <div class="container mx-auto flex h-16 max-w-6xl items-center gap-3">
      <RouterLink
        to="/"
        class="focus-visible:ring-brand-primary flex items-center gap-3 rounded-full px-2 py-1 focus:outline-none focus-visible:ring-2"
        aria-label="LineageOS Statistics — home"
      >
        <img :src="navbarLogo" alt="" class="h-6 w-auto" aria-hidden="true" />
        <span class="text-on-surface text-base font-medium">LineageOS Statistics</span>
      </RouterLink>

      <div class="ml-auto flex items-center gap-1">
        <a
          href="https://lineageos.org"
          target="_blank"
          rel="noopener"
          class="text-on-surface-muted focus-visible:ring-brand-primary hidden items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium uppercase focus:outline-none focus-visible:ring-2 md:inline-flex"
        >
          lineageos.org
          <ExternalLink class="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </header>
</template>
