import React from "react";
import { Link } from "react-router-dom";

interface BreadCrumbProps {
  currentLocation: string;
}

const BreadCrumbs = ({ currentLocation }: BreadCrumbProps) => {
  return (
    <div className="bread-crumbs">
      {currentLocation === "/" ? null : currentLocation === "/repositories" ? (
        <Link to={`/}`}>Add new token</Link>
      ) : currentLocation === "/owner/repositoryName" ? (
        <React.Fragment>
          <Link to={`/`}>Add new token</Link>
          {"&leftarr;"}
          <Link to={`/repositories`}>Repositories</Link>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
