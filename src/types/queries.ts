export interface ApiError {
  success: false;
  message: string;
  statusCode?: number;
}

export interface ApiResponse<T> {
  success: true;
  message?: string;
  data: T;
}
