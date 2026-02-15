import axios from "axios";
import { getAuthHeader } from "../utils/authHeader";

const API_URL = import.meta.env.VITE_API_URL + "/progress";

export const getProgress = async (studentId: string) => {
  const response = await axios.get(`${API_URL}/${studentId}`, { headers: getAuthHeader() });
  return response.data;
};

export const updateProgress = async (studentId: string, data: any) => {
  const response = await axios.put(`${API_URL}/${studentId}`, data, { headers: getAuthHeader() });
  return response.data;
};
