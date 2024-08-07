import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_REPOSITORIES } from "src/api/queryhelper";
//We need to specify the types of data we would be utilizing as state

const Form = () => {
  const [apiToken, setApiToken] = useState("");
  const [apiPayLoad, setApiPayload] = useState([]);
  const [getRepositories, { loading, error, data }] =
    useLazyQuery(GET_ALL_REPOSITORIES);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setApiToken(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("authToken", apiToken);

    //We make the GraphQL API call here
    getRepositories()
      .then((res: any) => {
        console.log(res.data);
        setApiPayload(res.data.viewer.repositories.nodes);
      })
      .catch((err) => {
        console.warn(err?.message);
      });
  };

  if (data) {
    navigate("/repositories", {
      state: {
        //this is the result we want to consume as we navigate to the /repositories route
        data: data.viewer.repositories.nodes,
        error: error,
        loading: loading,
        apiPayLoad,
      },
    });
  }

  return (
    <form>
      <div className="user-tip">
        <strong> Tip:</strong> You need to enter API token carefully. Copy it
        from your source and paste from clipboard.
      </div>

      <div className="form-group">
        <label htmlFor="apiToken">Enter API Token</label>
        <input
          type="text"
          name="apiToken"
          id="apiToken"
          value={apiToken}
          onChange={handleChange}
        />
        <button className="primary-btn" type="button" onClick={handleSubmit}>
          Start Browsing
        </button>

        <div className="banner-info">
          <strong>{loading ? "Redirecting...." : data && "Success"}</strong>
        </div>
        <div className="banner-danger">
          <strong>{error && error.message}</strong>
        </div>
      </div>
      <small className="form-text" id="info">
        <a
          className="read-docs"
          title="Read short documentation"
          href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
        >
          Learn how to generate API token on GitHub
        </a>
      </small>
    </form>
  );
};

export default Form;
