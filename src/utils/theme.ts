export type ThemeMode = 'light' | 'dark'

function systemPrefersDark(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function getInitialTheme(): ThemeMode {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return systemPrefersDark() ? 'dark' : 'light'
}

export function applyTheme(theme: ThemeMode): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme
}

export function initializeTheme(): ThemeMode {
  const theme = getInitialTheme()
  applyTheme(theme)
  return theme
}

export function setTheme(theme: ThemeMode): void {
  applyTheme(theme)
  localStorage.setItem('theme', theme)
}
