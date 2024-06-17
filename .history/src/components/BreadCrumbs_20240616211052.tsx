import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumbProps {
  start: string;
  repositories: string;
  owner: { user: string; repositoryName: string };
}
const BreadCrumbs = ({ start, repositories, owner }: BreadCrumbProps) => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname.includes(start) || pathname === "/" ? null : pathname.includes(
          repositories
        ) ? (
        <Link to={`/${start}`}>{start.toLocaleUpperCase()}</Link>
      ) : pathname.includes(owner.user) ||
        pathname.includes(owner.repositoryName) ? (
        <Link to={`${owner.user}/${owner.repositoryName}`}></Link>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
