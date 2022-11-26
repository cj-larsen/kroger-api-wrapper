import axios from "axios";
import { NetworkRequestParams } from "../types/networkRequestParams";
import { NetworkResponse } from "../types/networkResponse";

async function networkRequest(
  params: NetworkRequestParams
): Promise<NetworkResponse> {
  try {
    return await axios(params);
  } catch (error) {
    throw error;
  }
}

export default networkRequest;
