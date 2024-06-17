import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "src/components/Container";

const StartPage = () => {
  const [apiToken, setApiToken] = useState("");
  const navigate = useNavigate();

  return (
    <Container
      pageTitle="GitHub Issues Tracker"
      pageSubTitle="Start viewing issues accross repositories"
      children={null}
    ></Container>
  );
};
