import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Common/Layout"
import Technology from "../Pages/Technology"
import LandingPage from "../Pages/LandingPage"

export const mainRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            },
            {
                index: true,
                path: "page1",
                element: <Technology/>
            },
        ]
    }
])