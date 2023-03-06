import Image from "next/image";
import { HomeContainer, Product } from '../styles/pages/home';

import { useKeenSlider } from 'keen-slider/react';

import { GetStaticProps } from "next";
import Stripe from "stripe";

import { stripe } from "@/lib/stripe";
import 'keen-slider/keen-slider.min.css';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {
        products.map(product => {
          return (
            <Product className="keen-slider__slide" href={`/product/${product.id}`} key={product.id} >
              <Image src={product.imageUrl} width={520} height={480} alt={product.name} />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })
      }
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {

    const price = (product.default_price as Stripe.Price).unit_amount / 100

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
      }).format(price)
    }
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 //2horas
  }

};