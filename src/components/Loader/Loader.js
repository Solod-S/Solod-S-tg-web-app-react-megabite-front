import React from "react";
import { RotatingSquare } from "react-loader-spinner";
import { LoaderBox } from "./Loader.styled";

function Loader() {
  return (
    <LoaderBox>
      <RotatingSquare
        height="90"
        width="90"
        color="#0088C7"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="Loader"
      />
    </LoaderBox>
  );
}

export default Loader;
