import type { ApiError } from "@/types/queries";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://fe-task-api.mainstack.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic GET request helper
export const apiGet = async <T>(url: string): Promise<T | ApiError> => {
  try {
    const response = await api.get<T>(url);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return {
        success: false,
        message: error.response.data?.message || "Failed to fetch data",
        statusCode: error.response.status,
      };
    }
    return {
      success: false,
      message: "Network error or unexpected issue",
      statusCode: 500,
    };
  }
};
