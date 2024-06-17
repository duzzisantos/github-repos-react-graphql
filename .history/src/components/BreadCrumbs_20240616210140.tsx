import React from "react";
import { Link } from "react-router-dom";

interface BreadCrumbProps {
  start: string;
  repositories: string;
  owner: { user: string; repositoryName: string };
}
const BreadCrumbs = ({ start, repositories, owner }: BreadCrumbProps) => {
  return <div></div>;
};

export default BreadCrumbs;
