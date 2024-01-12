import React from "react";
import "./Board.css";
import Square from "./Square";
import calculateWinner from "../scripts/calculateWinner";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSquares:
        JSON.parse(localStorage.getItem("boardSquares")) || Array(9).fill(null),
      xIsNext: true,
      winner: null,
      tie: false,
    };
  }

  handleClick = (position) => {
    const updatedBoardSquares = [...this.state.boardSquares];

    if (updatedBoardSquares[position] || calculateWinner(updatedBoardSquares)) {
      return;
    }

    updatedBoardSquares[position] = this.state.xIsNext ? "X" : "0";

    this.setState({
      boardSquares: updatedBoardSquares,
      xIsNext: !this.state.xIsNext,
      winner: calculateWinner(updatedBoardSquares),
      tie:
        updatedBoardSquares.every((square) => square !== null) &&
        !calculateWinner(updatedBoardSquares),
    });
  };

  restartGame = () => {
    localStorage.removeItem("boardSquares");
    this.setState({
      boardSquares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      tie: false,
    });
  };

  componentDidUpdate() {
    localStorage.setItem(
      "boardSquares",
      JSON.stringify(this.state.boardSquares)
    );
  }

  render() {
    return (
      <>
        <div className="boardGrid">
          {this.state.boardSquares.map((square, index) => {
            return (
              <Square
                key={index}
                value={square}
                handleClick={() => this.handleClick(index)}
              />
            );
          })}
        </div>
        {this.state.winner ? <h3>Winner is {this.state.winner}</h3> : null}
        {this.state.tie ? <h3>It's a tie!</h3> : null}
        <button className="restartBtn" onClick={this.restartGame}>
          Click to Play Again!
        </button>
      </>
    );
  }
}

export default Board;
