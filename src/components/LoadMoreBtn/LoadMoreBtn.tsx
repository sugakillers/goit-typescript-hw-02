import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { ILoadMoreBtnProps } from "./LoadMoreBtn.types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({ onLoadMore }) => {
  const handleClick = () => {
    onLoadMore();
  };

  return (
    <div className={css.loadBtnDiv}>
      <button className={css.loadBtn} type="button" onClick={handleClick}>
        Load more <FaArrowDown />
      </button>
    </div>
  );
};

export default LoadMoreBtn;