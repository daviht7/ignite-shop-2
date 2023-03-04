import Image from "next/image";
import { HomeContainer, Product } from '../styles/pages/home';

import { useKeenSlider } from 'keen-slider/react';

import camiseta1 from '../assets/camisas/1.png';
import camiseta2 from '../assets/camisas/2.png';
import camiseta3 from '../assets/camisas/3.png';
import camiseta4 from '../assets/camisas/4.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="camiseta 1" />

        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="camiseta 2" />

        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="camiseta 3" />

        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camiseta4} width={520} height={480} alt="camiseta 4" />

        <footer>
          <strong>camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {

  await new Promise(resolve => setTimeout(resolve, 2000))

  return {
    props: {
      lista: [1, 2, 3]
    }
  }

};