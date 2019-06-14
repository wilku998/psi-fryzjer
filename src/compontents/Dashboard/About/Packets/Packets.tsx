import * as React from "react";

import packetsData, { PacketI } from "../../../../data/packets";
import style, { Title } from "./packetsStyles";
import Packet from "../../../Abstracts/Packet/Packet";

interface propsI {
  className: string;
}

const Packets = ({ className }: propsI) => (
  <section className={className}>
    <Title>Pakiety</Title>
    {packetsData.map((packet: PacketI) => (
      <Packet key={packet.title} packet={packet} />
    ))}
  </section>
);

export default style(Packets);
