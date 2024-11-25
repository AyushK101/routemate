import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { common } from "../constants";
import Input from "./Input";
import Button from "./Button";
import { useRegisterApiMutation } from "../redux/apis/userApi";
// import { useErrorBoundary } from "react-error-boundary"
import Loading from "./Loading";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../redux/store";
import { loginUserSlice } from "../redux/slices/userSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [registerApi, {isError,isLoading,isSuccess}] = useRegisterApiMutation()
  const dispatch = useAppDispatch()
  // const {showBoundary} = useErrorBoundary();
  const navigate =useNavigate()
  
  const form = useForm<common.userSchemaType>({
    resolver: zodResolver(common.userSchema), // Using zodResolver for validation
  });

  useEffect(()=>{
    if( isSuccess ) {
      dispatch(loginUserSlice({_id: "asdf",authStatus: true}))
      toast.success('signup successful',{icon: "✅"})
      navigate('/')
    }
  },[dispatch, isSuccess, navigate])

  async function subFunc(data: common.userSchemaType) {
    const response = await registerApi(data)
    if(isError && response.error ) {
      // showBoundary(response.error)
    }
    
  }

  if(isLoading) return <Loading/>

  return (
    <>
      <form onSubmit={form.handleSubmit(subFunc)} className="form-style max-w-xl mx-auto">
        
        {/* Username Field */}
        <div className="form-field">
          <Input
            {...form.register('username')}
            label="Username"
            placeholder="Enter your username"
          />
          {form.formState.errors.username && (
            <span className="text-red-500 text-sm">
              {form.formState.errors.username.message}
            </span>
          )}
        </div>

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
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default Signup;
