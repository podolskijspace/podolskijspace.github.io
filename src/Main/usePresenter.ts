import { useShows } from "@/cases/useShows.ts";
import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";

export const usePresenter = () => {
  const [search, setSearch] = useState("");
  const [debouncedValue] = useDebounce(search, 1000);

  const { data, isError, isLoading, isFetching, refetch } =
    useShows(debouncedValue);

  const filters = useMemo(() => {
    if (!data?.length) return [];
    return data.reduce((previousValue, currentValue) => {
      if (!previousValue.has(currentValue)) previousValue.add(currentValue);
      return previousValue;
    }, new Set());
  }, [data]);

  const hasSearch = search.trim().length > 0;
  const isPending =
    hasSearch && (search !== debouncedValue || isLoading || isFetching);

  const handleRetry = () => void refetch();

  return {
    hasSearch,
    search,
    setSearch,
    data,
    filters,
    isError,
    isPending,
    handleRetry,
  };
};
