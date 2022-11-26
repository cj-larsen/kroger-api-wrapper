export interface ProductsFilters {
  term?: string;
  locationId?: string;
  productId?: string;
  brand?: string;
  fulfillment?: "ais" | "csp" | "dth" | "sth";
  start?: number;
  limit?: number;
}
