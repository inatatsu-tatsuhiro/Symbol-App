import React from "react";

interface Props {
  page: React.ReactNode;
  title: string;
}

const Layout: React.VFC<Props> = ({ page, title }) => {
  return <div>{page}</div>;
};

export default Layout;
