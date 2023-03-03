import { styled } from "@/styles";
import Image from "next/image";
import { HomeContainer, Product } from '../styles/pages/home';

import camiseta1 from '../assets/camisas/1.png'
import camiseta2 from '../assets/camisas/2.png'
import camiseta3 from '../assets/camisas/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="camiseta 1" />

        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} width={520} height={480} alt="camiseta 2" />

        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta3} width={520} height={480} alt="camiseta 3" />

        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
