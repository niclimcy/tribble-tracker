<!--
SPDX-FileCopyrightText: 2026 The LineageOS Project

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import type { FilterColumn } from '@/api/types'
import { formatColumnLabel, formatFilterValue } from '@/utils/format'
import { X } from '@lucide/vue'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  column: FilterColumn
  name: string
  clearTo: RouteLocationRaw
}>()
</script>

<template>
  <RouterLink
    :to="props.clearTo"
    :aria-label="`Clear ${formatColumnLabel(props.column)} filter: ${formatFilterValue(props.column, props.name)}`"
    class="bg-brand-light text-brand-dark focus-visible:ring-brand-primary dark:bg-brand-dark dark:text-brand-light inline-flex h-8 items-center gap-2 rounded-lg pr-2 pl-4 text-sm leading-5 font-medium transition hover:brightness-95 focus:outline-none focus-visible:ring-2 active:brightness-90 dark:hover:brightness-110 dark:active:brightness-125"
  >
    <span class="text-brand-dark/70 dark:text-brand-light/70 font-normal uppercase">{{
      formatColumnLabel(props.column)
    }}</span>
    <span>{{ formatFilterValue(props.column, props.name) }}</span>
    <X class="size-4.5" :stroke-width="2" aria-hidden="true" />
  </RouterLink>
</template>
