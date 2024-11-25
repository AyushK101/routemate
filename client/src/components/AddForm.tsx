import { useForm } from "react-hook-form";
import Button from "./Button";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Select from "./Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { common } from "../constants";
import { useCreateRouteApiMutation } from "../redux/apis/routemate";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { useEffect } from "react";
// import { useState } from "react";

export interface customCreateRouteType {
  data: {
    error: {correctUser: string},
    message: string,
    stack: string,
    statusCode: number
  },
  status: number
}


// type createRouteType = {
//   statusCode: number;
//   message: string;
//   data: {
//     userId: string;
//     name: string;
//     source: string;
//     destination: string;
//     gender: string;
//     travelDate: string;
//     year: string;
//     mode: string;
//     _id: string;
//     createdAt: string;
//     updatedAt: string;
//     __v: number;
//   };
//   success: boolean;
// };


// import { genericResponseType } from "../types";

// type customCreateResponseType = genericResponseType<createRouteType>

const AddForm = () => {
  const form = useForm<common.routeSchemaType>({
    resolver: zodResolver(common.routeSchema), // Integrating zod for form validation
  });

  const [createRouteApi,{isError,isLoading,isSuccess,error,data}] = useCreateRouteApiMutation();
  
  useEffect( ()=>{
    if(isError) {
      console.log("error", error)
      const customError = error as customCreateRouteType;
      const errMsg = JSON.stringify(customError?.data?.message)
      if(error) {
      toast.error(`${errMsg}: correctName: ${customError?.data?.error?.correctUser}`,{icon: "🔴",duration: 1300})
      }
  
    }
  
    if(isSuccess) {
      console.log(data)
      // const customData  = data as customCreateResponseType;
      toast.success(`${data.message}`,{icon: "🟢" })
    }
  },[data, error, isError, isSuccess])

  async function createFunc(data: common.routeSchemaType) {
      await createRouteApi(data)
    console.log(data);  // Handle the form submission
  }

 

  if(isLoading) return <Loading/>

  return (
    <>
      <div className="">
        <div className='form-style'>
          <h1 className='mb-6 text-[#1e293b] text-center font-bold text-2xl pt-4'>Add your Details</h1>
          <form onSubmit={form.handleSubmit(createFunc)} className='p-8 flex flex-col'>

            {/* Name Field */}
            <div className="form-field">
              <Input
                {...form.register("name")}
                label="Name"
                placeholder="Enter Your Name"
              />
              {form.formState.errors.name && (
                <span className="text-red-500 text-sm">
                  {form.formState.errors.name.message}
                </span>
              )}
            </div>

            {/* Source Field */}
            <div className="form-field">
              <Input
                {...form.register("source")}
                label="Source"
                placeholder="Enter Source"
              />
              {form.formState.errors.source && (
                <span className="text-red-500 text-sm">
                  {form.formState.errors.source.message}
                </span>
              )}
            </div>

            {/* Destination Field */}
            <div className="form-field">
              <Input
                {...form.register("destination")}
                label="Destination"
                placeholder="Enter Destination"
              />
              {form.formState.errors.destination && (
                <span className="text-red-500 text-sm">
                  {form.formState.errors.destination.message}
                </span>
              )}
            </div>

            {/* College Year Select */}
            <div className="form-field">
              <Select {...form.register("year")} label="College Year">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
              {form.formState.errors.year && (
                <span className="text-red-500 text-sm">
                  {form.formState.errors.year.message}
                </span>
              )}
            </div>

            {/* Travel Date and Gender Fields */}
            <div className="grid gird-cols-1 form-b1:grid-cols-2 gap-4">
              {/* Travel Date */}
              <div className="form-field">
                <DatePicker
                  {...form.register("travelDate")}
                  label="Travel Date"
                />
                {form.formState.errors.travelDate && (
                  <span className="text-red-500 text-sm">
                    {form.formState.errors.travelDate.message}
                  </span>
                )}
              </div>

              {/* Gender Select */}
              <div className="form-field">
                <Select {...form.register("gender")} label="Gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Select>
                {form.formState.errors.gender && (
                  <span className="text-red-500 text-sm">
                    {form.formState.errors.gender.message}
                  </span>
                )}
              </div>
            </div>

            {/* Mode of Transport Select */}
            <div className="form-field">
              <Select {...form.register("mode")} label="Mode of Transport">
                <option value="">Select</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
              </Select>
              {form.formState.errors.mode && (
                <span className="text-red-500 text-sm">
                  {form.formState.errors.mode.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <Button className='button-style'>
              Submit Details
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddForm;
