import React from "react";

import Container from "src/components/Container";
import Form from "src/components/Form";

const StartPage = () => {
  return (
    <Container
      pageTitle="GitHub Issues Tracker"
      pageSubTitle="Start viewing issues accross repositories"
      children={<Form />}
    />
  );
};

export default StartPage;
