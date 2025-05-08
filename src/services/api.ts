import type { Market } from "@/types/market";
import { API_BASE_URL } from "@/utils/constants";

export async function fetchMarkets(): Promise<{ results: Market[] }> {
  const response = await fetch(`${API_BASE_URL}/v1/mkt/markets/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch markets: ${response.status}`);
  }

  return response.json();
}
