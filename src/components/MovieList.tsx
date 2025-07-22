import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
};
type Movies = {
  movies: Movie[];
};
export default function MovieList({movies}:{movies:Movies |any}) {
  return (
    <div className="mx-10  font-semibold grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-auto">
      {movies ? movies.map((movie:Movie)=>(
        <MovieCard key={movie.id} poster={movie.poster_path} title={movie.title} description={movie.overview}/>
      )
    ):null
    }
     
    </div>
  )
}
