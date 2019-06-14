import * as React from "react";
import style, { Content } from "./aboutStyles";
import Offer from './Offer/Offer';
import Packets from './Packets/Packets';
import Salon from './Salon/Salon';

const About = ({ className }) => (
  <main className={className}>
    <Content>
      <Offer />
      <Packets />
      <Salon />
    </Content>
  </main>
);

export default style(About);
