import {
  vendorSearchSuccessMock,
  vendorSearchErrorMock,
} from "./mocks/vendorSearch.mock";

import {
  VendorSearchApiResponse,
  VendorSearchApiErrorResponse,
} from "./types/VendorSearchApi";

import{
    VendorAddApiResponse,
    VendorAddApiErrorResponse,
} from "./types/VendorAddApi";

import{
    vendorAddSuccessMock,
    vendorAddErrorMock,
} from "./mocks/vendorAdd.mock";

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
export function mockAddApiCall(): Promise<
  VendorAddApiResponse | VendorAddApiErrorResponse
> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (MOCK_MODE === "success") {
        resolve(vendorAddSuccessMock);
      } else {
        resolve(vendorAddErrorMock);
      }
    }, 800); // Simulated network delay
  });
}