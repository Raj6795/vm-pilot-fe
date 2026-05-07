import { UIError } from "@/types/common/Error";
import { SupplierApiError } from "../api/types/VendorSearchApi";

export function mapVendorSearchError(apiErrors: SupplierApiError[]): UIError {
  return {
    type: "NOT_FOUND",
    message: apiErrors[0]?.message ?? "Unable to fetch vendors",
    retryable: false,
  };
}
