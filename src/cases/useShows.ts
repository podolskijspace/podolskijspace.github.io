import { useQuery } from "@tanstack/react-query";
import type { Movie } from "@/types/Movie.ts";

export const useShows = (param: string) => {
  const query = param.trim();
  const queryKey = ["shows", query];
  const queryFn = async ({ signal }) => {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
      { signal },
    );
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return response.json();
  };

  return useQuery<Movie[]>({
    queryFn,
    queryKey,
    enabled: query.length > 0,
  });
};
