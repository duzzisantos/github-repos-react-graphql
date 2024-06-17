import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//We need to specify the types of data we would be utilizing as state
interface PayloadProps {}
const Form = () => {
  const [apiToken, setApiToken] = useState("");
  const [apiPayLoad, setApiPayload] = useState<PayloadProps>([]);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setApiToken(e.target.value);
  };

  const handleSubmit = (): void => {
    //We make the GraphQL API call here

    setApiPayload([]);
    navigate("/repositories", { state: apiPayLoad });
  };

  return (
    <form>
      <div className="user-tip">
        Tip: You need to enter API token carefully. Copy it from your source and
        paste from clipboard.
      </div>

      <div className="form-group">
        <label htmlFor="apiToken">Enter API Token</label>
        <input
          type="text"
          name="apiToken"
          value={apiToken}
          onChange={handleChange}
        />
        <button className="primary-btn" onClick={handleSubmit}>
          Start Browsing
        </button>
      </div>
    </form>
  );
};

export default Form;
