import * as React from "react";
import style, { Content } from "./aboutStyles";
import Offer from './Offer/Offer';

const About = ({ className }) => (
  <section className={className}>
    <Content>
      <Offer />
    </Content>
  </section>
);

export default style(About);
