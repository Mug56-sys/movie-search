import "./index.css";
import MovieList from "./components/MovieList";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function App() {
  const [movieSearch, SetMovieSearch] = useState<string>("");
  const [movie, SetMovie] = useState<string>("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWRkMDNkMDJmYjAxNjc3YjIyNGNhOGIzNDBkYzVlYyIsIm5iZiI6MTc1MzIwNzgxNi41ODMwMDAyLCJzdWIiOiI2ODdmZDQwODA5YThmOWRkYzAzOGUxODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TrZpJDlqfW4OCA6DsYONyC0s4lc2ilvptOlnpav0fVw",
    },
  };
  const {
    data: MovieData,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      console.log("hello");
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        options
      );
      return response.json();
    },
  });

  useEffect(() => {
    console.log(MovieData?.results);
    if (movie) {
      refetch();
    }
  }, [movie]);

  return (
    <div className=" bg-gray-300 p-3 min-h-screen">
      <h1 className="text-5xl font-semibold pl-10">Movie Search</h1>
      <div className="bg-white m-10 p-5 rounded-lg ">
        <span className="text-2xl pl-1 text-gray-600 font-semibold">
          Search for a movie
        </span>

        <input
          className="border rounded-lg w-full mt-2 text-2xl p-1 pl-2 border-gray-300 "
          placeholder={isFetching ? "Loading..." : "Search"}
          value={movieSearch}
          onChange={(e) => {
            SetMovieSearch(e.target.value);
          }}
        />

        <button
          className="w-full mt-5 border py-1 rounded-lg border-blue-500 text-white font-medium text-2xl bg-blue-500 cursor-pointer"
          onClick={() => {
            SetMovie(movieSearch.replace(/\s+/g, "-"));
            SetMovieSearch('');
          }}
        >
          Search
        </button>
      </div>
          {isFetching||isLoading ? <p className="text-center">Loading...</p> : 
          <MovieList movies={MovieData?.results}/>}
          {isError ?? <p className="text-center">Something went wrong</p>}
    </div>
  );
}

export default App;
