// SPDX-FileCopyrightText: 2026 The LineageOS Project
//
// SPDX-License-Identifier: Apache-2.0

export interface BannedItem {
  version: string | null
  model: string | null
  note: string | null
}

export interface VersionRawTotalItem {
  version_raw: string
  installations: number
}

export interface InstallationFilters {
  model?: string
  country?: string
  version?: string
  carrier?: string
}

async function request<T>(url: string, body?: unknown): Promise<T> {
  const res = await fetch(url, {
    method: body === undefined ? 'GET' : 'POST',
    headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body)
  })
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`)
  }
  const isJson = res.headers.get('content-type')?.includes('application/json')
  return (isJson ? await res.json() : await res.text()) as T
}

export function listBans(): Promise<BannedItem[]> {
  return request<BannedItem[]>('/internal/ban/list')
}

export function banModel(model: string, note?: string): Promise<string> {
  return request('/internal/ban/model', { model, note })
}

export function banVersion(version: string, note?: string): Promise<string> {
  return request('/internal/ban/version', { version, note })
}

export function getInstallations(filters: InstallationFilters): Promise<VersionRawTotalItem[]> {
  const query = new URLSearchParams()
  for (const [key, value] of Object.entries(filters)) {
    if (value) query.set(key, value)
  }

  const suffix = query.toString()
  const url = suffix ? `/internal/installations?${suffix}` : '/internal/installations'
  return request<VersionRawTotalItem[]>(url)
}
