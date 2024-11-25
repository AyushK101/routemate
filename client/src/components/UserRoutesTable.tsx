import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { tableDataType } from "../types"
import Container from "./Container"







interface UserRoutesTableProps {
  data: tableDataType[],
  columns: ColumnDef<tableDataType>[],
}





const UserRoutesTable = ({ columns, data }: UserRoutesTableProps) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  })



  return (
    <>
    <Container  className="flex justify-center pt-9 overflow-x-auto w-full">
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
                row.getVisibleCells().map( cell => (
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

export default UserRoutesTable