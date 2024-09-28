import React, { useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";
import { VerticalLine, HorizontalLine } from "./Lines";
import { calculateWinner } from "../utils/utils";

// Types
interface BoardState {
  cells: (string | null)[];
}

// Styled container for the board
const BoardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const RestartButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Board: React.FC = () => {
  const [cells, setCells] = useState<BoardState["cells"]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(cells);

  const handleClick = (index: number): void => {
    if (cells[index] || winner) return;

    const newCells = [...cells];
    newCells[index] = isXNext ? "X" : "O";
    setCells(newCells);
    setIsXNext(!isXNext);
  };

  // Function to reset the game
  const restartGame = () => {
    setCells(Array(9).fill(null)); // Reset the cells
    setIsXNext(true); // Set X to go next
  };

  return (
    <div>
      <BoardContainer>
        {/* Render Vertical and Horizontal Lines */}
        <VerticalLine />
        <VerticalLine className="second" />
        <HorizontalLine />
        <HorizontalLine className="second" />

        {/* Render the cells */}
        {cells.map((cell, index) => (
          <Cell key={index} value={cell} onClick={() => handleClick(index)} />
        ))}
      </BoardContainer>

      {/* Display the winner */}
      {winner && <h2>{winner} Wins!</h2>}

      {/* Restart button that appears after the game is over */}

      <RestartButton onClick={restartGame}>Restart Game</RestartButton>
    </div>
  );
};

export default Board;
