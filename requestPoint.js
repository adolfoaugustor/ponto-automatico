require('dotenv').config();
const axios = require("axios");

module.exports.baterPonto = async (req, res) => {
  let data = JSON.stringify({
    "atividadeId": null,
    "endereco": null,
    "foraDoPerimetro": false,
    "foto": null,
    "identificacaoDispositivo": "45.230.252.116",
    "justificativa": null,
    "latitude": null,
    "longitude": null,
    "marcacaoOffline": false,
    "precisao": null,
    "viaCentralWeb": true
  });
  
  let config = {
    method: 'post',
    url: process.env.CRON_URL,
    headers: { 
      'Authorization': process.env.CRON_AUTH_TOKEN, 
      'Content-Type': 'application/json'
    },
    data : data
  };

  const response =  await axios(config)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  return json(response.data);
}



