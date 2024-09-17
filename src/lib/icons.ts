import { type IconLink, type TechCategory } from './types';

export function labelled(category: TechCategory, label: string): TechCategory {
  return { ...category, description: label };
}

const b64: { [key: string]: string } = {
  website:
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyMHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCAyMCIgd2lkdGg9IjIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzAwMDAwMCIgaWQ9IkNvcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTYuMDAwMDAwLCAtMjk2LjAwMDAwMCkiPjxnIGlkPSJsYW5ndWFnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk2LjAwMDAwMCwgMjk2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xMCwwIEM0LjUsMCAwLDQuNSAwLDEwIEMwLDE1LjUgNC41LDIwIDEwLDIwIEMxNS41LDIwIDIwLDE1LjUgMjAsMTAgQzIwLDQuNSAxNS41LDAgMTAsMCBMMTAsMCBaIE0xNi45LDYgTDE0LDYgQzEzLjcsNC43IDEzLjIsMy42IDEyLjYsMi40IEMxNC40LDMuMSAxNiw0LjMgMTYuOSw2IEwxNi45LDYgWiBNMTAsMiBDMTAuOCwzLjIgMTEuNSw0LjUgMTEuOSw2IEw4LjEsNiBDOC41LDQuNiA5LjIsMy4yIDEwLDIgTDEwLDIgWiBNMi4zLDEyIEMyLjEsMTEuNCAyLDEwLjcgMiwxMCBDMiw5LjMgMi4xLDguNiAyLjMsOCBMNS43LDggQzUuNiw4LjcgNS42LDkuMyA1LjYsMTAgQzUuNiwxMC43IDUuNywxMS4zIDUuNywxMiBMMi4zLDEyIEwyLjMsMTIgWiBNMy4xLDE0IEw2LDE0IEM2LjMsMTUuMyA2LjgsMTYuNCA3LjQsMTcuNiBDNS42LDE2LjkgNCwxNS43IDMuMSwxNCBMMy4xLDE0IFogTTYsNiBMMy4xLDYgQzQuMSw0LjMgNS42LDMuMSA3LjQsMi40IEM2LjgsMy42IDYuMyw0LjcgNiw2IEw2LDYgWiBNMTAsMTggQzkuMiwxNi44IDguNSwxNS41IDguMSwxNCBMMTEuOSwxNCBDMTEuNSwxNS40IDEwLjgsMTYuOCAxMCwxOCBMMTAsMTggWiBNMTIuMywxMiBMNy43LDEyIEM3LjYsMTEuMyA3LjUsMTAuNyA3LjUsMTAgQzcuNSw5LjMgNy42LDguNyA3LjcsOCBMMTIuNCw4IEMxMi41LDguNyAxMi42LDkuMyAxMi42LDEwIEMxMi42LDEwLjcgMTIuNCwxMS4zIDEyLjMsMTIgTDEyLjMsMTIgWiBNMTIuNiwxNy42IEMxMy4yLDE2LjUgMTMuNywxNS4zIDE0LDE0IEwxNi45LDE0IEMxNiwxNS43IDE0LjQsMTYuOSAxMi42LDE3LjYgTDEyLjYsMTcuNiBaIE0xNC40LDEyIEMxNC41LDExLjMgMTQuNSwxMC43IDE0LjUsMTAgQzE0LjUsOS4zIDE0LjQsOC43IDE0LjQsOCBMMTcuOCw4IEMxOCw4LjYgMTguMSw5LjMgMTguMSwxMCBDMTguMSwxMC43IDE4LDExLjQgMTcuOCwxMiBMMTQuNCwxMiBMMTQuNCwxMiBaIiBpZD0iU2hhcGUiLz48L2c+PC9nPjwvZz48L3N2Zz4=',
  primevue:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAzNSA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI1LjU3MzkgMTguMDQ1OEwyMi44NjYxIDE3LjQ0NDNMMjQuOTcyMiAyMC40NTE5VjI5Ljc3NTZMMzIuMTkzIDIzLjc2MDNWMTMuNTM0M0wyOC44ODM1IDE0LjczNzRMMjUuNTczOSAxOC4wNDU4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTguNzI1MjIgMTguMDQ1OEwxMS40MzMgMTcuNDQ0M0w5LjMyNjk2IDIwLjQ1MTlWMjkuNzc1NkwyLjEwNjA5IDIzLjc2MDNWMTMuNTM0M0w1LjQxNTY1IDE0LjczNzRMOC43MjUyMiAxOC4wNDU4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4yMjk2IDIxLjA1MzRMMTIuNjM2NSAxNy40NDQzTDE0LjE0MDkgMTguMzQ2NkgyMC4xNTgzTDIxLjY2MjYgMTcuNDQ0M0wyNC4wNjk2IDIxLjA1MzRWMzQuNTg3OEwyMi4yNjQzIDM3LjI5NDdMMjAuMTU4MyAzOS40SDE0LjE0MDlMMTIuMDM0OCAzNy4yOTQ3TDEwLjIyOTYgMzQuNTg3OFYyMS4wNTM0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI0Ljk3MjIgMzUuNDkwMUwyOC44ODM1IDMxLjU4MDJWMjcuNjcwMkwyNC45NzIyIDMwLjk3ODZWMzUuNDkwMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05LjMyNjk1IDM1LjQ5MDFMNS40MTU2NSAzMS41ODAyVjI3LjY3MDJMOS4zMjY5NSAzMC45Nzg2VjM1LjQ5MDFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjA2MDkgMEgyMC4xNTgzVjUuNzk4OEwyMS44MTQxIDEuNzg4NDJMMjEuMDYwOSAwWk0xOS41NzYyIDcuMjA4NDlMMTguOTU0OCA3LjUxOTA4VjBIMTcuNzUxM1YxMS42MjgxTDE5LjU3NjIgNy4yMDg0OVpNMTcuNzUxMyAxNC4yNDgzTDIyLjM2MDUgMy4wODU0OUwyMy40Njc4IDUuNzE0NUwxOS44NTc0IDE3LjE0MzVIMTcuNzUxM1YxNC4yNDgzWk0xNi41NDc4IDExLjY3MThWMEgxNS4zNDQzVjcuNTE5MDhMMTQuODQzNCA3LjI2ODY5TDE2LjU0NzggMTEuNjcxOFpNMTQuMTQwOSA1LjQ1Mzg1VjBIMTMuMjM4M0wxMi42MDg1IDEuNDk1MTlMMTQuMTQwOSA1LjQ1Mzg1Wk0xMi4wNDk3IDIuODIxODFMMTYuNTQ3OCAxNC40NDE5VjE3LjE0MzVIMTQuNzQyNkwxMC44MzEzIDUuNzE0NUwxMi4wNDk3IDIuODIxODFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuODA1MjIgMTIuMzMxM0wxNC43NDI2IDE3LjE0MzVIMTUuMDQzNUwxMS4xMzIyIDUuNzE0NUwwIDQuODEyMjFMMS44MDUyMiAxMi4zMzEzWk0zMi43OTQ4IDEyLjMzMTNMMTkuODU3NCAxNy4xNDM1SDE5LjU1NjVMMjMuMTY3IDUuNzE0NUwzNC42IDQuODEyMjFMMzIuNzk0OCAxMi4zMzEzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI0LjA2OTYgNC44MTIyMUwzMC4zODc4IDQuMjEwNjlMMjYuMTc1NyAwSDIxLjk2MzVMMjQuMDY5NiA0LjgxMjIxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEwLjIyOTYgNC44MTIyMUwzLjkxMTMgNC4yMTA2OUw4LjEyMzQ3IDBIMTIuMzM1NkwxMC4yMjk2IDQuODEyMjFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNC43IDUuMkwxMS4yIDUuN0wxNS4xIDE3LjE1SDE0LjdMMTAuNSAxNS42TDQuNyA1LjJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjkuOCA1LjJMMjMuMSA1LjdMMTkuNCAxNy4xNUwxOS45IDE3LjE0TDIzLjggMTUuN0wyOS44IDUuMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMi4xIDE4LjJMMTIuNiAxNy40TDE0LjMgMTguMkgyMC4zTDIxLjYgMTcuNEwyMi4yIDE4LjJMMTcuMTUgMjYuOEwxMi4xIDE4LjJaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjAyOTcgMEwxNy4xMjE0IDEzLjE1MzZMMjIuNTUyNiAwSDEyLjAyOTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K',
  youtrack:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9Ii0uMTAyNDExIiB4Mj0iNjQuMDUzMiIgeTE9IjMyLjAwMDIiIHkyPSIzMi4wMDAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGQjQzRkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiNGQjQwNkQiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik0xLjMwNjM0IDUxLjI0NDZjLS4wOTY4OC0uMDcxMy0uMTI4NzUtLjIwMTktLjA3NjI1LS4zMUw4Ljg2NTcxIDM1LjIwOS4wNTgyMTQgMjQuNjkwOGMtLjA4ODc1LS4xMDU2LS4wNzQzNzUtLjI2MzcuMDMxODc1LS4zNTE4TDI1Ljc3ODggMi45MzIwOUMzMC4zNDk1LS44Nzc5MDggMzYuOTY3LS45ODU0MDggNDEuNjYyNiAyLjY3MTQ3YzQuNjkzNyAzLjY1Njg3IDYuMTkzNyAxMC4wODgxMyAzLjU5NjkgMTUuNDM2MjNsLTIuNzk5NCA1Ljc2NjljMS4wOTE5LS4zNjYzIDIuMTcyNS0uNjk5NCAzLjI0MTItLjk5ODhsMTIuNjczOC0zLjY0MDZjLjEzODEtLjA0LjI4MTkuMDQ1LjMxMzEuMTg1Nmw1LjMwNTYgMjMuNTg1Yy4wMzI1LjE0NTctLjA2NjIuMjg4Mi0uMjE1LjMwNjktMS42ODE4LjIxMTktMTAuODU3NSAxLjUzLTIyLjI4MTIgNi4zMjk0LTEyLjk0MzEgNS40MzYyLTIxLjQ4NDQgMTMuMTYyNS0yMi42OTQ0IDE0LjI5MjUtLjA4OTQuMDgzNy0uMjIwNi4wODY5LS4zMTg3LjAxNDRMMS4zMDYzNCA1MS4yNDQ2WiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik01MiAxMkgxMnY0MGg0MFYxMloiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjEuNDY2NiAyNi4zNzA5LTUuNDg4MS05LjM3ODdoMy4xNTEzbDMuMzk4MSA1Ljk5MTkuMzk2OS44NTc1LjM5NjgtLjg2ODIgMy4zMTE5LTUuOTgxMmgzLjA5NzVsLTUuNDAyNSA5LjM1NzV2NS42NDg3aC0yLjg2MTl2LTUuNjI3NVoiLz4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzMgNDMuOTk4NEgxN3YzaDE2di0zWiIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00Mi4zMjQ4IDE2Ljk5MjJIMzAuMjg3OWwtLjAwMDYgMi42MzY5aDQuNTY2MnYxMi4zNjkzaDIuOTI2M1YxOS42MjkxaDQuNTQ1di0yLjYzNjlaIi8+Cjwvc3ZnPgo=',
};

export const LanguageIcon: { [key: string]: IconLink } = {
  Python: {
    imageURL:
      'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
    clickURL: 'https://python.org',
  },
  TypeScript: {
    imageURL:
      'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    clickURL: 'https://www.typescriptlang.org/',
  },
  JavaScript: {
    imageURL:
      'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    clickURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  HTML5: {
    imageURL:
      'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
    clickURL: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  CSS3: {
    imageURL:
      'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    clickURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  Java: {
    imageURL:
      'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',
    clickURL: 'https://www.java.com/',
  },
  Kotlin: {
    imageURL:
      'https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white',
    clickURL: 'https://kotlinlang.org/',
  },
  Go: {
    imageURL:
      'https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white',
    clickURL: 'https://go.dev/',
  },
  CSharp: {
    imageURL:
      'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
    clickURL: 'https://learn.microsoft.com/en-gb/dotnet/csharp/',
  },
  Markdown: {
    imageURL:
      'https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white',
    clickURL: 'https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax',
  },
  LaTeX: {
    imageURL:
      'https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white',
    clickURL: 'https://www.latex-project.org/',
  },
};

export const DatabaseIcon: { [key: string]: IconLink } = {
  MongoDB: {
    imageURL:
      'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
    clickURL: 'https://www.mongodb.com/',
  },
  Redis: {
    imageURL:
      'https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white',
    clickURL: 'https://redis.com/',
  },
  MySQL: {
    imageURL:
      'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white',
    clickURL: 'https://www.mysql.com/',
  },
  MariaDB: {
    imageURL:
      'https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white',
    clickURL: 'https://mariadb.org/',
  },
  SQLite: {
    imageURL:
      'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white',
    clickURL: 'https://www.sqlite.org/',
  },
};

export const ToolIcon: { [key: string]: IconLink } = {
  Docker: {
    imageURL:
      'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
    clickURL: 'https://www.docker.com/',
  },
  Gradle: {
    imageURL:
      'https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white',
    clickURL: 'https://gradle.com/',
  },
  Nginx: {
    imageURL:
      'https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white',
    clickURL: 'https://www.nginx.com/',
  },
  Vite: {
    imageURL:
      'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
    clickURL: 'https://vitejs.dev/',
  },
  ESLint: {
    imageURL:
      'https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white',
    clickURL: 'https://eslint.org/',
  },
  Git: {
    imageURL:
      'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
    clickURL: 'https://git-scm.com/',
  },
  Bash: {
    imageURL:
      'https://img.shields.io/badge/bash-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white',
    clickURL: 'https://www.gnu.org/software/bash/',
  },
  Obsidian: {
    imageURL:
      'https://img.shields.io/badge/Obsidian-%23483699.svg?style=for-the-badge&logo=obsidian&logoColor=white',
    clickURL: 'https://obsidian.md/',
  },
  Trello: {
    imageURL:
      'https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white',
    clickURL: 'https://trello.com/',
  },
  YouTrack: {
    imageURL:
      'https://img.shields.io/badge/YouTrack-E20E86.svg?style=for-the-badge&logoColor=white&logo=' +
      b64.youtrack,
    clickURL: 'https://www.jetbrains.com/youtrack/',
  },
};

export const FrameworkIcon: { [key: string]: IconLink } = {
  ExpressJS: {
    imageURL:
      'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
    clickURL: 'https://expressjs.com/',
  },
  Flask: {
    imageURL:
      'https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white',
    clickURL: 'https://flask.palletsprojects.com/en/3.0.x/',
  },
  VueJS: {
    imageURL:
      'https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D',
    clickURL: 'https://vuejs.org/',
  },
  React: {
    imageURL:
      'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
    clickURL: 'https://react.dev/',
  },
  ChartJS: {
    imageURL:
      'https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white',
    clickURL: 'https://www.chartjs.org/',
  },
  PrimeVue: {
    imageURL:
      'https://img.shields.io/badge/PrimeVue-41B883?style=for-the-badge&logoColor=white&logo=' +
      b64.primevue,
    clickURL: 'https://primevue.org/',
  },
  GinGonic: {
    imageURL:
      'https://img.shields.io/badge/Gin-008ECF?style=for-the-badge&logoColor=white&logo=gin',
    clickURL: 'https://gin-gonic.com/',
  },
};

export const LinkSiteIcon: { [key: string]: (url: string) => IconLink } = {
  github(url) {
    return {
      clickURL: url,
      imageURL:
        'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
    };
  },
  website(url) {
    return {
      clickURL: url,
      imageURL:
        'https://img.shields.io/badge/website-white.svg?style=for-the-badge&logoColor=white&logo=' +
        b64.website,
    };
  },
  linkedIn(url) {
    return {
      clickURL: url,
      imageURL:
        'https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white',
    };
  },
  twitter(url) {
    return {
      clickURL: url,
      imageURL:
        'https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white',
    };
  },
};
export const InfraIcon: { [key: string]: IconLink } = {
  Cloudflare: {
    imageURL:
      'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
    clickURL: 'https://cloudflare.com',
  },
  Vercel: {
    imageURL:
      'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white',
    clickURL: 'https://vercel.com/',
  },
};
