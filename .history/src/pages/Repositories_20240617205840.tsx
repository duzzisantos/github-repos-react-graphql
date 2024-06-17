import React from "react";
import { useLocation } from "react-router-dom";
import Container from "src/components/Container";
import TableComponent from "src/components/table/TableComponent";
import columns from "src/components/table/columnHelpers";
import { formatDate } from "src/utilities/funtions";

interface GitProperties {
  id: string;
  createdAt: string;
  forkCount: number;
  name: string;
  stargazerCount: number;
  updatedAt: string;
  url: string;
  visibility: string;
  issues: any;
  licenseInfo: any;
  owner: any;
}
const Repositories = () => {
  const { state } = useLocation();
  const { loading, error, data } = state;

  //Handle error prior to consuming the data
  if (error !== undefined) {
    return <div>Error occured in loading repositories</div>;
  } else if (loading) {
    return <div>Repositories are loading....</div>;
  } else if (data === undefined || data.length === 0) {
    return <div>There are no repositories to view at the moment</div>;
  }

  const modifiedData = () => {
    const output: GitProperties[] = [];
    data.forEach((item: any) => {
      const {
        id,
        createdAt,
        forkCount,
        name,
        stargazerCount,
        updatedAt,
        url,
        visibility,
        issues,
        licenseInfo,
        owner,
      } = item;

      output.push({
        id,
        forkCount,
        name,
        stargazerCount,
        url,
        visibility,
        issues: issues.totalCount,
        licenseInfo: licenseInfo?.name,
        owner: owner.login,
        updatedAt: formatDate(updatedAt),
        createdAt: formatDate(createdAt),
      });
    });
    return output;
  };
  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={
        <div className="container">
          <a
            href="/"
            className="nav-link"
            title="Navigate to start page to use a new token"
          >
            &larr; Use another token on start page
          </a>
          <div className="content-display">
            <TableComponent data={modifiedData()} columns={columns} />
          </div>
        </div>
      }
    />
  );
};

export default Repositories;
