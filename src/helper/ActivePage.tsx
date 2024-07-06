import { useLocation } from 'react-router-dom'

export function getActivePage(): number {
  const activeTab = useLocation()
  console.log(activeTab.pathname)
  let x = 0
  switch (activeTab.pathname) {
    case '/portfolio/about':
      x = 0
      break

    case '/portfolio/skills':
      x = 1
      break

    case '/portfolio/projects':
      x = 2
      break

    case '/portfolio/contact':
      x = 3
      break
  }
  return x
}
