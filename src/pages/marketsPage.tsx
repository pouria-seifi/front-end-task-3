import { useMarkets } from "@/hooks/useMarkets";

export default function HomePage() {
  const { markets, loading, error } = useMarkets();

  return <div>HomePage</div>;
}
