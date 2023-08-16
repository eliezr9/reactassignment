import { Component } from "react";
import Quote from "./components/quote/quote.component";
import "./App.css";
import FavoriteList from "./components/favorite-list/favorite.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: {},
      favoriteQuotes: [],
    };
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          quote: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { quote, favoriteQuotes } = this.state;
    const { getRandomQuote } = this;

    return (
      <div className="App">
        <header className="App-header">
          <button>Favorites</button>
          <button>Generator</button>

          <h1>Quotes App</h1>

          <Quote randomQoute={quote} />

          <button onClick={getRandomQuote}>new Quote</button>

          <FavoriteList favoriteQuotes={favoriteQuotes} />
        </header>
      </div>
    );
  }
}

export default App;
