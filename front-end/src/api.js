import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export const signup = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/signup`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post('http://localhost:5000/api/auth/login', userData);
  return response.data; 
};

export const getUser = async (token) => {
  const response = await axios.get(`${API_URL}/api/auth`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const fetchTasks = async (token) => {
  const response = await axios.get(`${API_URL}/api/tasks`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

export const addTask = async (task, token) => {
  try {
    const response = await axios.post(`${API_URL}/api/tasks`, task, {
      headers: {
        'x-auth-token': token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteTask = async (_id, token) => {
  console.log(token)
  await axios.delete(`${API_URL}/api/tasks/${_id}`, {
    headers: {
      'x-auth-token': token,
    },
  });
};

export const updateTask = async (task, token) => {
  const response = await axios.put(`${API_URL}/api/tasks/${task._id}`, task, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};
