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
  stargazerCcount: number;
  forks_count: number;
  open_issues_count: number;
  issues_url: string;
  git_url: string;
  license: string;
  updated_at: string;
  created_at: string;
}

const columnHelper = createColumnHelper<ViewRepositories>;

const columns = [
  columnHelper().accessor("id", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("owner", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("visibility", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),

  columnHelper().accessor("stargazers_count", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("forks_count", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("open_issues_count", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("issues_url", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("git_url", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("license", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("created_at", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper().accessor("updated_at", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

export default columns;
