import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardResultados = ({ groupResults }) => {
  console.log(groupResults);
  return (
    <div className="card">
      <>
        <Link href={`grupos/${groupResults.group}`}>
          <div className="card-group">Grupo: {groupResults.group} </div>

          <div className="card-img">
            <Image
              src={groupResults.home_flag}
              width={95}
              height={55}
              alt="country flag"
            />{" "}
            vs
            <Image
              src={groupResults.away_flag}
              width={95}
              height={55}
              alt="country flag"
            />
          </div>
          <div className="card-names">
            {groupResults.home_team_en} vs {groupResults.away_team_en}
          </div>
          <p>
            <b>Horario Qatar(UTC +3):</b>
            <span className="card-span">{groupResults.local_date}</span>
          </p>
          <p>
            <b>Estado:</b>
            {groupResults.finished ? "Finalizado" : "Jugando"}
          </p>
          <p>
            <b>Marcador:</b> {groupResults.home_score} -{" "}
            {groupResults.away_score}{" "}
          </p>
          <div>
            <b>Goleadores:</b>{" "}
            {groupResults.home_scorers.map((h) => (h ? h : "-"))}
          </div>
        </Link>
      </>
    </div>
  );
};

export default CardResultados;
