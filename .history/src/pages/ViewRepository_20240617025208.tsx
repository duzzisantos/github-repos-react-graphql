import React from "react";
import Container from "src/components/Container";
import { useLocation } from "react-router-dom";
const ViewRepository = () => {
  const { state } = useLocation();

  console.log(state);
  return (
    <Container
      pageSubTitle="Start viewing issues accross repositories"
      children={"LOL"}
    />
  );
};

export default ViewRepository;
