import React, { useState } from "react";

const Form = () => {
  const [apiToken, setApiToken] = useState("");

  const handleChange = (e: any) => {
    setApiToken(e.target.value);
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
      </div>
    </form>
  );
};

export default Form;
