import React from "react";
import './App.css';

const likes = 10;
const dislikes = 2;
const btnStyleLike = {
  padding: "10px 24px",
  border: "3px solid lime",
  background: "green"
};
const btnStyleDislike = {
  padding: "10px 24px",
  border: "3px solid pink",
  background: "red"
};
const btnDefault = {
  padding: "10px 24px",
  background: "#e7e7e7"
};

class App extends React.Component {
  constructor(props) {

    super(props);

    this.likeHandler = this.likeHandler.bind(this);

    this.dislikeHandler = this.dislikeHandler.bind(this);

    this.state = {
      likeCount: likes,
      dislikeCount: dislikes
    };
  }

  render() {
    return (
      <div className="container">
        <div>{this.props.headerProp}</div>

        <div>
          <span className="button">
            <button
              style={this.state.likeCount !== likes ? btnStyleLike : btnDefault}
              onClick={this.likeHandler}
            >
              Like
            </button>
            | {this.state.likeCount}
          </span>

          <span className="button">
            <button
              style={
                this.state.dislikeCount !== dislikes ? btnStyleDislike : btnDefault
              }
              onClick={this.dislikeHandler}
            >
              Dislike
            </button>{" "}
            | {this.state.dislikeCount}
          </span>
        </div>
      </div>
    );
  }

  likeHandler() {
    if (this.state.likeCount === likes) {
      this.setState(state => ({
        likeCount: state.likeCount + 1,
        dislikeCount: dislikes
      }));
    }
  }

  dislikeHandler() {
    if (this.state.dislikeCount === dislikes) {
      this.setState(state => ({
        dislikeCount: state.dislikeCount + 1,
        likeCount: likes
      }));
    }
  }
}

export default App;