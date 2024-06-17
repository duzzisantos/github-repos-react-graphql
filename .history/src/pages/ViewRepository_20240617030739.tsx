import React from "react";
import Container from "src/components/Container";
import { useLocation } from "react-router-dom";
import Card from "src/components/cards/Cards";
const ViewRepository = () => {
  const { state: data } = useLocation();

  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={
        <div className="display-items">
          {Object.entries(data).map(([key, value]: any) => (
            <Card header={key} body={value} cardStyle="small-card" />
          ))}
        </div>
      }
    />
  );
};

export default ViewRepository;
