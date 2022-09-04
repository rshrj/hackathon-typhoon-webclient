// react
import { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
// import { clearFormErrors } from '../../redux/slices/errors/errorsSlice';
// react-router-dom
import { useLocation } from 'react-router-dom';

const ScrollReset = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch(clearFormErrors());
  }, [location, dispatch]);

  return <>{children}</>;
};

export default ScrollReset;
