import { Component } from "react";
import Quote from "../quote/quote.component";
import SearchBox from "../search-box/search-box.component";

class FavoriteList extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { favoriteQuotes } = this.props;
    const { onSearchChange } = this;

    return (
      <header>
        <h1>Fevorites</h1>
        <SearchBox
          className="favorites-search-box"
          onChangeHandler={onSearchChange}
          placeHolder="search a quote"
        />

        <div className="favorite-list">
          {favoriteQuotes.map((quote) => {
            return <Quote randomQoute={quote} />;
          })}
        </div>
      </header>
    );
  }
}

export default FavoriteList;
