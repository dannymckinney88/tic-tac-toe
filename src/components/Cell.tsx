import React from "react";
import styled from "styled-components";

// Types
interface CellProps {
  value: string | null;
  onClick: () => void;
}

const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  user-select: none; /* Prevent text selection */
  outline: none; /* Remove the outline when the cell is clicked */

  &:focus {
    outline: none; /* Remove focus outline */
  }

  &:active {
    outline: none; /* Remove focus when active */
  }
`;

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return <CellContainer onClick={onClick}>{value}</CellContainer>;
};

export default Cell;
