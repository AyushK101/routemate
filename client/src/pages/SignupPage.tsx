import { Link } from "react-router"
import { Container, Signup } from "../components"


const SignupPage = () => {
  return (
    <Container>
    <h1 className="text-4xl font-bold text-center mb-3">Signup To continue</h1>
    <Link to={'/login'} > <div className="text-blue-500 text-center  mb-3" > Already have a account? Signup</div></Link>
    <Signup/>
  </Container>
  )
}

export default SignupPage