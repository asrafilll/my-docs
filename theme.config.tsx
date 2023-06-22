import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Asrafil</span>,
  project: {
    link: 'https://github.com/asrafilll/',
  },
  chat: {
    link: 'https://discordapp.com/users/214045849641025538',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
   component: false,
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: "light",
  },
  navigation :false,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: '',
  },
  feedback: {
    content: '',
  }
}

export default config
