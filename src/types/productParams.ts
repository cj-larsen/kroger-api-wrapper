import ProductFilters from "./productFilters";

interface ProductParams {
  token: string;
  id: string;
  filters?: ProductFilters;
}

export default ProductParams;
