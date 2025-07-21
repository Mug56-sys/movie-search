import "./index.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className=" bg-gray-300 p-3 min-h-screen">
      <h1 className="text-5xl font-semibold pl-10">Movie Search</h1>
      <div className="bg-white m-10 p-5 rounded-lg ">
        <span className="text-2xl pl-1 text-gray-600 font-semibold">Search for a movie</span>
        <input className="border rounded-lg w-full mt-2 text-2xl p-1 pl-2 border-gray-300 " placeholder="Search" />
        <button className="w-full mt-5 border py-1 rounded-lg border-blue-500 text-white font-medium text-2xl bg-blue-500 cursor-pointer">Search</button>
       
      </div>
       <MovieList/>
    </div>
  );
}

export default App;
