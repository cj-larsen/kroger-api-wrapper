import { LocationParams } from "../types/locationParams";
import { LOCATION_URL } from "../resources/urls";
import apiRequest from "../utils/apiRequest";

export async function getLocation(params: LocationParams) {
  const { token, locationId } = params;
  const url = LOCATION_URL + `/${locationId}`;
  return await apiRequest(token, url);
}
