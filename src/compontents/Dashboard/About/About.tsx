import * as React from "react";
import style, { Content } from "./aboutStyles";
import Offer from './Offer/Offer';
import Packets from './Packets/Packets';
import Salon from './Salon/Salon';
import Gallery from './Gallery/Gallery';

const About = ({ className }) => (
  <main className={className}>
    <Content>
      <Offer />
      <Packets />
      <Salon />
      <Gallery />
    </Content>
  </main>
);

export default style(About);
