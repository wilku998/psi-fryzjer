import React from "react";

import packetsData from "../../../../data/packets";
import style, { Title } from "./packetsStyles";
import Packet from "../../../Abstracts/Packet/Packet";

const Packets = ({ className }) => (
  <section className={className}>
    <Title>Pakiety</Title>
    {packetsData.map((packet) => (
      <Packet key={packet.title} packet={packet} />
    ))}
  </section>
);

export default style(Packets);
