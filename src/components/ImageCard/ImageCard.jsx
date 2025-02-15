import css from './ImageCard.module.css';

const ImageCard = ({ photo, isOpen }) => {
  return (
    <li className={css.imgCard} onClick={() => isOpen(photo)}>
      <img className={css.img} src={photo.urls.small} alt={photo.alt_description} />
    </li>
  );
};

export default ImageCard;
