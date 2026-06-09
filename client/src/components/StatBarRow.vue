<!--
SPDX-FileCopyrightText: 2026 The LineageOS Project

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import type { FilterColumn } from '@/api/types'
import { routeForFilterSelection } from '@/utils/filters'
import { formatFilterValue, formatNumber } from '@/utils/format'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  rank: number
  column: FilterColumn
  name: string
  count: number
  max: number
}>()

const percent = computed(() => Math.max(0.5, (props.count / props.max) * 100))

const route = useRoute()
const target = computed(() =>
  routeForFilterSelection(route, { column: props.column, name: props.name })
)
</script>

<template>
  <RouterLink
    :to="target"
    class="group hover:bg-surface-hover focus-visible:ring-brand-primary relative flex items-center gap-3 overflow-hidden rounded-xl px-3 py-2.5 transition-colors focus:outline-none focus-visible:ring-2"
  >
    <span
      class="bg-bar-track group-hover:bg-bar-track/80 absolute inset-y-1 left-1 rounded-lg transition-[width] duration-500 ease-out"
      :style="{ width: `calc(${percent}% - 0.5rem)` }"
      aria-hidden="true"
    />
    <span
      class="text-on-surface-muted relative w-6 shrink-0 text-right text-xs font-medium tabular-nums"
    >
      {{ rank }}
    </span>
    <span class="relative flex min-w-0 flex-1 items-baseline gap-2">
      <span class="text-on-surface truncate text-sm font-medium">
        {{ formatFilterValue(props.column, props.name) }}
      </span>
      <span v-if="props.column === 'country'" class="text-on-surface-muted shrink-0 text-xs">
        {{ props.name.toUpperCase() }}
      </span>
    </span>
    <span class="text-on-surface relative shrink-0 text-sm tabular-nums">
      {{ formatNumber(count) }}
    </span>
  </RouterLink>
</template>
