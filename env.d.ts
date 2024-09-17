/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_STREAK_STATS_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
