import Link from "next/link";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin-top: 1em;
`;

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  cursor: pointer;

  &:hover,
  :focus,
  :active {
    color: #209869;
    border-color: #209869;
  }
`;

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  margin-top: 4em;

  &:hover,
  :focus,
  :active {
    color: #209869;
    border-color: #209869;
  }
`;

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref>
    <StyledA>{name}</StyledA>
  </Link>
);

export default function Cards({ onClick }) {
  return (
    <FlexContainer>
      <Card onClick={onClick}>Gerar novos números</Card>
      <StyledLink href="/about" name="Sobre este projeto &rarr;" />
    </FlexContainer>
  );
}
