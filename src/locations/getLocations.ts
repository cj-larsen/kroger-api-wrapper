import buildQueryFilters from "../utils/buildQueryFilters";
import { LOCATION_URL } from "../resources/urls";
import LocationsParams from "../types/locationsParams";
import NetworkResponse from "../types/networkResponse";
import apiRequest from "../utils/apiRequest";

async function getLocations(params: LocationsParams): Promise<NetworkResponse> {
  const { token, filters } = params;
  const queryFilters = buildQueryFilters(filters);
  const url = LOCATION_URL + queryFilters;
  return await apiRequest(token, url);
}

export default getLocations;
