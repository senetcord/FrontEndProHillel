import "./Board.css";
import Square from "./Square";
import useCreateBoard from "../customHooks/useCreateBoard";

function Board() {
  const { handleClick, restartGame, winner, tie, boardSquares } =
    useCreateBoard();

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
