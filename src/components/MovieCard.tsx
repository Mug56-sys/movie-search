
export default function MovieCard() {
  return (
    <div className="border w-full h-fit p-4 bg-white max-w-sm rounded">
      <img src="https://dummyimage.com/400x600/" alt="Image" className="pb-3 "/>
      <div className="text-2xl">
      <p className="py-3">Title</p>
      <span className="text-gray-500 line-clamp-3  text-base border w-max-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </div>
    </div>
  )
}
