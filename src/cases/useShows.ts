import { useQuery } from "@tanstack/react-query";
import type { ShowResult } from "@/types/Show.ts";

export const useShows = (param: string) => {
  const query = param.trim();
  const queryKey = ["shows", query];
  const queryFn = async ({ signal }) => {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
      { signal },
    );
    if (!response.ok) throw new Error(`Ошибка запроса: ${response.status}`);
    return response.json();
  };

  return useQuery<ShowResult[]>({
    queryFn,
    queryKey,
    enabled: query.length > 0,
  });
};
