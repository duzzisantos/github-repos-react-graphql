import React from "react";

const Form = () => {
  return (
    <form>
      <div className="user-tip">
        Tip: You need to enter API token carefully. Copy it from your source and
        paste from clipboard.
      </div>

      <div className="form-group">
        <label htmlFor="apiToken">Enter API Token</label>
      </div>
    </form>
  );
};

export default Form;
