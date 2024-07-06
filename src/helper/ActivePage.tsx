import { useLocation } from 'react-router-dom'

export function getActivePage(setActive: React.Dispatch<React.SetStateAction<number>>) {
  const activeTab = useLocation()
  console.log(activeTab.pathname)

  switch (activeTab.pathname) {
    case '/portfolio':
      setActive[0]
      break

    case '/about':
      setActive[1]
      break

    case '/skills':
      setActive[2]
      break

    case '/projects':
      setActive[3]
      break

    case '/contact':
      setActive[4]
      break
  }
}
