import { VendorSearchApiResponse } from "../types/VendorSearchApi";
import { VendorSearchApiErrorResponse } from "../types/VendorSearchApi";

export const vendorSearchSuccessMock: VendorSearchApiResponse = {
  status: "SUCCESS",
  timestamp: "2026-05-04T11:05:00Z",
  httpStatus: 200,
  correlationId: "550e8400-e29b-41d4-a716-446655440000",
  statusMessage: "Request processed successfully",
  data: {
    supplier: [
      {
        supplierName: "Food Inc",
        supplierNumber: 12345,
        suffixNumber: 1,
        sapNumber: "1234",
        apNumber: "AP-7890",
        companyName: "US",
        currencyName: "USD",
        supplierStatus: "Active",
      },
      {
        supplierName: "Food Inc LLC",
        supplierNumber: 67890,
        suffixNumber: 2,
        sapNumber: "004321",
        apNumber: "AP-5678",
        companyName: "CA",
        currencyName: "CAD",
        supplierStatus: "Active",
      },
    ],
  },
  errors: [],
};

export const vendorSearchErrorMock: VendorSearchApiErrorResponse = {
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
      message: "No vendors found matching the provided search criteria",
    },
  ],
};
