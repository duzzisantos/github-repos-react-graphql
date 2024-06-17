import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumbProps {
  start: string;
  repositories: string;
  owner: { user: string; repositoryName: string };
}
const BreadCrumbs = ({ start, repositories, owner }: BreadCrumbProps) => {
  const {pathname} = useLocation()
  return <div>
     {pathname.includes(start) || pathname === '/' ? null : pathname.includes(repositories) ? <React.Fragment><Link to={`/${repositories}`}>{repositories}</Link></React.Fragment>}
  </div>;
};

export default BreadCrumbs;
