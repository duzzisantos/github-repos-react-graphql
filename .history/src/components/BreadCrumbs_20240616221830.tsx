import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumbProps {
  currentLocation: string;
}

const BreadCrumbs = ({ currentLocation }: BreadCrumbProps) => {
  return (
    <div className="bread-crumbs">
      {currentLocation === "/" ? null : currentLocation === "repositories" ? (
        <Link to={`/}`}>Add new token</Link>
      ) : currentLocation === "repositories" ? (
        <React.Fragment>
          <Link to={`/`}>Add new token</Link>
          {"&leftarr;"}
          <Link to={`/repositories`}>{}</Link>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
