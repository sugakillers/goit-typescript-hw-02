import React from "react";
import { RotatingTriangles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangles-loading"
      />
    </div>
  );
};

export default Loader;