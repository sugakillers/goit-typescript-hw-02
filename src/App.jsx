import { useState, useEffect } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import { catchPhoto } from './ApiService/photos';

function App() {
  const [param, setParam] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState({ currentPage: 1, totalPages: 1 });
  const [photos, setPhotos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectImg, setSelectImg] = useState({ urls: { regular: '' } });

  const onSubmit = (query) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPhotos([]);
    setPage({ currentPage: 1, totalPages: 1 });
    setParam(query);
  };

  const onLoadMore = () => {
    setPage((prevPage) => ({
      ...prevPage,
      currentPage: prevPage.currentPage + 1,
    }));
  };

  const openModal = (imgData) => {
    const { urls, alt_description, likes } = imgData;
    setModalIsOpen(true);
    setSelectImg({ urls, alt_description, likes });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!param) return;
    setLoader(true);

    async function getSearchData() {
      try {
        const data = await catchPhoto(param, page.currentPage);
        setPage((prevPage) => ({
          ...prevPage,
          totalPages: data.total_pages,
        }));

        setPhotos((prevPhotos) =>
          page.currentPage === 1 ? data.results : [...prevPhotos, ...data.results]
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    }
    getSearchData();
  }, [param, page.currentPage]);

  useEffect(() => {
    if (page.currentPage > 1 && photos.length > 0) {
      const scrollValue = window.innerHeight / 1.5;
      const scrollTimeout = setTimeout(() => {
        window.scrollBy({ top: scrollValue, behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(scrollTimeout);
    }
  }, [photos, page.currentPage]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error !== null ? <ErrorMessage error={error} /> : <ImageGallery data={photos} onOpen={openModal} />}
      {loader && <Loader />}
      {page.totalPages > page.currentPage && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <ImageModal isOpen={modalIsOpen} modalClose={closeModal} selectedImage={selectImg} />
    </>
  );
}
export default App;

