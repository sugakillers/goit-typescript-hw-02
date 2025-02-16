import { IImage } from "../ImageCard/ImageCard.types";

export interface IImageGalleryProps {
  data: IImage[];
  isOpen: (imgData: IImage) => void;
}