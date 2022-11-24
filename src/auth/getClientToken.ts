import networkRequest from "../utils/networkRequest";
import { TOKEN_URL } from "../resources/urls";
import ClientTokenParams from "../types/clientTokenParams";
import NetworkResponse from "../types/networkResponse";

async function getClientToken(
  params: ClientTokenParams
): Promise<NetworkResponse> {
  const { clientBase64, scope } = params;

  let data = `grant_type=client_credentials`;

  if (scope) {
    data += `&scope=${scope}`;
  }

  const response = await networkRequest({
    method: "post",
    url: TOKEN_URL,
    headers: {
      Authorization: "Basic " + clientBase64,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  });

  return response;
}

export default getClientToken;
