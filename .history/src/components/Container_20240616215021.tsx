import React from "react";

interface ContainerProps {
  pageSubTitle: string;
  children: any;
}

const Container = ({ pageSubTitle, children }: ContainerProps) => {
  return (
    <main className="container">
      <section className="container">
        <hr />
        <h2>{pageSubTitle}</h2>
        {children}
      </section>
    </main>
  );
};

export default Container;
