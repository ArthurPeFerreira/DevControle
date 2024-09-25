"use client";

import { useEffect, useState } from "react";

export function WebSocketTelemetry() {
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // Conectando ao servidor WebSocket
    const ws = new WebSocket("ws://localhost:8080");

    // Quando receber uma mensagem do servidor
    ws.onmessage = (event) => {
      const telemetryData = JSON.parse(event.data);
      setData(telemetryData);
      setLastUpdated(new Date().toLocaleTimeString());
    };

    // Quando a conexão for fechada
    ws.onclose = () => {
      console.log("Conexão WebSocket fechada");
    };

    // Fechar o WebSocket ao desmontar o componente
    return () => ws.close();
  }, []);

  if (!data) return <p>Carregando dados de telemetria...</p>;

  return (
    <div className="telemetry-card">
      <h2>Booster São Pedro</h2>
      <p>Bomba: {data.bomba ? "Ligado" : "Desligado"}</p>
      <p>Frequência: {data.frequencia} Hz</p>
      <p>Corrente: {data.corrente} A</p>
      <p>Sucção: {data.succao} mca</p>
      <p>Recalque: {data.recalque} mca</p>
      <p>Última Atualização: {lastUpdated}</p>
    </div>
  );
}
