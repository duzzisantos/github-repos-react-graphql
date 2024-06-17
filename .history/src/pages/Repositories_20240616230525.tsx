import React from "react";
import Container from "src/components/Container";
import TableComponent from "src/components/table/TableComponent";
import columns from "src/components/table/columnHelpers";

enum VisibilityOptions {
  Public = "public",
  Private = "private",
}

interface ViewRepositories {
  id: any;
  name: string;
  owner: string;
  visibility: VisibilityOptions;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  issues_url: string;
  git_url: string;
  license: string;
  updated_at: string;
  created_at: string;
}

const Repositories = () => {
  const repositories: ViewRepositories[] = [
    {
      id: 1,
      name: "Repository One",
      owner: "owner1",
      visibility: VisibilityOptions.Public,
      stargazers_count: 100,
      forks_count: 20,
      open_issues_count: 5,
      issues_url: "https://api.github.com/repos/owner1/repo1/issues",
      git_url: "https://github.com/owner1/repo1.git",
      license: "MIT",
      updated_at: "2023-01-01T00:00:00Z",
      created_at: "2020-01-01T00:00:00Z",
    },
    {
      id: 2,
      name: "Repository Two",
      owner: "owner2",
      visibility: VisibilityOptions.Private,
      stargazers_count: 50,
      forks_count: 10,
      open_issues_count: 2,
      issues_url: "https://api.github.com/repos/owner2/repo2/issues",
      git_url: "https://github.com/owner2/repo2.git",
      license: "Apache-2.0",
      updated_at: "2023-02-01T00:00:00Z",
      created_at: "2020-02-01T00:00:00Z",
    },
    {
      id: 3,
      name: "Repository Three",
      owner: "owner3",
      visibility: VisibilityOptions.Public,
      stargazers_count: 200,
      forks_count: 30,
      open_issues_count: 10,
      issues_url: "https://api.github.com/repos/owner3/repo3/issues",
      git_url: "https://github.com/owner3/repo3.git",
      license: "GPL-3.0",
      updated_at: "2023-03-01T00:00:00Z",
      created_at: "2020-03-01T00:00:00Z",
    },
    {
      id: 4,
      name: "Repository Four",
      owner: "owner4",
      visibility: VisibilityOptions.Private,
      stargazers_count: 300,
      forks_count: 40,
      open_issues_count: 15,
      issues_url: "https://api.github.com/repos/owner4/repo4/issues",
      git_url: "https://github.com/owner4/repo4.git",
      license: "BSD-2-Clause",
      updated_at: "2023-04-01T00:00:00Z",
      created_at: "2020-04-01T00:00:00Z",
    },
    {
      id: 5,
      name: "Repository Five",
      owner: "owner5",
      visibility: VisibilityOptions.Public,
      stargazers_count: 400,
      forks_count: 50,
      open_issues_count: 20,
      issues_url: "https://api.github.com/repos/owner5/repo5/issues",
      git_url: "https://github.com/owner5/repo5.git",
      license: "MIT",
      updated_at: "2023-05-01T00:00:00Z",
      created_at: "2020-05-01T00:00:00Z",
    },
  ];
  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={<TableComponent data={[...repositories]} columns={columns} />}
    />
  );
};

export default Repositories;
