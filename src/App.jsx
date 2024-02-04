import { useState, useEffect } from "react";
import Cards from "./components/Card";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [cards, setcards] = useState([]);
  const [isLoading, seIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const BASE_URL = `https://pixabay.com/api/?key=${
    import.meta.env.VITE_PIXABAY_API_KEY
  }&q=${term}&image_type=photo&pretty=true&safesearch=true`;

  const search = (value) => {
    value = value.replace(" ", "+");
    setTerm(value);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(BASE_URL);
      const { hits } = await response.json();
      setcards(hits);
      seIsLoading(false);
      console.log(isLoading);
    };
    fetchImages();
  }, [term]);
  return (
    <div className="container mx-auto">
      <ImageSearch search={search} />
      {!isLoading && cards.length === 0 && (
        <h1 className="text-6xl text-black text-center mx-auto mt-36">
          No Images Found
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-black text-center mx-auto mt-36">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3">
          {cards.length === 0
            ? ""
            : cards.map((card) => {
                const {
                  id,
                  downloads,
                  likes,
                  views,
                  webformatURL,
                  user,
                  tags,
                } = card;
                return (
                  <Cards
                    key={id}
                    downloads={downloads}
                    likes={likes}
                    views={views}
                    imageURL={webformatURL}
                    user={user}
                    tags={tags}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
}

export default App;
