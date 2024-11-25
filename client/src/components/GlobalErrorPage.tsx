
const GlobalErrorPage = ({error}: {error: unknown}) => {
  return (
    <div>
      {JSON.stringify(error)}
    </div>
  )
}

export default GlobalErrorPage