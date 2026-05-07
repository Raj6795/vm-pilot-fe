import { SupplierApi } from "../api/types/VendorSearchApi";
import { Vendor } from "../types/Vendor";

export function mapSupplierApiToVendor(supplier: SupplierApi): Vendor {
  return {
    id: String(supplier.supplierNumber),
    name: supplier.supplierName,
    supplierNumber: String(supplier.supplierNumber),
    suffixNumber: String(supplier.suffixNumber),
    sapNumber: supplier.sapNumber,
    apNumber: supplier.apNumber,
    company: supplier.companyName,
    currency: supplier.currencyName,
    status: supplier.supplierStatus as Vendor["status"],
  };
}
