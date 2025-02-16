export interface IImageModalProps {
    modal: boolean;
    modalClose: () => void;
    selectedImage: {
      urls: {
        regular: string;
      };
      alt_description: string;
      likes: number;
    };
  }