function template(title, body) {
  const html = /* html */ `
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      ${body}
    </body>
  </html>`;

  return html;
}

export function indexTemplate() {
  const title = 'Boltadeildin—forsíða!';
  const body = /* html */ `
  <section>
    <h1>Velkomin í Boltadeildina!</h1>
    <ul>
      <li><a href="leikir.html">Seinustu leikir</a></li>
      <li><a href="stada.html">Staðan í deildinni</a></li>
    </ul>
  </section>`;

  return template(title, body);
}

export function stadaTemplate(standings) {
  const title = 'Boltadeildin—staðan!';
  const standingsHtml = standings.toString();
  const body = /* html */ `
  <section>
    <h1>Staðan í deildinni!</h1>
    ${standingsHtml}
  </section>`;

  return template(title, body);
}

export function leikirTemplate(data) {
  const title = 'Boltadeildin—leikir!';

  // Búum til array til að geyma upplýsingarnar
  const allGamesList = data.map(dataElement => {
    const {games} = dataElement;
    const {date} = dataElement;

    const gamesList = games.map(game => {
      const homeTeam = game.home.name;
      const awayTeam = game.away.name;
      const gameName = `Date: ${date} | Game: ${homeTeam} vs. ${awayTeam}`;
      return `<ul>${gameName}</ul>`;
    }).join('');

    return `<ul>${gamesList}</ul>`;
  }).join('');

  const body = /* html */ `
    <section>
      <h1>Leikir seinust vikna</h1>
      ${allGamesList}
    </section>`;

  return template(title, body);
}