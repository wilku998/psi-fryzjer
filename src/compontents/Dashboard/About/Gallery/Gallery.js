import React from "react";
import style, { styleImage } from "./galleryStyles";

const Image = styleImage(({className, imageUrl}) => (
  <img className={`${className} b-lazy`} data-src={imageUrl} />
));

const Galerry = ({ className }) => (
  <section className={className}>
    <Image imageUrl="./gallery-1-converted.jpg" />
    <Image imageUrl="./gallery-2-converted.jpg" />
    <Image imageUrl="./gallery-3-converted.jpg" />
    <Image imageUrl="./gallery-4-converted.jpg" />
    <Image imageUrl="./gallery-5-converted.jpg" />
    <Image imageUrl="./gallery-6-converted.jpg" />    
  </section>
);

export default style(Galerry);
