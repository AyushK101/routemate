


export const globalErr  = (err, req, res ) => {  
  if(err instanceof Error ) {
    /**
     * @😭😭😭😭😭😭😭😭😭😭😭😭
     * @NOTE always return as function don't get with res.json()
     */
    return res
    .status(err.statusCode || 500)
    .json({
      statuscode: err.statusCode,
      message: err.message ?? undefined,
      error: err.errors ?? undefined,
      stack: err.stack ?? undefined
    })
  }

  res.status(500).json({
    statuscode: 505,
    error: err,
    message: "global error caught"
  })

} 

