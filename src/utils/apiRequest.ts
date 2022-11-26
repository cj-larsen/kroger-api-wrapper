import { NetworkResponse } from "../types/networkResponse";
import networkRequest from "./networkRequest";

async function apiRequest(
  token: string,
  url: string
): Promise<NetworkResponse> {
  const response = await networkRequest({
    method: "get",
    url,
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json",
    },
  });

  return response;
}

export default apiRequest;
