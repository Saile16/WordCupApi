import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import CardResultados from "@/components/CardResultados";
import { motion } from "framer-motion";
const GrupoResultado = ({ grupoSeleccionado }) => {
  const router = useRouter();
  // console.log(grupoSeleccionado);
  return (
    <Layout>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.9 }}
      >
        <div className="container container-resultados">
          {grupoSeleccionado.map((groupResults) => (
            <CardResultados
              key={groupResults._id}
              groupResults={groupResults}
            />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default GrupoResultado;

export const getServerSideProps = async ({ query: { grupo } }) => {
  console.log(grupo);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmMjQ4OTRkZjc2OTcxNzU2NjE1ZjUiLCJpYXQiOjE2ODE4NjAxOTksImV4cCI6MTY4MTk0NjU5OX0.aG-X_JFkAwVwsi-w6q-eesqTy9v7f1AJg8lf-14wI2s";
  const headers = {
    Authorization: "Bearer " + token,
  };
  const res = await fetch(`http://api.cup2022.ir/api/v1/match`, {
    headers,
  });
  const { data } = await res.json();
  const grupoSeleccionado = data.filter((s) => s.group == `${grupo}`);
  return {
    props: {
      grupoSeleccionado: grupoSeleccionado,
    },
  };
};
