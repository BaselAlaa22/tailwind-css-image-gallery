import { useState, useEffect } from "react";
import Cards from "./components/Card";
function App() {
  const [cards, setcards] = useState([]);
  const [isLoading, seIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const BASE_URL = `https://pixabay.com/api/?key=${
    import.meta.env.VITE_PIXABAY_API_KEY
  }`;

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(BASE_URL);
      const { hits } = await response.json();
      setcards(hits);
    };
    fetchImages();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-3">
      {cards.map((card) => {
        const { id, downloads, likes, views, largeImageURL, user, tags } = card;
        return (
          <Cards
            key={id}
            downloads={downloads}
            likes={likes}
            views={views}
            largeImageURL={largeImageURL}
            user={user}
            tags={tags}
          />
        );
      })}
    </div>
  );
}

export default App;
