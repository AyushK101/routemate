import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { SearchRouteTableType } from "../types"
import Container from "./Container"
import { dateHelper } from "../utils/date"
import ContactBtn from "./ContactBtn"
import { CgPlayListRemove } from "react-icons/cg";
import { useAppDispatch } from "../redux/store"
import { unsetSearchTable } from "../redux/slices/searchSlice"



interface SearchRouteTableProp {
  data: SearchRouteTableType[]
}




const columnHelper = createColumnHelper<SearchRouteTableType>()

const columns = [
  columnHelper.group({
    id: "search_group",
    header: () => <div className="mx-auto text-2xl bg-slate-300 px-3 py-2 rounded-lg text-black">Search Result</div>,
    columns: [
      columnHelper.accessor("userId",{
        header: "contact",
        cell : (props) => {
          return <ContactBtn userId={props.getValue()}/>
        }
      }),
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

    ]
  }),
]

const SearchRoutesTable = ({ data }: SearchRouteTableProp) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  })
  const dispatch = useAppDispatch()

 function removeSearchTable() {
  dispatch(unsetSearchTable())
 }


  return (
    <>
      
      <Container className="flex flex-col items-center justify-center pt-9 overflow-x-auto w-full">
        <CgPlayListRemove onClick={removeSearchTable} size={50} color="red"/>
        <table className="p-6 ">
          <thead className="mx-2">
            {
              table.getHeaderGroups().map(HeaderGroup => (
                <tr key={HeaderGroup.id} className="mx-2">
                  {
                    HeaderGroup.headers.map(header => (
                      <th key={header.id} colSpan={header.colSpan} className="px-2 mx-2 text-center ">
                        {
                          header.isPlaceholder ? null : (flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          ))
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {
                  row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="text-center">
                      {
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      }
                    </td>
                  ))

                }

              </tr>
            ))

            }
          </tbody>
        </table>
      </Container>
    </>
  )
}

export default SearchRoutesTable