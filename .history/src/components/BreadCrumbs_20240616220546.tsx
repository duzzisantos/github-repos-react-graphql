import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumbProps {
  start: string;
  repositories: string;
  user: string;
  repositoryName: string;
}

const BreadCrumbs = ({ start, repositories, owner }: BreadCrumbProps) => {
  const { pathname } = useLocation();
  return (
    <div className="bread-crumbs">
      {pathname.includes(start) || pathname === "/" ? null : pathname.includes(
          repositories
        ) ? (
        <Link to={`/${start}`}>{start}</Link>
      ) : pathname.includes(owner.user) ||
        pathname.includes(owner.repositoryName) ? (
        <React.Fragment>
          <Link to={`/${start}`}>{start.toLocaleUpperCase()}</Link>
          {"&leftarr;"}
          <Link to={`${repositories}`}>{}</Link>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
