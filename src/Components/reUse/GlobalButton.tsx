import React from "react";
import styled from "styled-components";

interface iBtn {
  width?: string;
  height?: string;
  bg?: string;
  brad?: string;
  title?: string;
  bd?: string;
  color?: string;
}

const GlobalButton: React.FC<iBtn> = ({ width, height, bg, brad, title, bd, color }) => {
  return (
    <div>
      <Container
        width={`${width}`}
        height={` ${height}`}
        bg={`${bg}`}
        brad={`${brad}`}
        bd={`${bd}`}
        color={`${color}`}
      >
        {title}
      </Container>
    </div>
  );
};

export default GlobalButton;

const Container = styled.div<{
  width: string;
  height: string;
  bg: string;
  brad: string;
  bd?: string;
  color?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bg }) => bg};
  border-radius: ${({ brad }) => brad};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 400ms;
  color: ${({ color }) => color};
  font-weight: 600;
  border: ${({bd})=> bd};
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
