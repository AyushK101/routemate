import Button from './Button'
import { useSendMailMutation } from '../redux/apis/routemate'
import { RootStore } from '../redux/store'
import { useSelector } from 'react-redux'
import { sendEmailEmailjs } from '../utils/emailjs'
import toast from 'react-hot-toast'

const ContactBtn = ({userId}: {userId: string}) => {
  const [emailTrigger] = useSendMailMutation()
  const sender = useSelector( (state: RootStore)=> state.userSlice.user?.email)!

  async function sendEmailContact() {
    try {
      // console.log(userId)
      const response = await emailTrigger({userId}).unwrap()
      toast.success("email verification complete",{icon: "🟢"})
      const receiver = response?.data
      // console.log(receiver)
      // console.log(sender)
      try {
      const emailResponse = await sendEmailEmailjs({sender,receiver})
      toast.success(`
        ${emailResponse.text}: email send successfully
        from: ${sender}
        to: ${receiver}
        `,{icon: "🟢"})
      } catch (error) {
        console.log(error)
       toast.error(`error while sending mail`,{icon: "🔴"}) 
      }
    } catch (error) {
      console.log(error)
      // const customError = error as  
      // toast.error(`${customError.}`)
      toast.error("email verification failed",{icon: "🔴"})
    }


  }

  return (
    <>
      <Button onClick={sendEmailContact} className="mx-3 bg-blue-500 hover:bg-blue-600 duration-300  px-3 py-1 rounded-md text-white text-base align-text-bottom">
        Contact
      </Button>
    </>
  )
}

export default ContactBtn