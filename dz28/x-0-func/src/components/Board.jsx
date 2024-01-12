import { useState, useEffect } from "react";
import "./Board.css";
import Square from "./Square";
import useCreateBoard from "../customHooks/useCreateBoard";

function Board() {
  const [boardSquares, setBoardSquares] = useState(
    JSON.parse(localStorage.getItem("boardSquares")) || Array(9).fill(null)
  );

  const { handleClick, restartGame, winner, tie } = useCreateBoard(
    boardSquares,
    setBoardSquares
  );

  useEffect(() => {
    localStorage.setItem("boardSquares", JSON.stringify(boardSquares));
  }, [boardSquares]);

  return (
    <>
      <div className="boardGrid">
        {boardSquares.map((square, index) => {
          return (
            <Square
              key={index}
              value={square}
              handleClick={() => handleClick(index)}
            />
          );
        })}
      </div>
      {winner ? <h3>Winner is {winner}</h3> : null}
      {tie ? <h3>It's a tie!</h3> : null}
      <button className="restartBtn" onClick={restartGame}>
        Click to Play Again!
      </button>
    </>
  );
}

export default Board;
