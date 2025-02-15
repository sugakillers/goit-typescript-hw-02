

import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos = [], isOpen }) => {
  return (
    <ul className={css.imgList}>
      {photos.length > 0 ? (
        photos.map((photo) => <ImageCard key={photo.id} photo={photo} isOpen={isOpen} />)
      ) : (
        <p className={css.noResults}>Нет изображений для отображения</p>
      )}
    </ul>
  );
};

export default ImageGallery;
