function ImageSearch() {
  return (
    <div className="max-w-sm mx-auto my-6 rounded">
      <form>
        <div className="flex items-center">
          <input
            type="text"
            className="min-w-56 border border-gray-700 p-2 rounded-md"
            placeholder="Search"
          />
          <button
            type="submit"
            className="text-gray-200 ml-2 
            bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 py-2 px-6 rounded-md
            hover:text-white hover:scale-105 hover:bg-gradient-to-t"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
