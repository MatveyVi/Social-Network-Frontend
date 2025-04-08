import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { App } from "./App"
import { store } from "./app/store"
import "@heroui/theme"
import "./index.css"
import { HeroUIProvider } from "@heroui/react";
import { createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"


const router = createBrowserRouter([
  {
    path: '/auth',
    element: <h1>Auth</h1>
  },
  {
    path: '/',
    element: <h1>Layout</h1>
  }
])


const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <HeroUIProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </HeroUIProvider>
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
