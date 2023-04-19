import React from "react";

const TablaGrupo = ({ team }) => {
  const { group } = team;
  console.log(group);
  return (
    <div className="container">
      <h2 className="group">Grupo {group}</h2>
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
              <td>{e.name_en}</td>
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
