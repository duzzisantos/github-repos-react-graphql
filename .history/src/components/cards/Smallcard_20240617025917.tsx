import React from "react";

interface Props {
  body: string | JSX.Element | number;
  header: string;
}
const SmallCard = ({ body, header }: Props) => {
  return (
    <div className="small-card">
      <h2 className="card-header">{header}</h2>
      <div>{body}</div>
    </div>
  );
};
export default SmallCard;
