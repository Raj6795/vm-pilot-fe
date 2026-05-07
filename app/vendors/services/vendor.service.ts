import { Vendor } from "../types/Vendor";
import { mapSupplierApiToVendor } from "../utils/vendorMappers";
import { mapVendorSearchError } from "../utils/vendorErrorMapper";
import { UIError } from "@/types/common/Error";
import { mockSearchApiCall } from "../api/mockClient";
import { searchVendorsApi } from "../api/VendorApi";

export type VendorSearchResult =
  | { data: Vendor[]; error?: undefined }
  | { data?: undefined; error: UIError };

const useMock = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

export async function searchVendors(): Promise<VendorSearchResult> {
  // mock or real API later
  const response = useMock
    ? await mockSearchApiCall()
    : await searchVendorsApi();

  if (response.status === "SUCCESS") {
    return {
      data: response.data.supplier.map(mapSupplierApiToVendor),
    };
  }

  return {
    error: mapVendorSearchError(response.errors),
  };
}
