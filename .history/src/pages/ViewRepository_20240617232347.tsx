import React, { useEffect } from "react";
import Container from "src/components/Container";
import { useLocation, useNavigate } from "react-router-dom";

const ViewRepository = () => {
  const { state: data } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      event.preventDefault();

      navigate("/");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <Container
      pageSubTitle={data.name.toUpperCase()}
      repositoryOwner={data.owner.toUpperCase()}
      children={
        <div>
          <a href="/">&larr; Use another token</a>
          <div className="display-items view-details">
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
                        {typeof value === "string" &&
                        value?.startsWith("https://github") ? (
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
