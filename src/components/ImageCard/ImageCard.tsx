import React from "react";
import { IImageCardProps } from "./ImageCard.types";
import css from "./ImageCard.module.css";

const ImageCard: React.FC<IImageCardProps> = ({ cardData, isOpen }) => {
  const altText = cardData.alt_description || "Image description not available";

  return (
    <li className={css.imgCard} onClick={() => isOpen(cardData)}>
      <img className={css.img} src={cardData.urls.small} alt={altText} />
    </li>
  );
};

export default ImageCard;