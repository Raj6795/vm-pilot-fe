export interface UIError {
  type: "NOT_FOUND" | "SERVER_ERROR" | "UNKNOWN_ERROR";
  message: string;
  retryable: boolean;
}
