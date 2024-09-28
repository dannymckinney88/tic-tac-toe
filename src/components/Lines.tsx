import styled from "styled-components";

// Vertical line
export const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 33%;
  width: 2px;
  height: 100%;
  background-color: black;

  &.second {
    left: 66%;
  }
`;

// Horizontal line
export const HorizontalLine = styled.div`
  position: absolute;
  top: 33%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;

  &.second {
    top: 66%;
  }
`;
