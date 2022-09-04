import { configureStore } from '@reduxjs/toolkit';

// import authReducer from './slices/auth/authSlice';
// import errorsReducer from './slices/errors/errorsSlice';
// import miscReducer from './slices/misc/miscSlice';
// import usersReducer from './slices/users/usersSlice';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // errors: errorsReducer,
    // misc: miscReducer,
    // users: usersReducer
  }
});

export default store;
