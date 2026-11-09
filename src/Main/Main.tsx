import s from "./Main.module.css";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Search } from "./Search/Search.tsx";
import { Body } from "./Body/Body.tsx";
import { usePresenter } from "./usePresenter.ts";

export const Main = () => {
  const {
    search,
    setSearch,
    hasSearch,
    data,
    isError,
    isPending,
    handleRetry,
  } = usePresenter();

  return (
    <main className={s.page}>
      <Header />
      <Search hasSearch={hasSearch} search={search} setSearch={setSearch} />
      {hasSearch && (
        <Body
          data={data}
          isError={isError}
          isPending={isPending}
          onRetry={handleRetry}
        />
      )}
      <Footer />
    </main>
  );
};
