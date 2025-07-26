document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const estadoEnvio = document.getElementById("estadoEnvio");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const fecha = new Date().toISOString(); // formato ideal para n8n

    if (!nombre || !email || !mensaje) {
      estadoEnvio.textContent = "Por favor completa todos los campos.";
      estadoEnvio.style.color = "red";
      return;
    }

    const data = { nombre, email, mensaje, fecha };

    try {
      const response = await fetch("http://localhost:5678/webhook-test/dashboard-data-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        estadoEnvio.textContent = "Formulario enviado correctamente.";
        estadoEnvio.style.color = "#28a745";
        form.reset();
      } else {
        estadoEnvio.textContent = "Hubo un error al enviar el formulario.";
        estadoEnvio.style.color = "red";
      }
    } catch (error) {
      console.error("Error:", error);
      estadoEnvio.textContent = "No se pudo conectar al servidor.";
      estadoEnvio.style.color = "red";
    }
  });
});