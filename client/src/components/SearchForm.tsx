import { useForm } from 'react-hook-form'
import Button from './Button'
import DatePicker from './DatePicker'
import Input from './Input'
import Select from './Select'
import { zodResolver } from '@hookform/resolvers/zod'
import { common } from '../constants'
import { useLazyFindRouteApiQuery } from '../redux/apis/routemate'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import Loading from './Loading'
import { useAppDispatch } from '../redux/store'
import { setSearchTable } from '../redux/slices/searchSlice'

// interface customFindRouteErrorType {

// }

const SearchForm = () => {
  const form = useForm<common.findRouteSchemaType>({
    resolver: zodResolver(common.findRouteSchema)
  })
  const dispatch = useAppDispatch();
  const [findRouteApi,{isError,isLoading,isSuccess,data,error,requestId}] = useLazyFindRouteApiQuery()

  // Async function to handle form submission
  async function searchFunc(data: common.findRouteSchemaType) {
    const response = await findRouteApi(data,false)
    console.log({response})
    // console.log({data});
  }

  useEffect( ()=>{
    if(isError) {
      console.log({error})
      // const customError = error as 
      // toast.error(`${}`)
    }

    // source: string;
    // destination: string;
    // travelDate: string;
    // gender: string;
    // mode: string;
    // year: string;
    // name: string;
    // userId: string;

    if(isSuccess ) {
      // console.log(data)
      const temp = data.data.map ( d => {
        const { source, destination, travelDate, gender, mode, year, name, userId }  = d;
        return {source, destination, travelDate, gender, mode, year, name, userId};
      })
      // console.log(temp)
      dispatch(setSearchTable(temp))
      toast.success(`
        ${data.message}
        total routes: ${data.data.length}
        `,{icon: "🟢"})
    }
  },[error, isError, data, isSuccess, form, requestId, dispatch])

  if(isLoading) return <Loading/>

  return (
    <>
      <div className='form-style'>
        <h1 className='mb-6 text-[#1e293b] text-center font-bold text-2xl pt-4'>Find Travel Partner</h1>
        <form onSubmit={form.handleSubmit(searchFunc)} className='p-8 flex flex-col'>

          {/* Source Field */}
          <div className="form-field">
            <Input
              {...form.register("source")}
              label='Source'
              placeholder='Enter Source'
            />
            {form.formState.errors.source && (
              <span className="text-red-500 text-sm">{form.formState.errors.source.message}</span>
            )}
          </div>

          {/* Destination Field */}
          <div className="form-field">
            <Input
              {...form.register("destination")}
              label='Destination'
              placeholder='Enter Destination'
            />
            {form.formState.errors.destination && (
              <span className="text-red-500 text-sm">{form.formState.errors.destination.message}</span>
            )}
          </div>

          {/* College Year Select */}
          <div className="form-field">
            <Select {...form.register("year")} label="College Year">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="all">all</option>
            </Select>
            {form.formState.errors.year && (
              <span className="text-red-500 text-sm">{form.formState.errors.year.message}</span>
            )}
          </div>

          {/* Travel Date and Gender Select */}
          <div className='grid gird-cols-1 form-b1:grid-cols-2 gap-4'>
            <div className="form-field">
              <DatePicker {...form.register("travelDate")} label='Travel Date'/>
              {form.formState.errors.travelDate && (
                <span className="text-red-500 text-sm">{form.formState.errors.travelDate.message}</span>
              )}
            </div>

            <div className="form-field">
              <Select {...form.register("gender")} label='Gender'>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="all">all</option>
              </Select>
              {form.formState.errors.gender && (
                <span className="text-red-500 text-sm">{form.formState.errors.gender.message}</span>
              )}
            </div>
          </div>

          {/* Mode of Transport Select */}
          <div className="form-field">
            <Select {...form.register("mode")} label='Mode of Transport'>
              <option value="">select</option>
              <option value="bus">bus</option>
              <option value="train">train</option>
              <option value="car">car</option>
              <option value="bike">bike</option>
              <option value="all">all</option>
            </Select>
            {form.formState.errors.mode && (
              <span className="text-red-500 text-sm">{form.formState.errors.mode.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <Button className='button-style' disabled={isLoading}>
            Submit Details
          </Button>
        </form>
      </div>
    </>
  )
}

export default SearchForm
