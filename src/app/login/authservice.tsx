import axios from 'axios';

const API_URL = 'http://localhost:9090/api/auth/';

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL + 'login', {
      email,
      password,
    });

    // if (response.data.accessToken) {
    //   localStorage.setItem('user', JSON.stringify(response.data));
    // }


    if (response.status === 200) {
      return response.data;
    }

    // return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

const register = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(API_URL + 'register', {
      name,
      email,
      password,
    });

    // if (response.data.accessToken) {
    //   localStorage.setItem('user', JSON.stringify(response.data));
    // }

    if (response.status === 201) {
      return response.data;
    }

    throw new Error("Bad response: " + JSON.stringify(response));
  } catch (error: any) {
    console.error(
      'Registration failed:',
      error.response ? error.response.data : error.message
    );
    throw error.response ? error.response.data : new Error(error.message);
  }
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);

  return null;
};

const AuthService = {
  login,
  register,
  logout,
  getCurrentUser,
};

export default AuthService;
