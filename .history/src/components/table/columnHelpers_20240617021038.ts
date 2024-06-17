import { createColumnHelper } from "@tanstack/react-table";

enum VisibilityOptions {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

//Whatever interface defined for the table column helpers must match the data
//from the API. In this case we modify the object keys in anay case that they
//differ from what was defined here

interface ViewRepositories {
  name: string;
  owner: string;
  visibility: VisibilityOptions;
  stargazerCount: number;
  forkCount: number;
  issues: number;
  url: string;
  licenseInfo: string;
  updatedAt: string;
  createdAt: string;
}

const columnHelper = createColumnHelper<ViewRepositories>;

const columns = [
  columnHelper().accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
  columnHelper().accessor("owner", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
  columnHelper().accessor("visibility", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),

  columnHelper().accessor("stargazerCount", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
  columnHelper().accessor("forkCount", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
  columnHelper().accessor("issues", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),

  columnHelper().accessor("url", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("licenseInfo", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
  columnHelper().accessor("createdAt", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
  columnHelper().accessor("updatedAt", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
];

export default columns;
