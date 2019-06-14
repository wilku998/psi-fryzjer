import * as React from "react";
import style, { Title, List, PacketButton } from "./packetStyles";

import { PacketI } from "../../../data/packets";
interface propsI {
  className: string;
  packet: PacketI;
}

const Packet = ({ className, packet }: propsI) => {
  const { title, offers } = packet;
  return (
    <div className={className}>
      <Title>{title}</Title>
      <List>
        {offers.map(e => (
          <li key={e}>{e}</li>
        ))}
      </List>
      <PacketButton>Zarezerwuj</PacketButton>
    </div>
  );
};

export default style(Packet);
