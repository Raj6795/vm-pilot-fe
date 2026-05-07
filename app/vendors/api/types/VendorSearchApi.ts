export interface VendorSearchApiResponse {
  status: "SUCCESS";
  timestamp: string;
  httpStatus: number;
  correlationId: string;
  statusMessage: string;
  data: {
    supplier: SupplierApi[];
  };
  errors: [];
}

export interface SupplierApi {
  supplierName: string;
  supplierNumber: number;
  suffixNumber: number;
  sapNumber: string;
  apNumber: string;
  companyName: string;
  currencyName: string;
  supplierStatus: string; // "Active", etc.
}

export interface VendorSearchApiErrorResponse {
  status: "ERROR";
  timestamp: string;
  httpStatus: number;
  correlationId: string;
  statusMessage: string;
  data: null;
  errors: SupplierApiError[];
}

export interface SupplierApiError {
  code: string;
  status: string;
  timestamp: string;
  message: string;
}
