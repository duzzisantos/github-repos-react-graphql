import { createColumnHelper } from "@tanstack/react-table";

enum VisibilityOptions {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

interface ViewRepositories {
  id: any;
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
  columnHelper().accessor("id", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    enableColumnFilter: true,
    enableSorting: true,
  }),
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
  }),
  columnHelper().accessor("issues", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper().accessor("url", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("licenseInfo", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("createdAt", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("updatedAt", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

export default columns;
