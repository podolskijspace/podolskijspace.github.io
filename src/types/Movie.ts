export interface Movie {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    genres: Movie.Genre[];
    premiered: string | null;
    language: string | null;
    rating: { average: number | null };
    image: { medium: string; original: string } | null;
  };
}
export namespace Movie {
  export type Genre = string;
}
