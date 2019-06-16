import React from "react";
import style, { ImagesContainer, Image, Title, Paragraph } from "./salonStyles";

const Salon = ({ className }) => (
  <section className={`${className} gridTwoColumns`}>
    <Title data-aos="fade-left">Profesionalny salon</Title>
    <Paragraph data-aos="fade-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
      diam felis, sit amet posuere neque mollis quis. Phasellus cursus, tortor a
      placerat accumsan, nunc purus mollis nibh, ac rutrum urna libero blandit
      arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Integer sed aliquet purus.
    </Paragraph>
    <Title data-aos="fade-left">Od 14 lat w zawodzie </Title>
    <Paragraph data-aos="fade-left">
      Suspendisse elit massa, pharetra non eros sed, condimentum maximus enim.
      Curabitur massa odio, mattis et mattis sit amet, commodo a metus. Nullam
      lacinia accumsan sapien, pharetra rutrum ante dapibus quis. Suspendisse
      lobortis arcu at augue tincidunt tempor.
    </Paragraph>
    <ImagesContainer>
      <Image pos={1} src="./golden-retrivier.jpg" />
      <Image pos={2} src="./golden-retrivier.jpg" />
      <Image pos={3} src="./golden-retrivier.jpg" />
    </ImagesContainer>
  </section>
);

export default style(Salon);
