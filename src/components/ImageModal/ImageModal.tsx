import React from "react";
import ReactModal from "react-modal";
import { SlLike } from "react-icons/sl";
import { IImageModalProps } from "./ImageModal.types";
import css from "./ImageModal.module.css";

const ImageModal: React.FC<IImageModalProps> = ({
  modal,
  modalClose,
  selectedImage,
}) => {
  const { urls, alt_description, likes } = selectedImage;

  return (
    <ReactModal
      isOpen={modal}
      onRequestClose={modalClose}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      ariaHideApp={false}
    >
      <img src={urls.regular} alt={alt_description} />
      <div className={css.imgDescription}>
        <p>
          <SlLike className={css.icon} size={24} />
          {likes}
        </p>
        <p>{alt_description}</p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;