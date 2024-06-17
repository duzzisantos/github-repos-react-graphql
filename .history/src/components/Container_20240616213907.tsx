import React from "react";

interface ContainerProps {
  pageTitle: string;
  pageSubTitle: string;
  children: any;
}

const Container = ({ pageTitle, pageSubTitle, children }: ContainerProps) => {
  return (
    <main className="container">
      <section className="container">
        <h1>{pageTitle}</h1>
        <hr />
        <h2>{pageSubTitle}</h2>
        {children}
      </section>
    </main>
  );
};

export default Container;
