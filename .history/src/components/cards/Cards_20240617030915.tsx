import React from "react";

interface Props {
  body: string | JSX.Element | number;
  header: string;
  cardStyle: string;
}
const Card = ({ body, header, cardStyle }: Props) => {
  return (
    <div className={cardStyle}>
      <h3 className="card-header">{header}</h3>
      <div>{body}</div>
    </div>
  );
};
export default Card;
