import React from "react";
import PropTypes from "prop-types";

import styleLoader, { LoaderContainer } from "./loaderStyles";

const Loading = ({ className }) => (
  <LoaderContainer>
    <div className={className}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </LoaderContainer>
);

Loading.propTypes = {
  className: PropTypes.string.isRequired
};

export default styleLoader(Loading);
