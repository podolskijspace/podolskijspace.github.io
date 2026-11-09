import { useShows } from "@/cases/useShows.ts";
import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

export const usePresenter = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 1000);
  const {
    data = [],
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useShows(debouncedSearch);
  const handleRetry = () => void refetch();
  const hasSearch = search.trim().length > 0;
  const isPending =
    hasSearch && (search !== debouncedSearch || isLoading || isFetching);

  const [page, setPage] = useState(0);
  const onShowMore = () => {
    setPage((page) => page + 1);
  };

  const [genre, setGenre] = useState("");
  const genres = useMemo(() => {
    if (!data?.length || isPending) return [];
    const genresSet = data.reduce<Set<string>>(
      (previousValue, currentValue) => {
        const genres = currentValue.show.genres;
        genres.forEach((genre) => {
          if (!previousValue.has(genre)) previousValue.add(genre);
        });
        return previousValue;
      },
      new Set(),
    );
    return Array.from(genresSet);
  }, [data, isPending]);

  const onPickGenre = (newGenre: string) => {
    if (genre === newGenre) setGenre("");
    else setGenre(newGenre);
    setPage(0);
  };
  const onSearch = (search: string) => {
    setSearch(search);
    setGenre("");
    setPage(0);
  };

  const [filteredData, withShowMoreBtn] = useMemo(() => {
    let filteredData = data;
    if (genre) {
      filteredData = data.filter((movie) => movie.show.genres.includes(genre));
    }
    const filteredByPagination = filteredData.slice(0, 3 * (page + 1));
    const withShowMoreBtn = filteredByPagination.length < filteredData.length;
    return [filteredByPagination, withShowMoreBtn];
  }, [data, genre, page]);

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
    withShowMoreBtn,
    onShowMore,
  };
};
