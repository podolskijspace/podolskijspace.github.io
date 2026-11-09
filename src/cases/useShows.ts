import { useQuery } from "@tanstack/react-query";

export type ShowResult = {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    genres: string[];
    premiered: string | null;
    language: string | null;
    rating: { average: number | null };
    image: { medium: string; original: string } | null;
  };
};

export const useShows = (param: string) => {
  const query = param.trim();

  return useQuery<ShowResult[]>({
    queryKey: ["shows", query],
    enabled: query.length > 0,
    queryFn: async ({ signal }) => {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
        { signal },
      );
      if (!response.ok) throw new Error(`Ошибка запроса: ${response.status}`);
      return response.json();
    },
  });
};
