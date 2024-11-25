import { Outlet } from "react-router"
import { Footer, Header } from "./components"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
    <div className="max-w-full">
      <Header/>
      <Toaster/>
      <Outlet/>
      {/* <BuggyComponent/> */}
      <Footer/>
    </div>
    </>
  )
}

export default App
