document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tablaDatos tbody");

  try {
    const response = await fetch("http://localhost:5678/webhook-test/dashboard-data-get");
    const data = await response.json();

    if (!Array.isArray(data)) throw new Error("Respuesta inválida");

    data.forEach(entry => {
      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${entry.nombre || ""}</td>
        <td>${entry.email || ""}</td>
        <td>${entry.mensaje || ""}</td>
        <td>${new Date(entry.fecha).toLocaleString()}</td>
      `;

      tbody.appendChild(fila);
    });
  } catch (error) {
    console.error("Error al cargar datos:", error);
    const filaError = document.createElement("tr");
    filaError.innerHTML = `<td colspan="4" style="color:red;">Error al cargar datos</td>`;
    tbody.appendChild(filaError);
  }
});