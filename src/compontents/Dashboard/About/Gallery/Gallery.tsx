import * as React from "react";
import style, { Image } from "./galleryStyles";

interface propsI {
  className: string;
};

const Galerry = ({ className }: propsI) => (
  <section className={className}>
    <Image src="./gallery-1.jpg" />
    <Image src="./gallery-2.jpg" />
    <Image src="./gallery-3.jpg" />
    <Image src="./gallery-4.jpg" />
    <Image src="./gallery-5.jpg" />
    <Image src="./gallery-6.jpg" />    
  </section>
);

export default style(Galerry);
