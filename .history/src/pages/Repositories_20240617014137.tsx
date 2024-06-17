import React from "react";
import { useLocation } from "react-router-dom";
import Container from "src/components/Container";
import TableComponent from "src/components/table/TableComponent";
import columns from "src/components/table/columnHelpers";

const Repositories = () => {
  const { state } = useLocation();
  const { loading, error, data } = state;
  // console.log(state);

  if (error !== undefined) {
    return <div>Error occured in loading repositories</div>;
  } else if (loading) {
    return <div>Repositories are loading....</div>;
  } else if (data === undefined || data.length === 0) {
    return <div>There are no repositories to view at the moment</div>;
  }

  console.log(state);
  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={<TableComponent data={[...data]} columns={columns} />}
    />
  );
};

export default Repositories;
