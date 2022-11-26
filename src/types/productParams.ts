import { ProductFilters } from "./productFilters";

export interface ProductParams {
  token: string;
  id: string;
  filters?: ProductFilters;
}
