import { Route, Routes } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import { useMemo } from 'react'

export const HOME_PAGE = `/`

export const MainNavigation = [
  {
    url: HOME_PAGE,
    Component: HomePage,
    label: `Главная страница`,
  },
]

function AppRoutes () {
  const routesList = useMemo(() => {
    return MainNavigation.map(({url, Component}, index) => (
      <Route
        path={url}
        element={<Component />}
        key={index}
      />
    ))
  }, [])
  
  return (
    <Routes>
      { routesList }
    </Routes>
  )
}

export default AppRoutes