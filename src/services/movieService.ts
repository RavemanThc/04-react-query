import axios from "axios";
import type { Movie } from "../types/movie";

type FetchMoviesParams = {
  query: string;
  page: number;          
  language?: string;     
};

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export default async function fetchMovies({
  query,
  page,
  language,
}: FetchMoviesParams): Promise<MovieResponse> {
  const params: Record<string, string | number | boolean> = {
    query,
    include_adult: false,
    page,
  };


  if (language) {
    params.language = language;
  }

  const response = await axios.get<MovieResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  return response.data;
}