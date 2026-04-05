import axios from "axios";
import type { Movie } from "../types/movie";
type FetchMoviesParams = {
    query: string;
    language?: string;
    page?: number
}
export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default async function fetchMovies({
  query,
  language = "en-US",
  page = 1,
}: FetchMoviesParams): Promise<MovieResponse> {
  const response = await axios.get<MovieResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        include_adult: false,
        language,
        page,
        api_key: import.meta.env.VITE_TMDB_TOKEN,
      },
    }
  );
  return response.data;
}