import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import Layout from "./layout/Layout.tsx"
import AboutPage from "./pages/AboutPage.tsx"
import NotFoundPage from "./pages/NotFoundPage.tsx"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </>
    )
)