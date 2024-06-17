import React from "react";

interface ContainerProps {
  pageTitle: string;
  pageSubTitle: string;
}

const Container = ({ pageTitle, pageSubTitle }: ContainerProps) => {
  return (
    <section className="container">
      <h1>{pageTitle}</h1>
      <h2>{pageSubTitle}</h2>
    </section>
  );
};

export default Container;
