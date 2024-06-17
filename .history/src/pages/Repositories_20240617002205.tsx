import React from "react";
import { useLocation } from "react-router-dom";
import Container from "src/components/Container";
import TableComponent from "src/components/table/TableComponent";
import columns from "src/components/table/columnHelpers";

const Repositories = () => {
  const { state } = useLocation();

  if (state.error) {
    return <div>Error occured in loading repositories</div>;
  } else if (state.loading) {
    return <div>Repositories are loading....</div>;
  } else if (state.data === undefined || state.data.length < 1) {
    return <div>There are no repositories to view at the moment</div>;
  }

  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={
        <TableComponent
          data={[...state.data.viewer.repositories.nodes]}
          columns={columns}
        />
      }
    />
  );
};

export default Repositories;
