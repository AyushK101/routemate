import SearchForm from './SearchForm'
import AddForm from './AddForm'

const FormSection = () => {
  return (
    <>
      <div className='grid grid-cols-1 form-b2:grid-cols-2 max-w-screen-xl mx-auto gap-10 px-4 py-16'>
        <SearchForm/>
        <AddForm/>
      </div>
    </>
  )
}

export default FormSection