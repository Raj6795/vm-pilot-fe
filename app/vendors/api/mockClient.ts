import {
  vendorSearchSuccessMock,
  vendorSearchErrorMock,
} from "./mocks/vendorSearch.mock";

import {
  VendorSearchApiResponse,
  VendorSearchApiErrorResponse,
} from "./types/VendorSearchApi";

type MockMode = "success" | "error";

const MOCK_MODE: MockMode = "success";

export function mockSearchApiCall(): Promise<
  VendorSearchApiResponse | VendorSearchApiErrorResponse
> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (MOCK_MODE === "success") {
        resolve(vendorSearchSuccessMock);
      } else {
        resolve(vendorSearchErrorMock);
      }
    }, 800); // Simulated network delay
  });
}
