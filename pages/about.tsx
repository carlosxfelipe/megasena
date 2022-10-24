import Link from "next/link";
import {
  Container,
  Main,
  Title,
  Description,
} from "../components/sharedstyles";

import Image from "next/image";
import Carbon from "../public/carbon.png";

export default function About() {
  return (
    <Container>
      <Main>
        <Title>Sobre</Title>
        <Description>
          <h2>T146-84 Matemática para computação - Trabalho da AV2 (UNIFOR)</h2>
          <p>
            Equipe: Carlos Felipe P. de Araújo, Luiz Carlos F. L. Júnior e
            Nikely Fedechen Martins
          </p>
          <p>Professor: José Rubens Rodrigues De Sousa</p>
          <h3>A função Math.random() no JavaScript</h3>
          <Image src={Carbon} alt="explicando o algoritmo de random" />
          <Link href="/">
            <a>&larr; Voltar</a>
          </Link>
        </Description>
      </Main>
    </Container>
  );
}
