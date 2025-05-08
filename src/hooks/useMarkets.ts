import { useState, useEffect } from "react";

import { fetchMarkets } from "@/services/api";
import type { Market } from "@/types/market";

export function useMarkets() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getMarkets = async () => {
      try {
        setLoading(true);
        const data = await fetchMarkets();
        setMarkets(data.results);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch markets")
        );
      } finally {
        setLoading(false);
      }
    };

    getMarkets();
  }, []);

  return { markets, loading, error };
}
