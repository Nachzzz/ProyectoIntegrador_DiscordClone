// app.js

document.addEventListener("DOMContentLoaded", function () {
    // Verificar si el usuario está autenticado
    const isAuthenticated = false; // Cambiar a true si el usuario está autenticado
  
    // Elementos de la página
    const loginForm = document.getElementById("login-form");
    const chatForm = document.getElementById("chat-form");
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message");
    const logoutBtn = document.getElementById("logout-btn");
  
    // Función para procesar el inicio de sesión
    function handleLogin(event) {
      event.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      // Aquí deberías implementar la lógica de autenticación en tu backend
      // Por simplicidad, asumimos que el usuario está autenticado correctamente.
      isAuthenticated = true;
      showChatPage();
    }
  
    // Función para enviar un mensaje
    function sendMessage(event) {
      event.preventDefault();
      const message = messageInput.value;

      // Aquí deberías implementar la lógica de envío de mensajes en tu backend
      // Por simplicidad, solo lo agregamos al cuadro de chat en el frontend.
      appendMessage(username, message);
      messageInput.value = "";
    }
  
    // Función para mostrar la página de chat y ocultar la página de inicio de sesión
    function showChatPage() {
      if (isAuthenticated) {
        loginForm.style.display = "none";
        chatForm.style.display = "block";
      } else {
        loginForm.style.display = "block";
        chatForm.style.display = "none";
      }
    }
  
    // Función para agregar un mensaje al cuadro de chat
    function appendMessage(username, message) {
      const messageElement = document.createElement("div");
      messageElement.className = "message";
      messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
      chatBox.appendChild(messageElement);
    }
  
    // Manejar el evento de inicio de sesión
    loginForm.addEventListener("submit", handleLogin);
  
    // Manejar el evento de envío de mensajes
    chatForm.addEventListener("submit", sendMessage);
  
    // Mostrar la página de inicio de sesión al cargar la aplicación
    showChatPage();
  });
  