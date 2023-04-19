import Layout from "@/components/Layout";
import TablaGrupo from "@/components/TablaGrupo";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home({ responseMatches }) {
  const [teams, setTeams] = useState();
  const [groups, setGroups] = useState();

  // const getGroups = responseMatches.data.map((g) => g.group);
  // console.log(getGroups);
  const { data } = responseMatches;
  console.log(data);
  console.log(data);
  //console.log(responseMatches.data);
  useEffect(() => {}, []);

  return <>test</>;
}

//reglas de next , llamar api del lado servidor
export const getServerSideProps = async (context) => {
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
