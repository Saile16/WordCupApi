import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles["container-header"]}>
      <div className={styles.header}>
        <Link href="/">
          <Image
            width={200}
            height={100}
            src="/img/cup.jpg"
            alt="Imagen logo"
          />
        </Link>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/grupos">Grupos</Link>
          <Link href="/resultados">Resultados</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
