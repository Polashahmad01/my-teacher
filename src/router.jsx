import { createBrowserRouter } from "react-router-dom"

import { DefaultLayout } from "./layout/DefaultLayout"
import { ErrorScreen } from "./screens/ErrorScreen"
import { HomeScreen } from "./screens/HomeScreen"

export const useRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      errorElement: <ErrorScreen />,
      children: [
        {
          path: "",
          children: [
            {
              index: true,
              element: <HomeScreen />
            },
          ]
        }
      ]
    }
  ])

  return { router }
}
