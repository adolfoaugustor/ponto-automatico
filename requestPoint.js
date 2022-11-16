const fetch = require('node-fetch');

module.exports.baterPonto = async () => {
  const response = await fetch(process.env.URL, {
    method: 'post',
    body: JSON.stringify({
      "atividadeId": null,
      "endereco": null,
      "foraDoPerimetro": false,
      "foto": null,
      "identificacaoDispositivo": process.env.IP,
      "justificativa": null,
      "latitude": null,
      "longitude": null,
      "marcacaoOffline": false,
      "precisao": null,
      "viaCentralWeb": true
    }),
    headers: {
      'Authorization': process.env.AUTH_TOKEN,
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  console.log(data);
  return data;
}

module.exports.baterPonto2 = async () => {
  const response = await fetch(process.env.URL, {
    method: 'post',
    body: JSON.stringify({
      "atividadeId": null,
      "endereco": null,
      "foraDoPerimetro": false,
      "foto": null,
      "identificacaoDispositivo": process.env.IP,
      "justificativa": null,
      "latitude": null,
      "longitude": null,
      "marcacaoOffline": false,
      "precisao": null,
      "viaCentralWeb": true
    }),
    headers: {
      'Authorization': 'Basic MzQzNDoyNHNuZkFAcmQyOjA=',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  console.log(data);
  return data;
}