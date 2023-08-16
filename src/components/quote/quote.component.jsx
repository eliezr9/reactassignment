import { Component } from "react";

class Quote extends Component {
  //need to add a function to like button onClick => like != like |+ update favorite list
  likeEventHandler() {}

  render() {
    const { content, author, length, liked } = this.props.randomQoute;
    const { likeEventHandler } = this;
    return (
      <div className="quote-container">
        <p>{content}</p>
        <h2>Autor: {author}</h2>
        <h2>Length: {length}</h2>

        <button>Like</button>
      </div>
    );
  }
}

export default Quote;
