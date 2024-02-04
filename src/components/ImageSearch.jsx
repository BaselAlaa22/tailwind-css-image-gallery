import { useState } from "react";

function ImageSearch(props) {
  const [searchTearm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    let term = e.target.value;
    setSearchTerm(term);
  };
  return (
    <div className="max-w-sm mx-auto my-6 rounded">
      <form
        onSubmit={(e) => {
          props.search(searchTearm);
          e.preventDefault();
        }}
      >
        <div className="flex items-center">
          <input
            type="text"
            className="bg-gray-200 border-s-2 border-gray-200 
            rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white
             focus:border-purple-500"
            placeholder="What's on your mind..."
            value={searchTearm}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="shadow bg-purple-500 hover:bg-purple-400 hover:scale-105 focus:shadow-outline
             focus:outline-none text-white font-bold py-2 px-4 ml-4 rounded "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
