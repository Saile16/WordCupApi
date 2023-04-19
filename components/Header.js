import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="container-header">
      <div className="header">
        <Link href="/">
          <Image
            width={200}
            height={100}
            src="/img/cup.jpg"
            alt="Imagen logo"
          />
        </Link>
        <nav className="navegacion">
          <Link href="/">Inicio</Link>
          <Link href="/">Grupos</Link>
          <Link href="/resultados">Resultados</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
