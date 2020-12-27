import axios from "axios";
import { API } from "../utils/config";
export const saveCity = (val) => localStorage.setItem("city", val);
export const getCity = () => localStorage.getItem("city");

export const fetchData = async (city) => {
  if (!city) return;

  try {
    const res = await axios.get(`${API.link}${city}${API.key}`);
    return {
      status: true,
      data: res.data,
    };
  } catch (e) {
    return {
      status: false,
      data: e.response.data.message,
    };
  }
};
