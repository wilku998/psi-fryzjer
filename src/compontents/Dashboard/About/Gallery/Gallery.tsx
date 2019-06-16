import * as React from "react";
import style, { Image } from "./galleryStyles";

interface propsI {
  className: string;
};

const Galerry = ({ className }: propsI) => (
  <section className={className}>
    <Image src="./gallery-1-converted.jpg" />
    <Image src="./gallery-2-converted.jpg" />
    <Image src="./gallery-3-converted.jpg" />
    <Image src="./gallery-4-converted.jpg" />
    <Image src="./gallery-5-converted.jpg" />
    <Image src="./gallery-6-converted.jpg" />    
  </section>
);

export default style(Galerry);
