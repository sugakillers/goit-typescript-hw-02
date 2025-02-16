export interface IImage {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string | null;
    likes: number;
  }
  
  export interface IImageCardProps {
    cardData: IImage;
    isOpen: (imgData: IImage) => void;
  }