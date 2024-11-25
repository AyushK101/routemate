import { useEffect } from "react"
import toast from "react-hot-toast"
import Button from "./Button"
import Loading from "./Loading"
import { useDeleteRouteApiMutation } from "../redux/apis/routemate"

export const RouteDeleteBtn = ({routeId}: {routeId: string}) => {
  const [deleteTrigger,{isError,isLoading,isSuccess,data,error}] = useDeleteRouteApiMutation()

  async function deleteRoute(routeId: string) {
    await deleteTrigger({_id: routeId})
  }

  useEffect( ()=>{
    if(isError) {
      console.log(error)
      toast.error("failed to delete route",{icon: "🔴"})
    }
    if(isSuccess) {
      // console.log(data)
      toast.success(`${data.message}`,{icon: "🟢"})
    }
  
  },[data, error, isError, isSuccess])

  if(isLoading) return <Loading/>

  return (<Button className="bg-red-500 hover:bg-red-700 duration-300  px-3 py-1 rounded-md text-white text-base align-text-bottom" type="button" onClick={()=>{
    deleteRoute(routeId)
  }}>Delete</Button>)

}