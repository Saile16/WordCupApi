import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/">Grupos</Link>
        <Link href="/">Resultados</Link>
      </nav>
    </header>
  );
};

export default Header;
