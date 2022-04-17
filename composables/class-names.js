import { ref } from 'vue'

export const classNames = {
  surfaceA: 'bg-theme-200 dark:bg-theme-700',
  surfaceB: 'bg-theme-600 dark:bg-theme-500',
  icon: 'text-theme-300 dark:text-theme-500 hover:text-theme-blue hover:dark:text-theme-blue cursor-pointer',
  nav: 'text-theme-300 dark:text-theme-100 hover:text-theme-200 hover:dark:text-theme-blue',
  menu: 'bg-theme-300 dark:bg-theme-500',
  titles: 'text-theme-600 dark:text-theme-100',
  subTitles: 'text-theme-400 dark:text-theme-100',
}

export const cNameRef = ref(classNames)

