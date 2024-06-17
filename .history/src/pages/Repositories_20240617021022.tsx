import React from "react";
import { useLocation } from "react-router-dom";
import Container from "src/components/Container";
import TableComponent from "src/components/table/TableComponent";
import columns from "src/components/table/columnHelpers";
import { formatDate } from "src/utilities/funtions";

const Repositories = () => {
  const { state } = useLocation();
  const { loading, error, data } = state;

  if (error !== undefined) {
    return <div>Error occured in loading repositories</div>;
  } else if (loading) {
    return <div>Repositories are loading....</div>;
  } else if (data === undefined || data.length === 0) {
    return <div>There are no repositories to view at the moment</div>;
  }

  const modifiedData = () => {
    const output: any = [];
    data.forEach((item: any) => {
      const {
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
      children={<TableComponent data={modifiedData()} columns={columns} />}
    />
  );
};

export default Repositories;
