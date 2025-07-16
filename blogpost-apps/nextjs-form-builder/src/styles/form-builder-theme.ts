import type { ICreatorTheme } from "survey-creator-core";

const customThemeVariables = {
  "--sjs-layer-1-background-500": "#ffffff",
  "--sjs-layer-1-background-400": "#f3f4f6",
  "--sjs-layer-1-foreground-100": "#111827",
  "--sjs-layer-1-foreground-50": "#6b728080",
  "--sjs-layer-2-background-500": "#f9fafb",
  "--sjs-layer-2-background-400": "#e5e7eb",
  "--sjs-layer-2-foreground-100": "#1f2937",
  "--sjs-layer-2-foreground-75": "#374151",
  "--sjs-layer-2-foreground-50": "#6b728080",
  "--sjs-layer-3-background-500": "#f3f4f6",
  "--sjs-layer-3-background-400": "#e5e7eb",
  "--sjs-layer-3-foreground-100": "#1f2937",
  "--sjs-layer-3-foreground-75": "#374151",
  "--sjs-layer-3-foreground-50": "#6b728080",

  "--sjs-primary-background-500": "#2563eb",
  "--sjs-primary-background-400": "#3b82f6",
  "--sjs-primary-background-10": "#eff6ff",
  "--sjs-primary-foreground-100": "#ffffff",
  "--sjs-primary-foreground-25": "#ffffff40",

  "--sjs-secondary-background-500": "#9333ea",
  "--sjs-secondary-background-400": "#a855f7",
  "--sjs-secondary-background-25": "#a855f740",
  "--sjs-secondary-background-10": "#f5f3ff",
  "--sjs-secondary-foreground-100": "#ffffff",
  "--sjs-secondary-forecolor-25": "#ffffff40",

  "--sjs-border-25": "#d1d5db",
  "--sjs-border-10": "#e5e7eb",
  "--sjs-border-25-overlay": "#00000026",

  "--sjs-semantic-red-background-500": "#dc2626",
  "--sjs-semantic-red-background-10": "#fee2e2",
  "--sjs-semantic-red-foreground-100": "#ffffff",

  "--sjs-semantic-green-background-500": "#16a34a",
  "--sjs-semantic-green-background-10": "#d1fae5",
  "--sjs-semantic-green-foreground-100": "#ffffff",

  "--sjs-semantic-blue-background-500": "#2563eb",
  "--sjs-semantic-blue-background-10": "#eff6ff",
  "--sjs-semantic-blue-foreground-100": "#ffffff",

  "--sjs-semantic-yellow-background-500": "#f59e0b",
  "--sjs-semantic-yellow-background-10": "#fef3c7",
  "--sjs-semantic-yellow-foreground-100": "#ffffff",

  "--sjs-semantic-white-background-500": "#ffffff",

  "--sjs-special-haze": "#2563eb40",
  "--sjs-special-glow": "#2563eb33",
  "--sjs-special-shadow": "#1e3a8a40",
  "--sjs-special-background": "#f3f4f6",

  "--sjs-code-gray-700": "#6b7280",
  "--sjs-code-gray-500": "#9ca3af",
  "--sjs-code-gray-300": "#d1d5db",
  "--sjs-code-blue-500": "#3b82f6",
  "--sjs-code-green-500": "#10b981",
  "--sjs-code-red-500": "#ef4444",
  "--sjs-code-purple-500": "#8b5cf6",
  "--sjs-code-yellow-500": "#eab308"
};

export const creatorTheme: ICreatorTheme = {
  themeName: "custom-creator-theme",
  cssVariables: { ...customThemeVariables }
};
