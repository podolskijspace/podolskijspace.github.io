import s from "./Main.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Search } from "./Search/Search.tsx";
import { Body } from "./Body/Body.tsx";
import { usePresenter } from "./usePresenter.ts";

export const Main = () => {
  const {
    search,
    onSearch,
    hasSearch,
    filteredData,
    genre,
    onPickGenre,
    genres,
    isError,
    isPending,
    handleRetry,
    withShowMoreBtn,
    onShowMore,
  } = usePresenter();

  return (
    <main className={s.page}>
      <Header />
      <Search hasSearch={hasSearch} search={search} onSearch={onSearch} />
      {hasSearch && (
        <Body
          data={filteredData}
          genre={genre}
          genres={genres}
          isError={isError}
          isPending={isPending}
          onRetry={handleRetry}
          onPickGenre={onPickGenre}
          withShowMoreBtn={withShowMoreBtn}
          onShowMore={onShowMore}
        />
      )}
      <Footer />
    </main>
  );
};
