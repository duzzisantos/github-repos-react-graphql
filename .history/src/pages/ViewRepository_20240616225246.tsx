import React from "react";
import Container from "src/components/Container";
import TableComponent from "src/components/table/TableComponent";
import columns from "src/components/table/columnHelpers";

const ViewRepository = () => {
  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={<TableComponent data={[]} columns={columns} />}
    />
  );
};

export default ViewRepository;
