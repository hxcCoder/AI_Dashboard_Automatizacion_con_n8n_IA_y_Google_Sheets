---
Automatiza completamente la recolección, almacenamiento, respuesta y visualización de datos desde formularios web utilizando [n8n](https://n8n.io/), Google Sheets y OpenAI.

Ideal para proyectos freelance, clientes que quieren ahorrar tiempo, atención al cliente inteligente, y negocios que buscan una solución económica pero poderosa sin pagar plataformas externas.

---
## 🌟 Funcionalidades principales

-✅ Formulario web moderno y adaptable (HTML/CSS/JS)

-✅ Almacena datos automáticamente en Google Sheets u otras plataformas (Configurable)

-✅ Lee registros y los visualiza en un dashboard en tiempo real

-✅ Genera respuesta automática usando IA (ChatGPT/GPT-4)

-✅ Notificación vía email o Telegram al responsable (Integrable)

-✅ Totalmente personalizable y reutilizable para múltiples clientes

---
## 🧩 Tecnologías utilizadas

- HTML5 + CSS3 + JavaScript
  
- [n8n](https://n8n.io/) (low-code automation)
  
- Google Sheets API
  
- Webhooks (GET y POST)
  
- OpenAI (opcional para respuesta automática)
  
- Email o Telegram (notificación)
  
- Docker (para desarrollo local con n8n)

---
## 📌 ¿Cómo funciona?

1. 🧾 El usuario completa el formulario (`index.html`).

2. 🔗 Se envían los datos al Webhook POST de n8n.

3. 📄 n8n guarda los datos automáticamente en Google Sheets.

4. 🧠 Si se configura, se genera una respuesta con IA (GPT).

5. ✉️ Se notifica por email o Telegram.

6. 📊 Desde el `dashboard.html`, se hace un `GET` a otro webhook de n8n que **lee** los datos desde Sheets y los muestra visualmente.

---
🎯 Casos de uso

---
- Atención al cliente con IA

- Recepción de solicitudes o reclamos

- Formularios inteligentes para servicios

- Captura de leads con IA y seguimiento

- Reportes centralizados con dashboard en tiempo real
---
🖥️ Demo y vista previa

 -
![captura_flujo](https://github.com/user-attachments/assets/c167be37-21c1-4038-aceb-af18a1d8470a)


---
📈 Escalabilidad

---
Este proyecto puede escalarse fácilmente:

- Soporte para múltiples formularios

- Base de datos en lugar de Sheets

- Autenticación de usuarios

- Panel admin con edición y filtrado

Deploy en servidores reales o Vercel
---
Nota sobre CORS y desarrollo local

---
Por defecto, n8n no permite peticiones desde orígenes distintos (como 127.0.0.1:5500).

🔐 Para producción: esto no será un problema si usas n8n.cloud o tu servidor configurado correctamente con CORS headers habilitados.

🔧 En local, puedes:

Usar extensiones tipo "Allow CORS" para desarrollo

Habilitar CORS en Docker con la variable:
N8N_CORS_ALLOW_ORIGIN=* (solo para pruebas locales)

---
