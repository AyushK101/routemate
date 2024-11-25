
// authSlice

export type UserLoginResponseType = {
  user: {
  username: string
  email: string
  // password: string
  createdAt: {
    $date: string
  }
  updatedAt: {
    $date: string
  }
  __v: number
}
} | null
