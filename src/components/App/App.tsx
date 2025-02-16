import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { fetchPhotos } from "../../ApiService/photos";
import { IAppState, IImage, ISelectImg, IApiResponse } from "./App.types";

const App: React.FC = () => {
  const [page, setPage] = useState<IAppState>({
    currentPage: 1,
    totalPages: 0,
  });
  const [photos, setPhotos] = useState<IImage[]>([]);
  const [param, setParam] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectImg, setSelectImg] = useState<ISelectImg>({
    urls: { regular: "" },
    alt_description: "",
    likes: 0,
  });

  const onSubmit = (query: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPhotos([]);
    setPage({ currentPage: 1, totalPages: 0 });
    setParam(query);
  };

  const onLoadMore = () => {
    setPage((prevPage) => ({
      ...prevPage,
      currentPage: prevPage.currentPage + 1,
    }));
  };

  const modalOpen = (imgData: IImage) => {
    setModalIsOpen(true);
    setSelectImg({
      urls: imgData.urls,
      alt_description: imgData.alt_description ?? "No description available",
      likes: imgData.likes,
    });
  };

  const modalClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!param) return;
    setLoader(true);

    async function getSearchData() {
      try {
        const data: IApiResponse = await fetchPhotos(param, page.currentPage);

        setPage((prevPage) => ({
          ...prevPage,
          totalPages: data.total_pages,
        }));

        setPhotos((prevPhotos) =>
          page.currentPage === 1
            ? data.results
            : [...prevPhotos, ...data.results]
        );
      } catch (error) {
        setError("An error occurred while fetching photos.");
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
        window.scrollBy({
          top: scrollValue,
          behavior: "smooth",
        });
      }, 100);
      return () => clearTimeout(scrollTimeout);
    }
  }, [photos, page.currentPage]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <ImageGallery data={photos} isOpen={modalOpen} />
      )}
      {loader && <Loader />}
      {page.totalPages && page.totalPages > page.currentPage && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
      <ImageModal
        modal={modalIsOpen}
        modalClose={modalClose}
        selectedImage={selectImg}
      />
    </>
  );
};

export default App;