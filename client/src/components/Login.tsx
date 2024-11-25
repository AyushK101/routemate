import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { common } from "../constants";
import Input from "./Input";
import Button from "./Button";
import { useLoginUserApiMutation } from "../redux/apis/userApi";
// import { useErrorBoundary } from "react-error-boundary";
import { useAppDispatch } from "../redux/store";
import { loginUserSlice, logoutUserSlice } from "../redux/slices/userSlice";
import Loading from "./Loading";
import {   useNavigate } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [LoginUserApi,{isError,isLoading,isSuccess,error}] = useLoginUserApiMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const {showBoundary} = useErrorBoundary()

  const form = useForm<common.loginSchemaType>({
    resolver: zodResolver(common.loginSchema), // Integrating zod schema validation
  });

  useEffect( ()=> {
    if(isSuccess) {
      dispatch(loginUserSlice({_id:"sdfsdf", authStatus: true}))
      toast.success("logged in successfully",{icon: "✅"})
      navigate('/')
    }
    if(isError) {
      dispatch(logoutUserSlice(false))
      // showBoundary(error)
    }
    console.log("isSuccess",isSuccess)
  },[dispatch, error, isError, isSuccess, navigate])

  async function subFunc(data: common.loginSchemaType) {
    await LoginUserApi(data)
  }

  if(isLoading) return <Loading/>

  return (
    <>
      <form onSubmit={form.handleSubmit(subFunc)} className="form-style max-w-xl mx-auto">
        
        {/* Email Field */}
        <div className="form-field">
          <Input
            {...form.register("email")}
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          {form.formState.errors.email && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.email.message}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div className="form-field">
          <Input
            {...form.register("password")}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          {form.formState.errors.password && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="button-style">
          Sign In
        </Button>
      </form>
    </>
  );
};

export default Login;
