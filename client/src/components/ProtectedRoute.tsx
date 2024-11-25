import React, { useEffect } from 'react';
import { RootStore, useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import { useGetCurrentUserApiQuery } from '../redux/apis/userApi';
import { loginUserSlice, logoutUserSlice } from '../redux/slices/userSlice';
import {  useNavigate } from 'react-router';
import toast from 'react-hot-toast';

// type customType = {
//   message: string;
//   statuscode: number;
//   string: number;
// };

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authStatus = useSelector((state: RootStore) => state.userSlice.authStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // React Router hook for programmatic navigation

  const { 
    isError, 
    isLoading, 
    data, 
    error, 
    isSuccess ,
    status,

  } = useGetCurrentUserApiQuery("");

  useEffect(() => {
    if (status && isError) {
      // console.log(isError)
      // console.log(error)
        dispatch(logoutUserSlice(false));
        navigate('/login'); // Navigate to login on error
    }
    if (status && isSuccess) {
      // console.log(data)
      if(!data?.data?._id) {
        throw new Error("data.data._id == userId is undefined");
      }
      dispatch(loginUserSlice({ user: data?.data, authStatus: true }));
      toast("authenticated successfully",{duration: 800,icon: "✅"})
      navigate('/'); // Navigate to home on success
    }
  }, [isError, isSuccess, data, dispatch, error, navigate, status]);

  if (isLoading) return <Loading />;

  // Render children only if authenticated and no navigation happened
  return <>{authStatus && children}</>;
};

export default ProtectedRoute;
