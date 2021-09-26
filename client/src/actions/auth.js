import axios from "axios";

export const register = async (user) =>
  axios.post(`http://localhost:5000/api/register`, user);

export const login = async (user) =>
  axios.post(`http://localhost:5000/api/login`, user);
