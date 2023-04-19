import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <Layout>
      <div className={`container ${styles["home-container"]}`}>
        <h1 className="">Bienvenido a WorldCupAPI</h1>
        <ul className={styles["container-list"]}>
          <li className={styles["item-list"]}>
            <Link className={styles.item} href="/grupos">
              Ver Grupos
            </Link>
          </li>
          <li className={styles["item-list"]}>
            <Link className={styles.item} href="/resultados">
              Resultados Completos
            </Link>
          </li>
          {/* <li className={styles["item-list"]}>
            <Link href=""></Link>
          </li> */}
        </ul>
      </div>
    </Layout>
  );
}
