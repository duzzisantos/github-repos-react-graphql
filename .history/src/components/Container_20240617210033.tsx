import React from "react";

interface ContainerProps {
  pageSubTitle: string;
  repositoryOwner?: string;
  children: any;
}

const Container = ({
  pageSubTitle,
  children,
  repositoryOwner,
}: ContainerProps) => {
  return (
    <main className="container">
      <section>
        <h2>Title: {pageSubTitle}</h2>
        <h3>Owner: {repositoryOwner}</h3>
        {children}
      </section>
    </main>
  );
};

export default Container;
