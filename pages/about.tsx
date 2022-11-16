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
          <p style={{ textAlign: "justify", padding: 20 }}>
            A função <code>Math.random()</code> retorna um número
            pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até,
            mas não incluindo, 1 (exclusivo), que depois você pode dimensionar
            para um intervalo desejado. A implementação seleciona uma semente
            para o algoritmo de geração de números aleatórios; esta semente não
            pode ser escolhida ou reatribuída.
          </p>
          <h3>API do RANDOM.ORG</h3>
          <p style={{ textAlign: "justify", padding: 20 }}>
            RANDOM.ORG oferece números aleatórios verdadeiros para qualquer
            pessoa na Internet. A aleatoriedade vem do ruído atmosférico, que
            para muitos propósitos é melhor do que os algoritmos de números
            pseudo-aleatórios normalmente usados ​​em programas de computador.
            As pessoas usam o RANDOM.ORG para realizar sorteios, loterias e
            sorteios, para conduzir jogos online, para aplicações científicas e
            para arte e música. O serviço existe desde 1998 e foi construído
            pelo Dr. Mads Haahr da Escola de Ciência da Computação e Estatística
            do Trinity College, Dublin, na Irlanda. Hoje, RANDOM.ORG é operado
            pela Randomness and Integrity Services Ltd.
          </p>

          <Link href="https://github.com/carlosxfelipe/megasena">
            <a>
              <h4>Ver código (GitHub)</h4>
            </a>
          </Link>
          <Link href="/">
            <a>&larr; Voltar</a>
          </Link>
        </Description>
      </Main>
    </Container>
  );
}
