import Layout from "@/components/Layout";
import TablaGrupo from "@/components/TablaGrupo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home({ responseMatches }) {
  return (
    <Layout>
      <div className="container">
        <h1>Bienvenido a WorldCupAPI</h1>
        <ul>
          <li>
            <Link href="">Ver Grupos</Link>
          </li>
          <li>
            <Link href="">Resultados Completos</Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
