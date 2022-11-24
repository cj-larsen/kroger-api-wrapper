import buildQueryFilters from "../utils/buildQueryFilters";
import { PRODUCT_URL } from "../resources/urls";
import ProductsParams from "../types/productsParams";
import NetworkResponse from "../types/networkResponse";
import apiRequest from "../utils/apiRequest";

async function getProducts(params: ProductsParams): Promise<NetworkResponse> {
  const { token, filters } = params;
  const queryFilters = buildQueryFilters(filters);
  const url = PRODUCT_URL + queryFilters;
  return await apiRequest(token, url);
}

export default getProducts;
