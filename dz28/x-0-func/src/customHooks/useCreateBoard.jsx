import { useState, useEffect } from "react";

export default function useCreateBoard() {
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  const [boardSquares, setBoardSquares] = useState(
    JSON.parse(localStorage.getItem("boardSquares")) || Array(9).fill(null)
  );

  function handleClick(index) {
    const updatedBoardSquares = [...boardSquares];

    if (updatedBoardSquares[index] || calculateWinner(updatedBoardSquares)) {
      return;
    }

    updatedBoardSquares[index] = xIsNext ? "X" : "0";

    setWinner(calculateWinner(updatedBoardSquares));
    setBoardSquares(updatedBoardSquares);
    setXIsNext(!xIsNext);
    setTie(
      updatedBoardSquares.every((square) => square !== null) &&
        !calculateWinner(updatedBoardSquares)
    );
  }

  function restartGame() {
    localStorage.removeItem("boardSquares");
    setBoardSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setTie(false);
  }

  useEffect(() => {
    localStorage.setItem("boardSquares", JSON.stringify(boardSquares));
  }, [boardSquares]);

  return { handleClick, restartGame, winner, tie, boardSquares };
}

function calculateWinner(boardSquares) {
  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winPositions.length; i++) {
    const [a, b, c] = winPositions[i];
    if (
      boardSquares[a] &&
      boardSquares[a] === boardSquares[b] &&
      boardSquares[a] === boardSquares[c]
    ) {
      return boardSquares[a];
    }
  }

  return null;
}
