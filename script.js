var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});




function rollDie() {
  // Generate a random number between 1 and 6
  var result = Math.floor(Math.random() * 6) + 1;

  // Display the result on the page
  document.getElementById("result").innerHTML = "You rolled a " + result;
}
const phrases = [
  "Good luck!",
  "May fortune smile upon you.",
  "Have a lucky day!",
  "Keep hoping and dreaming.",
  "Stay positive and optimistic.",
  "Believe in yourself and your abilities."
];

function generatePhrase() {
  // Generate a random phrase from the array
  var phrase = phrases[Math.floor(Math.random() * phrases.length)];

  // Display the phrase on the page
  document.getElementById("phrase").innerHTML = phrase;
}
function getName() {
  // Prompt the user for their name
  var name = prompt("What is your name?");

  // Display a greeting on the page
  document.getElementById("greeting").innerHTML = "Hello, " + name + "!";
}
// Criar uma função para enviar os dados do formulário para uma planilha
function enviarDadosParaPlanilha() {
  // Recuperar os dados do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  
  // Enviar os dados para uma planilha Google Sheets
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([nome, email, senha]);
}

// Adicionar um evento de envio para o formulário
document.getElementById("form").addEventListener("submit", enviarDadosParaPlanilha);
// Criar uma função para enviar os dados do formulário para a API
function enviarDadosParaApi() {
  // Recuperar os dados do formulário
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  
  // Enviar os dados para a API
  fetch('https://sheetdb.io/api/v1/j04s2vzx2ucg0', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      senha: senha
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}

// Adicionar um evento de envio para o formulário
document.getElementById("form").addEventListener("submit", enviarDadosParaApi);
