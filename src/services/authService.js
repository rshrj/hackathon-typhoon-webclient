import {
  rejectWithToast,
  apiUrl,
  errorWithToast
} from '../utils/serviceHelpers';

export const login = async (email, password) => {
  try {
    const res = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (!res) {
      throw errorWithToast('Server did not respond');
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error('Request error', { cause: data });
    }

    return data;
  } catch (e) {
    if (e instanceof TypeError && e.message === 'Failed to fetch') {
      return rejectWithToast('Server is offline');
    }
    return Promise.reject(e);
  }
};

export const signup = async ({ email, name, password, password2, phone }) => {
  try {
    const res = await fetch(`${apiUrl}/users/signup`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        email,
        name,
        password,
        password2,
        phone
      })
    });

    if (!res) {
      throw errorWithToast('Server did not respond');
    }

    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      throw new Error('Request error', { cause: data });
    }

    return data;
  } catch (e) {
    if (e instanceof TypeError && e.message === 'Failed to fetch') {
      return rejectWithToast('Server is offline');
    }
    return Promise.reject(e);
  }
};

export const loadUserByToken = async (token) => {
  try {
    const res = await fetch(`${apiUrl}/users/me`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${token}`
      }
    });

    if (!res) {
      throw new Error({
        success: false,
        message: 'Server did not respond'
      });
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data);
    }

    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};

const authService = {
  login,
  signup,
  loadUserByToken
};

export default authService;
