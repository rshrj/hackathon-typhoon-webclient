// react-router-dom
import { useLocation, Navigate } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// components
// import SplashScreen from '../SplashScreen';

export default function PrivateRoute({ children }) {
  let location = useLocation();
  // let loading = useSelector((state) => state.auth.loading);
  let loading = 'loggedIn';

  // if (loading === 'loading' || loading === 'init') {
  //   return <SplashScreen />;
  // }

  if (loading === 'idle') {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
}
