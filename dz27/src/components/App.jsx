import { useEffect, useState } from "react";
import Emoji from "./Emoji";

const DATA = [
  { id: 1, symbol: "🥸", count: 0 },
  { id: 2, symbol: "😏", count: 0 },
  { id: 3, symbol: "👾", count: 0 },
  { id: 4, symbol: "😎", count: 0 },
  { id: 5, symbol: "🥰", count: 0 },
];

function App() {
  const [emojis, setEmojis] = useState(DATA);
  const [highestCountEmoji, setHighestCountEmoji] = useState(null);
  const [show, setShow] = useState(false);

  const handleClick = (id) => {
    const updatedEmojis = emojis.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, count: emoji.count + 1 };
      }
      return emoji;
    });

    setEmojis(updatedEmojis);
    setShow(false);
  };

  const showFavorite = () => {
    if (highestCountEmoji === null || highestCountEmoji.count === 0) {
      return;
    } else {
      setShow(true);
    }
  };

  const clearResults = () => {
    localStorage.removeItem("votingData");
    setEmojis(emojis.map((emoji) => ({ ...emoji, count: 0 })));
    setHighestCountEmoji(null);
    setShow(false);
  };

  useEffect(() => {
    const votingData = localStorage.getItem("votingData");
    if (votingData) {
      setEmojis(JSON.parse(votingData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("votingData", JSON.stringify(emojis));
  }, [emojis]);

  useEffect(() => {
    const highestCountEmoji = emojis.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );
    setHighestCountEmoji(highestCountEmoji);
  }, [emojis]);

  return (
    <div className="container">
      <h1>Voting for the Best Emoticon!</h1>
      <div className="emoticons__container">
        {emojis.map((emoji) => (
          <Emoji
            key={emoji.id}
            symbol={emoji.symbol}
            count={emoji.count}
            onClick={() => handleClick(emoji.id)}
          />
        ))}
      </div>

      <button onClick={showFavorite} className="btn">
        Show Results
      </button>

      <button onClick={clearResults} className="btn">
        Clear Results
      </button>

      {show && (
        <div className="result">
          <h2>Results of the Poll:</h2>
          <h3>The Winner:</h3>
          <Emoji
            key={highestCountEmoji.id}
            symbol={highestCountEmoji.symbol}
            count={highestCountEmoji.count}
            show={show}
          />
        </div>
      )}
    </div>
  );
}

export default App;
