import CardResultados from "@/components/CardResultados";
import Layout from "@/components/Layout";
import React from "react";
import { motion } from "framer-motion";
const GROUPS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "R16",
  "QR",
  "semi",
  "3RD",
  "FIN",
];
const resultados = ({ responseMatches }) => {
  const { data } = responseMatches;
  const gruposOrdenados = data.sort((a, b) => {
    return GROUPS.indexOf(a.group) - GROUPS.indexOf(b.group);
  });

  return (
    <Layout>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.9 }}
      >
        <div className="container container-resultados">
          {gruposOrdenados.map((groupResults) => (
            <CardResultados groupResults={groupResults} />
          ))}
        </div>
      </motion.div>
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
