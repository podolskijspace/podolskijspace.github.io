export interface ShowResult {
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
}
