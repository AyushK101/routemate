import { useNavigate } from "react-router"
import { Container, Loading } from "../components"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { useLoginUserApiMutation } from "../redux/apis/userApi"
import { useAppDispatch } from "../redux/store"
import toast from "react-hot-toast"
import { loginUserSlice, logoutUserSlice } from "../redux/slices/userSlice"
import { LoginErrorType } from "../types"
import { useEffect } from "react"


const LoginPage = () => {
  const [LoginUserApi,{isError,isLoading,isSuccess,error,data}] = useLoginUserApiMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  


  useEffect( ()=> {
    if(isSuccess) {
      dispatch(loginUserSlice({user: data?.data?.user, authStatus: true}))
      toast.success("logged in successfully",{icon: "✅"})
      navigate('/')
    }
    if(isError) {
      console.log("user logged out in Login")
      dispatch(logoutUserSlice(false))
      console.log(error)
      const customError = error as LoginErrorType;
      toast.error(`${customError?.data?.message || "generic error"}`, {icon: "🔴",duration: 900})
      // showBoundary(error)
    }
    // console.log("isSuccess",isSuccess)
  },[data?.data?.user, dispatch, error, isError, isSuccess, navigate])


  async function onSuccess(response:  CredentialResponse){ 
    console.log(response);
    await LoginUserApi({credentials: response.credential || ""})
    
  }

  function errorMsg() {
    toast.error(`error while signup/signin using google`, {icon: "🔴"})
    console.log(error);
    
  }

  if(isLoading) return <Loading />

  return (
    <Container >
      <h1 className="text-4xl font-bold text-center mb-3">Login Or Signup To continue</h1>
      {/* <Link to={'/signup'} > <div className="text-blue-500 text-center  mb-3" > don't have a account? Signup</div></Link> */}
      {/* <Login/> */}
      <div className="px-10 md:px-40 flex justify-center">
      <GoogleLogin  onSuccess={onSuccess} onError={errorMsg}  />
      </div>
    </Container>
  )
}

export default LoginPage