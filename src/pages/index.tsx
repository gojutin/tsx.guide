import React from "react";

import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  return <Redirect to={useBaseUrl("/introduction/welcome")} />;
}

export default Home;
