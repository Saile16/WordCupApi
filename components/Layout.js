import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>WordlCup Test {pagina}</title>
        <meta name="description" content="Sitio web prueba tecnica" />
      </Head>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
