// server.js
const WebSocket = require("ws");

// Cria o servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Cliente conectado ao WebSocket");

  // Simula o envio de dados a cada 5 segundos
  const sendData = () => {
    const telemetryData = {
      bomba: true,
      frequencia: (Math.random() * 10 + 50).toFixed(1),
      corrente: (Math.random() * 10 + 10).toFixed(1),
      succao: (Math.random() * 5 + 40).toFixed(2),
      recalque: (Math.random() * 10 + 60).toFixed(1),
    };
    ws.send(JSON.stringify(telemetryData));
  };

  const intervalId = setInterval(sendData, 5000); // Envia dados a cada 5 segundos

  ws.on("close", () => {
    clearInterval(intervalId); // Limpa o intervalo quando o cliente desconecta
    console.log("Cliente desconectado");
  });
});

console.log("Servidor WebSocket rodando na porta 8080");

//WSS (WebSocket Secure)

// const https = require('https');
// const fs = require('fs');
// const WebSocket = require('ws');

// // Carrega os arquivos do certificado (certificado e chave privada)
// const serverOptions = {
//   cert: fs.readFileSync('cert.pem'),  // Substitua pelo caminho correto do seu certificado
//   key: fs.readFileSync('key.pem')     // Substitua pelo caminho correto da sua chave privada
// };

// // Cria um servidor HTTPS
// const server = https.createServer(serverOptions);

// // Cria o servidor WebSocket usando o servidor HTTPS
// const wss = new WebSocket.Server({ server });

// // Lida com novas conexões WebSocket
// wss.on('connection', (ws) => {
//   console.log('Cliente conectado ao WebSocket seguro');

//   // Envia dados de telemetria para o cliente
//   setInterval(() => {
//     const telemetryData = {
//       bomba: true,
//       frequencia: (Math.random() * 10 + 50).toFixed(1),
//       corrente: (Math.random() * 10 + 10).toFixed(1),
//       succao: (Math.random() * 5 + 40).toFixed(2),
//       recalque: (Math.random() * 10 + 60).toFixed(1),
//     };
//     ws.send(JSON.stringify(telemetryData));
//   }, 5000); // Envia dados a cada 5 segundos

//   ws.on('close', () => {
//     console.log('Conexão fechada');
//   });
// });

// // Servidor HTTPS escutando na porta 8081
// server.listen(8081, () => {
//   console.log('Servidor WebSocket seguro (WSS) rodando na porta 8081');
// });
