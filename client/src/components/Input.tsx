import { forwardRef} from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string,
  placeholder: string,

}




const Input= forwardRef<HTMLInputElement,InputProps>(({ label, placeholder, ...props },ref) => {
  return (
    <div>
      <label className='font-bold mb- block text-[#1e293b]'>
        {label}
        <input autoComplete={label} ref={ref} type={`${props?.type ?? "text"}`} className='mt-3 mb-3  transition-colors hover:border-blue-400 w-full text-base border-[1px] border-input-border rounded-md p-3  ' placeholder={placeholder} {...props} />
      </label>
    </div>
  )
})

export default Input