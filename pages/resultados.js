import CardResultados from "@/components/CardResultados";
import Layout from "@/components/Layout";
import React from "react";

const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const resultados = ({ responseMatches }) => {
  const { data } = responseMatches;

  return (
    <Layout>
      <div className="container container-resultados">
        {data.map((groupResults) => (
          <CardResultados groupResults={groupResults} />
        ))}
      </div>
    </Layout>
  );
};

export default resultados;

export const getServerSideProps = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmMjQ4OTRkZjc2OTcxNzU2NjE1ZjUiLCJpYXQiOjE2ODE4NjAxOTksImV4cCI6MTY4MTk0NjU5OX0.aG-X_JFkAwVwsi-w6q-eesqTy9v7f1AJg8lf-14wI2s";
  const headers = {
    Authorization: "Bearer " + token,
  };
  const res = await fetch("http://api.cup2022.ir/api/v1/match", {
    headers,
  });
  const responseMatches = await res.json();

  return {
    props: {
      responseMatches: responseMatches,
    },
  };
};
