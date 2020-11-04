import React, { useState } from "react";

const ExternalApi = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>External API</h1>
      <p>
        You use will use a button to call an external API using an access token,
        and the API will validate it using the API's audience value.
        <br />
        <strong>This route should be protected</strong>.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button type="button" className="btn btn-primary">
          Get Public Message
        </button>
        <button type="button" className="btn btn-primary">
          Get Protected Message
        </button>
      </div>

      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">
                {JSON.stringify(message, null, 2)}
              </code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;
