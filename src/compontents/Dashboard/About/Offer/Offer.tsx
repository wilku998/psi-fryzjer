import * as React from "react";
import style, { Title, Paragraph, Image } from "./offerStyles";
import Button from "../../../Abstracts/Button";

interface propsI {
  className: string;
};

const Offer = ({ className }: propsI) => (
  <div className={className}>
    <Title>Usługi</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
      diam felis, sit amet posuere neque mollis quis. Phasellus cursus, tortor a
      placerat accumsan, nunc purus mollis nibh, ac rutrum urna libero blandit
      arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Integer sed aliquet purus. Suspendisse elit massa, pharetra non eros sed,
      condimentum maximus enim. Curabitur massa odio, mattis et mattis sit amet,
      commodo a metus. Nullam lacinia accumsan sapien, pharetra rutrum ante
      dapibus quis. Suspendisse lobortis arcu at augue tincidunt tempor.
    </Paragraph>
    <Button>Umów wizytę</Button>
    <Image />
  </div>
);

export default style(Offer);
