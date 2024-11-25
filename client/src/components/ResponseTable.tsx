import { useEffect } from "react"
import {  useGetAllUserRoutesQuery } from "../redux/apis/routemate"
import toast from "react-hot-toast"
import Loading from "./Loading"
import { customErrorForResponseTable, tableDataType } from "../types"
import {  createColumnHelper } from "@tanstack/react-table"
import UserRoutesTable from "./UserRoutesTable"
import { dateHelper } from "../utils/date"
import { FaRegSadCry } from "react-icons/fa";
import Container from "./Container"
import { useAppDispatch } from "../redux/store"
import { RouteDeleteBtn } from "./RouteDeleteBtn"
import { logoutUserSlice } from "../redux/slices/userSlice"


const columnHelper = createColumnHelper<tableDataType>();




const columns = [
  columnHelper.group({
    id: "user_routes",
    header: () => <div className="mx-auto text-2xl bg-slate-300 px-3 py-2 rounded-lg text-black">User Routes</div>,
    columns: [
      columnHelper.accessor("name",{
        header: "name",
        cell: (props) => props.getValue(),
      }),
      columnHelper.accessor("source",{
        header: "source",
        cell: (props) => props.getValue(),
      }),
      columnHelper.accessor("destination",{
        header: "destination",
        cell: (props) => props.getValue(), 
      }),
      columnHelper.accessor("travelDate",{
        header: "travel_date",
        cell: (props) => {
          return dateHelper(props.getValue())
        },
      }),
      columnHelper.accessor("mode",{
        header: "mode",
        cell: (props) => props.getValue()
      }),
      columnHelper.accessor("year",{
        header: "year",
        cell: (props) => props.getValue(),
      }),
      columnHelper.accessor("gender",{
        header: "gender",
        cell: (props) => props.getValue()
      }),
      columnHelper.accessor("routeId",{
        header: "delete",
        cell: (props) => <RouteDeleteBtn routeId={props.getValue()}/>
      })
    ]
  })
]

const ResponseTable = () => {
  const { isError, isLoading, isSuccess, data:ResponseData ,error }= useGetAllUserRoutesQuery([])
  const dispatch = useAppDispatch()
  let data: tableDataType[] = [];
  if(ResponseData) {
    const tableData= ResponseData.data // array of 
     data = tableData.map( td => {
      const { name, source, destination, travelDate, mode, gender, year,_id:routeId } = td;
      return {name, source, destination, travelDate, mode, gender, year, routeId};
    })
  }
 



  useEffect( ()=> {
    if(isError) {
      console.log(error)
      const customError  = error as customErrorForResponseTable;
      toast.error(`${customError?.data?.message}`,{icon: "🔴"})
      dispatch(logoutUserSlice(false))
    }

    if(isSuccess) {
      // console.log(ResponseData)
      toast.success("user routes fetched successfully",{icon: "🟢"})
    }
  },[ResponseData, dispatch, error, isError, isSuccess])

  // console.log({isError,isLoading,ResponseData,error})
  if (isLoading) return <Loading/>

  return (
    <>
        <UserRoutesTable data={data} columns={columns}/>
        <Container className="pt-0 hidden md:flex justify-center ">
          
          {data.length < 1 ? ( <div className="-translate-y-40"><h1 className="text-4xl text-center text-yellow-400">Woo, So Empty!</h1><FaRegSadCry className="relative left-5" color="yellow" size={200}/> </div>): (null)}
          </Container>
    </>
  )
}

export default ResponseTable