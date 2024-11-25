type FallbackUIProp = {
  error: Error,
  resetErrorBoundary: () => void
}

export default function FallbackUI ({error,resetErrorBoundary}: FallbackUIProp) {
  console.log("error in fallbackUI",error)
  return(
    <>
    <div role="alert" className="mx-auto min-h-screen min-w-full bg-slate-700 text-4xl text-white flex flex-col justify-center items-center gap-5 px-60 py-60 ">
    <h2>Something went wrong:</h2>
    <p>{(JSON.stringify(error))}</p>
    <button onClick={resetErrorBoundary} className="button-style">Try again</button>
  </div>
    </>
  )
}
