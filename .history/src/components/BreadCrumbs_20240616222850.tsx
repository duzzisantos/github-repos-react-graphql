import React from "react";
import { Link } from "react-router-dom";

interface BreadCrumbProps {
  currentLocation: string;
}

const BreadCrumbs = ({ currentLocation }: BreadCrumbProps) => {
  return (
    <div className="bread-crumbs">
      {currentLocation === "/" ? null : currentLocation === "/repositories" ? (
        <a href="/">Add new token</a>
      ) : currentLocation === "/owner/repositoryName" ? (
        <React.Fragment>
          <a href="/">Add new token</a>
          {"&leftarr;"}
          <a href="/">Repositories</a>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
