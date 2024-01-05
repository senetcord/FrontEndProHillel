import React from "react";
import Emoji from "./Emoji";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, symbol: "🥸", count: 0 },
        { id: 2, symbol: "😏", count: 0 },
        { id: 3, symbol: "👾", count: 0 },
        { id: 4, symbol: "😎", count: 0 },
        { id: 5, symbol: "🥰", count: 0 },
      ],
      highestCountEmoji: null,
      show: false,
    };
  }

  handleClick = (id) => {
    const { emojis } = this.state;
    const updatedEmojis = emojis.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, count: emoji.count + 1 };
      }
      return emoji;
    });

    const highestCountEmoji = updatedEmojis.reduce((prev, current) =>
      prev.count > current.count ? prev : current
    );

    this.setState({ emojis: updatedEmojis, highestCountEmoji, show: false });
  };

  showFavorite = () => {
    if (this.state.highestCountEmoji === null) {
      return;
    } else {
      this.setState({ ...this.state, show: true });
    }
  };

  clearResults = () => {
    localStorage.removeItem("votingData");
    this.setState({
      emojis: this.state.emojis.map((emoji) => ({ ...emoji, count: 0 })),
      highestCountEmoji: null,
      show: false,
    });
  };

  componentDidMount() {
    const votingData = localStorage.getItem("votingData");
    if (votingData) {
      this.setState({ emojis: JSON.parse(votingData) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("votingData", JSON.stringify(this.state.emojis));
  }

  render() {
    const { emojis, show, highestCountEmoji } = this.state;
    return (
      <div className="container">
        <h1>Voting for the Best Emoticon!</h1>
        <div className="emoticons__container">
          {emojis.map((emoji) => (
            <Emoji
              key={emoji.id}
              symbol={emoji.symbol}
              count={emoji.count}
              onClick={() => this.handleClick(emoji.id)}
            />
          ))}
        </div>

        <button onClick={this.showFavorite} className="btn">
          Show Results
        </button>

        <button onClick={this.clearResults} className="btn">
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
}

export default App;
