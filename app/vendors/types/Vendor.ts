export type VendorStatus = "Active" | "Inactive" | "Suspended";

export interface Vendor {
  id: string;
  name: string;
  supplierNumber: string;
  suffixNumber?: string;
  sapNumber?: string;
  apNumber?: string;
  company: string;
  currency: string;
  status: VendorStatus;
}
