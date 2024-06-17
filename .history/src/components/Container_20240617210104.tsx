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
        <h2> {pageSubTitle}</h2>
        <h3>{repositoryOwner}</h3>
        {children}
      </section>
    </main>
  );
};

export default Container;
