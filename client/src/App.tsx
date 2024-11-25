import { Outlet } from "react-router"
import { Footer, Header } from "./components"
import { Toaster } from "react-hot-toast"
import ResponseTable from "./components/ResponseTable"
import SearchRoutesTable from "./components/SearchRoutesTable"
import { useSelector } from "react-redux"
import { RootStore } from "./redux/store"

function App() {
  const data = useSelector( (state: RootStore) => state.searchFormSlice.routes)
  return (
    <>
    <div className="max-w-full">
      <Header/>
      <Toaster/>
      <Outlet/>
      {/* <BuggyComponent/> */}
      {data?.length > 0 ?   <SearchRoutesTable data={data} /> : null}
      <ResponseTable/>
      <Footer/>
    </div>
    </>
  )
}

export default App
