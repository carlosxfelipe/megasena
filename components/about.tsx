import Link from "next/link";
import styled from "styled-components";

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

export default function About() {
  return <StyledLink href="/about" name="Sobre este projeto &rarr;" />;
}
