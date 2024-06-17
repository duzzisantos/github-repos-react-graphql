import React from "react";
import Container from "src/components/Container";
import { useLocation } from "react-router-dom";
import Card from "src/components/cards/Cards";

const ViewRepository = () => {
  const { state: data } = useLocation();

  return (
    <Container
      pageSubTitle={data.name}
      repositoryOwner={data.owner}
      children={
        <div className="display-items">
          <a href="/">{" << "} Use another token</a>
          <a href="/">{" << "} Repositories</a>
          {Object.entries(data).map(([key, value]: any, index: number) => (
            <Card
              key={index}
              header={key.toUpperCase()}
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
