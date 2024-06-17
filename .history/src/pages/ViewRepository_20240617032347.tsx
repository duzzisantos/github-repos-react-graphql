import React from "react";
import Container from "src/components/Container";
import { useLocation } from "react-router-dom";
import Card from "src/components/cards/Cards";

interface RepoProps {
  owner: string;
  repositoryName: string;
}
const ViewRepository = ({ owner, repositoryName }: RepoProps) => {
  const { state: data } = useLocation();

  return (
    <Container
      pageSubTitle={repositoryName}
      children={
        <div className="display-items">
          <h3>{owner}</h3>
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
