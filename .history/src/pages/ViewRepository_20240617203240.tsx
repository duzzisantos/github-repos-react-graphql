import React from "react";
import Container from "src/components/Container";
import { useLocation } from "react-router-dom";

const ViewRepository = () => {
  const { state: data } = useLocation();

  return (
    <Container
      pageSubTitle={data.name.toUpperCase()}
      repositoryOwner={data.owner.toUpperCase()}
      children={
        <div>
          <a href="/">{" < "} Use another token</a>
          {"     "}
          <a href="/repositories">{" < "} Repositories</a>

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
                      <td>
                        <b>{key.toUpperCase()}</b>
                      </td>
                      <td>
                        {value?.includes("https://") ? (
                          <a href={`${value}`}>{value}</a>
                        ) : (
                          value
                        )}{" "}
                      </td>
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
