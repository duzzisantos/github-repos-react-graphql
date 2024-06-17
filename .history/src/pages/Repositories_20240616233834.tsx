import React from "react";
import Container from "src/components/Container";
import TableComponent from "src/components/table/TableComponent";
import columns from "src/components/table/columnHelpers";
import { useQuery } from "@apollo/client";
import { GET_ALL_REPOSITORIES } from "src/api/queryhelper";

// enum VisibilityOptions {
//   Public = "public",
//   Private = "private",
// }

// interface ViewRepositories {
//   id: any;
//   name: string;
//   owner: string;
//   visibility: VisibilityOptions;
//   stargazers_count: number;
//   forks_count: number;
//   open_issues_count: number;
//   issues_url: string;
//   git_url: string;
//   license: string;
//   updated_at: string;
//   created_at: string;
// }

const Repositories = () => {
  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={<TableComponent data={[]} columns={columns} />}
    />
  );
};

export default Repositories;
