import NetworkResponse from "../types/networkResponse";
import ProductParams from "../types/productParams";
import { PRODUCT_URL } from "../resources/urls";
import buildQueryFilters from "../utils/buildQueryFilters";
import apiRequest from "../utils/apiRequest";

async function getProduct(params: ProductParams): Promise<NetworkResponse> {
  const { token, id, filters } = params;
  const queryFilters = buildQueryFilters(filters);
  const url = PRODUCT_URL + `/${id}` + queryFilters;
  return await apiRequest(token, url);
}

export default getProduct;
