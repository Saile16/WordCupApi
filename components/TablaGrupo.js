import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/TablaGrupo.module.css";
const TablaGrupo = ({ team }) => {
  console.log(team);
  const { group } = team;
  // console.log(group);
  return (
    <div className="container">
      <div className="group-title">
        <h2 className="group">Grupo {group}</h2>
        <Link
          className="btnResultados"
          href={`/grupos/${group}`}
          onClick={() => console.log(team._id)}
        >
          Ver resultados
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Selección</th>
            <th>PJ</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>DG</th>
            <th>Pts</th>
          </tr>
        </thead>

        <tbody>
          {team.teams.map((e, i) => (
            <tr key={e.team_id}>
              <td>{i + 1}</td>

              <td className="t-flex">
                {e.name_en}
                <Image src={e.flag} width={95} height={55} alt="country flag" />
              </td>
              <td>{e.mp}</td>
              <td>{e.w}</td>
              <td>{e.d}</td>
              <td>{e.l}</td>

              <td>{e.gf}</td>
              <td>{e.ga}</td>
              <td>{e.gd}</td>
              <td>{e.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaGrupo;
