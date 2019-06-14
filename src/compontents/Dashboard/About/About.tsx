import * as React from "react";
import style, { Content } from "./aboutStyles";
import Offer from './Offer/Offer';
import Packets from './Packets/Packets';

const About = ({ className }) => (
  <main className={className}>
    <Content>
      <Offer />
      <Packets />
    </Content>
  </main>
);

export default style(About);
