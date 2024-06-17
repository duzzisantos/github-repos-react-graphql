import React from "react";

interface BreadCrumbProps {
  currentLocation: string;
}

const BreadCrumbs = ({ currentLocation }: BreadCrumbProps) => {
  return (
    <div className="bread-crumbs">
      {currentLocation === "/" ? null : currentLocation === "/repositories" ? (
        <a href="/">{" < "} Use new token</a>
      ) : currentLocation === "/owner/repositoryName" ? (
        <React.Fragment>
          <a href="/"> {" < "}Use new token</a>

          <a href="/"> {" < "}Repositories</a>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;