import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import { Toaster } from "react-hot-toast"


function App() {


  return (
    <>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </>
  )
}

export default App
