import React, { StrictMode } from "react";
import { render } from "react-dom";

import Examples from "./examples";

const Demo = () => (
  <div>
    <h1>react-mentions-continued</h1>
    <p>
      <span role="img" aria-labelledby="yay!">
        🙌
      </span>
      &nbsp; Forked by the community from the lovely people at Signavio, docs
      and code on Github:{" "}
      <a href="https://github.com/jakehedman/react-mentions-continued">
        https://github.com/jakehedman/react-mentions-maintaned
      </a>{" "}
      (BSD license)
    </p>
    <StrictMode>
      <Examples />
    </StrictMode>
  </div>
);

render(<Demo />, document.querySelector("#demo"));
