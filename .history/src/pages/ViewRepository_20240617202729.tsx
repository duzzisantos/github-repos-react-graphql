import React from "react";
import Container from "src/components/Container";
import { useLocation } from "react-router-dom";
import Card from "src/components/cards/Cards";

const ViewRepository = () => {
  const { state: data } = useLocation();

  return (
    <Container
      pageSubTitle={data.name}
      repositoryOwner={data.owner}
      children={
        <div>
          <a href="/">{" << "} Use another token</a>
          <a href="/repositories">{" << "} Repositories</a>
          {/* {Object.entries(data).map(([key, value]: any, index: number) => (
            <Card
              key={index}
              header={key.toUpperCase()
              body={value}
              cardStyle="small-card"
            />
          ))} */}

          <div className="display-items">
            <table>
              <thead>
                <tr>
                  <th>Respository propery</th>
                  <th>Respository value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(data).map(
                  ([key, value]: any, index: number) => (
                    <tr key={index}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      }
    />
  );
};

export default ViewRepository;
