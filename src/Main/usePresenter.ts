import { useShows } from "@/cases/useShows.ts";
import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

export const usePresenter = () => {
  const [search, setSearch] = useState("");
  const [debouncedValue] = useDebounce(search, 1000);
  const {
    data = [],
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useShows(debouncedValue);

  const hasSearch = search.trim().length > 0;
  const isPending =
    hasSearch && (search !== debouncedValue || isLoading || isFetching);

  const [genre, setGenre] = useState("");
  const genres = useMemo(() => {
    if (!data?.length || isPending) return [];
    const genresSet = data.reduce((previousValue, currentValue) => {
      const genres = currentValue.show.genres;
      genres.forEach((genre) => {
        if (!previousValue.has(genre)) previousValue.add(genre);
      });
      return previousValue;
    }, new Set());
    return Array.from(genresSet);
  }, [data, isPending]);

  const onPickGenre = (newGenre: string) => {
    if (genre === newGenre) setGenre("");
    else setGenre(newGenre);
  };
  const onSearch = (search: string) => {
    setSearch(search);
    setGenre("");
  };
  const handleRetry = () => void refetch();

  const filteredData = useMemo(() => {
    if (!genre) return data;
    return data.filter((movie) => movie.show.genres.includes(genre));
  }, [data, genre]);

  return {
    hasSearch,
    search,
    onSearch,
    filteredData,
    genre,
    onPickGenre,
    genres,
    isError,
    isPending,
    handleRetry,
  };
};
