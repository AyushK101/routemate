import { Link } from "react-router"
import { Container, Login } from "../components"


const LoginPage = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center mb-3">Login To continue</h1>
      <Link to={'/signup'} > <div className="text-blue-500 text-center  mb-3" > don't have a account? Signup</div></Link>
      <Login/>
    </Container>
  )
}

export default LoginPage