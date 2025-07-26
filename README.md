SmartForm AI Dashboard – Automatización con n8n, IA y Google Sheets
-

Automatiza completamente la recolección, almacenamiento, respuesta y visualización de datos desde formularios web utilizando [n8n](https://n8n.io/), Google Sheets.

Ideal para proyectos freelance, clientes que quieren ahorrar tiempo, atención al cliente inteligente, y negocios que buscan una solución económica pero poderosa sin pagar plataformas externas.

---
## 🌟 Funcionalidades principales


-✅ Formulario web moderno y adaptable (HTML/CSS/JS)

-✅ Almacena datos automáticamente en Google Sheets u otras plataformas (Configurable)

-✅ Lee registros y los visualiza en un dashboard en tiempo real

-✅ Totalmente personalizable y reutilizable para múltiples clientes

---
🖥️ Demo y vista previa
-

![captura_n8n](https://github.com/user-attachments/assets/33bc46e0-2dd8-42e5-9f58-7a3d44574ba0)



---
## 🧩 Tecnologías utilizadas


- HTML5 + CSS3 + JavaScript
  
- [n8n](https://n8n.io/) (low-code automation)
  
- Google Sheets API
  
- Webhooks (GET y POST)
  
- Email o Telegram (notificación)
  
- Docker (para desarrollo local con n8n)

---
## 📌 ¿Cómo funciona?


1. 🧾 El usuario completa el formulario (`index.html`).

2. 🔗 Se envían los datos al Webhook POST de n8n.

3. 📄 n8n guarda los datos automáticamente en Google Sheets.

4. ✉️ Se notifica por email o Telegram.

5. 📊 Desde el `dashboard.html`, se hace un `GET` a otro webhook de n8n que **lee** los datos desde Sheets y los muestra visualmente.

---
🎯 Casos de uso
-


- Recepción de solicitudes o reclamos

- Formularios inteligentes para servicios


- Reportes centralizados con dashboard en tiempo real
---
📈 Escalabilidad
-

---
Este proyecto puede escalarse fácilmente:

- Soporte para múltiples formularios

- Base de datos en lugar de Sheets

- Autenticación de usuarios

- Panel admin con edición y filtrado

Deploy en servidores reales o Vercel

---
🙌 Contáctame
-


¿Necesitas una solución personalizada o deseas contratar una integración similar?

- 📩  Correo[benjaminmillalonc@gmail.com]

- 🌐  LinkedIn [www.linkedin.com/in/benjamin-millalonco]
  
- 🐙  GitHub [https://github.com/hxcCoder]
