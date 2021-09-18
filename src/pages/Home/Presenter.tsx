import React from "react";

import config from "utils/config";

const Page: React.VFC = () => {
  return <div>Home Page　{config.SYMBOL_API_ENDPOINT}</div>;
};

export default Page;
