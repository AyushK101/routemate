// import { Component } from "react";

// export class PublicationErrorBoundary extends Component {
//   state = { error: false, errorMessage: '' };

//   static getDerivedStateFromError(error) {
//     // Update state to render the fallback UI
//     return { error: true, errorMessage: error.toString() };
//   }

//   componentDidCatch(error, errorInfo) {
//     // Log error to an error reporting service like Sentry
//     console.log({ error, errorInfo });
//   }

//   render() {
//     const { error, errorMessage } = this.state;
//     const { children } = this.props;

//     return error ? <ErrorFallbackUI {...{ error, errorMessage }} /> : children;
//   }
// }

// function ErrorFallbackUI({ errorMessage }) {
//   return (
//     <div className="article-error">
//       <h3>There was a problem displaying the article:</h3>
//       <h3 className="error">{errorMessage}</h3>
//     </div>
//   );
// }

import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackUI from './FallbackUi'
// import { useAppDispatch } from '../redux/store'
// import { logoutUserSlice } from '../redux/slices/userSlice'



export function GlobalErrorBoundary ({children}: {children: React.ReactNode}) {
  // const dispatch = useAppDispatch()
  return (
    <ErrorBoundary fallbackRender={FallbackUI} >
      {children}
    </ErrorBoundary>
  )
}

