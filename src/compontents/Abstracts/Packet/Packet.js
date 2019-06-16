import React from "react";
import style, { Title, List, PacketButton } from "./packetStyles";

const Packet = ({ className, packet }) => {
  const { title, offers } = packet;
  return (
    <div data-aos="flip-right" className={className}>
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
