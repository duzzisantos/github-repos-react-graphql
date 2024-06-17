import React from "react";
import Container from "src/components/Container";
import { useLocation } from "react-router-dom";
import Card from "src/components/cards/Cards";

const ViewRepository = () => {
  const { state: data } = useLocation();

  return (
    <Container
      pageSubTitle={data.name}
      children={
        <div className="display-items">
          <h3>{data.owner}</h3>
          {Object.entries(data).map(([key, value]: any, index: number) => (
            <Card
              key={index}
              header={key}
              body={value}
              cardStyle="small-card"
            />
          ))}
        </div>
      }
    />
  );
};

export default ViewRepository;
