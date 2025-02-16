import React, { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TbSearch } from "react-icons/tb";
import { IconContext } from "react-icons";
import { ISearchBarProps } from "./SearchBar.types";
import css from "./SearchBar.module.css";
import { number } from "prop-types";

const SearchBar: React.FC<ISearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const value = form.elements.namedItem("search") as HTMLInputElement;

    if (value.value.trim()) {
      onSubmit(value.value.trim());
    } else {
      toast.custom(
        <div className={css.toast}>
          You need to enter the text to find images
        </div>
      );
    }

    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <IconContext.Provider
          value={{ color: "#55883B", size: "35", className: "submitIcon" }}
        >
          <button className={css.submitButton} type="submit">
            <TbSearch />
          </button>
        </IconContext.Provider>
        <input
          className={css.formInput}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search images"
        />
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;