import { HTMLProps } from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;

  &:hover,
  :focus,
  :active {
    color: #209869;
    border-color: #209869;
  }
`;

interface CardsProps extends HTMLProps<HTMLDivElement> {
  onClick: () => void;
  title: string;
}

export const Cards = ({ title, onClick, style }: CardsProps) => {
  return (
    <Card style={style} onClick={onClick}>
      {title}
    </Card>
  );
};
