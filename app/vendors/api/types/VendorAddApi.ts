export interface VendorAddApiResponse {
  status: "SUCCESS";
  timestamp: string;
  httpStatus: number;
  correlationId: string;
  statusMessage: string;
  data: {
    statusMessage: string;
  };
  errors: [];
}

export interface VendorAddApiErrorResponse {
  status: "ERROR";
  timestamp: string;
  httpStatus: number;
  correlationId: string;
  statusMessage: string;
  data: null;
  errors: VendorAddApiError[];
}

export interface VendorAddApiError {
  code: string;
  status: string;
  timestamp: string;
  message: string;
}