export default function MovieCard({poster,title,description}:{poster:string | null;title:string;description:string}) {
  return (
    <div className="border w-full h-[575px] p-4 bg-white max-w-sm rounded">
      <img
        src={poster ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster}`:"https://dummyimage.com/400x600/"}
        alt="Image"
        className="pb-3 "
      />
      <div className="text-2xl ">
        <p className="my-2 w-full line-clamp-2 h-[3rem">{title ? title:'No Title'}</p>
        <span className="text-gray-500 line-clamp-3  text-base  h-[4.5rem]">
          {description ? description :"No description"}
        </span>
      </div>
    </div>
  );
}
