import { VendorAddApiResponse } from "../types/VendorAddApi";
import { VendorAddApiErrorResponse } from "../types/VendorAddApi";

export const vendorAddSuccessMock: VendorAddApiResponse = {
  status: "SUCCESS",
  timestamp: "2026-05-04T11:05:00Z",
  httpStatus: 200,
  correlationId: "550e8400-e29b-41d4-a716-446655440000",
  statusMessage: "Request processed successfully",
   "data": {
         "statusMessage": "Vendor created successfully"
     },
  errors: [],
};

export const vendorAddErrorMock: VendorAddApiErrorResponse = {
  status: "ERROR",
  timestamp: "2026-05-04T11:06:12Z",
  httpStatus: 404,
  correlationId: "550e8400-e29b-41d4-a716-446655440000",
  statusMessage: "Validation Failed",
  data: null,
  errors: [
    {
      code: "404",
      status: "NOT_FOUND",
      timestamp: "2026-05-04T11:10:45.321Z",
      message: "No vendors has created",
    },
  ],
};
