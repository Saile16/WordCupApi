import React from "react";
import Layout from "@/components/Layout";
import TablaGrupo from "@/components/TablaGrupo";

const grupos = ({ responseMatches }) => {
  const { data } = responseMatches;
  return (
    <Layout>
      <div className="table-groups">
        <h1 className="container">
          Tabla de clasificaciones - Etapa de grupos
        </h1>
        {data.map((team) => (
          <TablaGrupo key={team._id} team={team} />
        ))}
      </div>
    </Layout>
  );
};

export default grupos;

//reglas de next , llamar api del lado servidor
export const getServerSideProps = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmMjQ4OTRkZjc2OTcxNzU2NjE1ZjUiLCJpYXQiOjE2ODE4NjAxOTksImV4cCI6MTY4MTk0NjU5OX0.aG-X_JFkAwVwsi-w6q-eesqTy9v7f1AJg8lf-14wI2s";
  const headers = {
    Authorization: "Bearer " + token,
  };
  const res = await fetch("http://api.cup2022.ir/api/v1/standings", {
    headers,
  });
  const responseMatches = await res.json();

  return {
    props: {
      responseMatches: responseMatches,
    },
  };
};
