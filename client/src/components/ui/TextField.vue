<!--
SPDX-FileCopyrightText: 2026 The LineageOS Project

SPDX-License-Identifier: Apache-2.0
-->

<script setup lang="ts">
import { useId } from 'vue'

const model = defineModel<string>({ required: true })

defineProps<{
  label: string
  type?: string
  supportingText?: string
}>()

defineEmits<{
  submit: []
}>()

const id = useId()
</script>

<template>
  <div>
    <div class="relative">
      <input
        :id="id"
        v-model="model"
        :type="type ?? 'text'"
        placeholder=" "
        class="peer w-full rounded-t-lg border-b-2 border-outline bg-surface px-3 pt-5 pb-1.5 text-sm text-on-surface outline-none transition-colors hover:bg-surface-hover focus:border-brand-primary"
        @keyup.enter="$emit('submit')"
      />
      <label
        :for="id"
        class="pointer-events-none absolute left-3 top-1.5 origin-left text-xs text-on-surface-muted transition-all duration-200 ease-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-brand-primary"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="supportingText" class="mt-1 px-4 text-xs text-on-surface-muted">
      {{ supportingText }}
    </p>
  </div>
</template>
