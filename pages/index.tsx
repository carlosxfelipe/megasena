import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/sharedstyles";
import Cards from "../components/cards";

export default function Home() {
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    generateMegaNumbers();
  }, []);

  const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateMegaNumbers = () => {
    let array = [];
    for (let i = 0; i < 6; i++) {
      array.push(getRandomIntInclusive(1, 60));
    }
    array.sort(function (a, b) {
      return a - b;
    });
    setNumeros(array);
  };

  return (
    <Container>
      <Head>
        <title>Mega-sena</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>Mega-sena</Title>

        <Description>
          Os números que vão te deixar rico são:
          <CodeTag>
            {numeros.map((numero, index) => (
              <span key={index}>{numero} </span>
            ))}
          </CodeTag>
        </Description>

        <Cards onClick={generateMegaNumbers} />
      </Main>
    </Container>
  );
}
