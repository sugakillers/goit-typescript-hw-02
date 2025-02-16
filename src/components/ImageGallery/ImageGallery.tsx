import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { IImageGalleryProps } from "./ImageGallery.types";
import css from "./ImageGallery.module.css";

const ImageGallery: React.FC<IImageGalleryProps> = ({ data, isOpen }) => {
  return (
    <ul className={css.imageList}>
      {data.map((card) => (
        <ImageCard key={card.id} cardData={card} isOpen={isOpen} />
      ))}
    </ul>
  );
};

export default ImageGallery;