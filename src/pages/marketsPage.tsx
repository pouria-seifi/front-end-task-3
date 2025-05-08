import { useMarkets } from "@/hooks/useMarkets";

export default function HomePage() {
  const { markets, loading, error } = useMarkets();

  return <div className="border-3 border-white">هوم پیج</div>;
}
