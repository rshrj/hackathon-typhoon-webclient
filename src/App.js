// react
import { useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
// import { loadUserByToken } from './redux/slices/auth/authSlice';
// @mui
import { Stack, CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import globalStyles from './styles/global';
// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// components
import { JSnackbar } from './components/JSnackbar';
import { ScrollReset } from './components/ScrollReset';
import { PrivateRoute } from './components/PrivateRoute';
// pages
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { GroupDashboardPage } from './pages/GroupDashboardPage';
import { ReportPage } from './pages/ReportPage';
// layouts
import { DashboardLayout } from './layouts/DashboardLayout';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem('token');
    // dispatch(loadUserByToken(token));
  }, [dispatch]);

  // const toasts = useSelector((state) => state.errors.toastErrors);
  const toasts = { ids: [] };

  return (
    <ThemeProvider theme={theme}>
      {/* MUI Baseline */}
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />

      {/* Toasts */}
      {toasts.ids.length !== 0 && (
        <Stack spacing={2} sx={{ width: '100%' }}>
          {toasts.ids.map((toastId) => (
            <JSnackbar
              key={toastId}
              toastId={toastId}
              toast={toasts.errors[toastId]}
            />
          ))}
        </Stack>
      )}

      {/* Routes */}
      <BrowserRouter>
        {/* Reset scroll position on page change */}
        <ScrollReset>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route
              path='/dashboard'
              element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }>
              <Route index element={<GroupDashboardPage />} />
              <Route path='report' element={<ReportPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </ScrollReset>
      </BrowserRouter>
    </ThemeProvider>
  );
}
