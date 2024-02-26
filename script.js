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
function submitForm() {
  // Get the form data
  var formData = {
    name: document.getElementById("name").value,
    option: document.getElementById("option").value
  };

  // Send the form data to your API
  fetch("https://sheetdb.io/api/v1/j04s2vzx2ucg0", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Form data submitted:", data);
  })
  .catch(error => {
    console.error("Error submitting form data:", error);
  });
}
function generateNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://sheetdb.io/api/v1/iq3sek4kkpsda');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('result').innerText = 'Number generated and saved successfully.';
        } else {
            document.getElementById('result').innerText = 'Error: ' + xhr.statusText;
        }
    };
    xhr.send(JSON.stringify({ data: [{ number }] }));
}
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Gerar número aleatório
  var randomNumber = Math.floor(Math.random() * 100);
  
  // Criar objeto de dados para enviar para a API
  var data = {
    numeros: [randomNumber]
  };
  
  // Fazer requisição HTTP POST para a API do Sheetdb
  fetch('https://sheetdb.io/api/v1/iq3sek4kkpsda', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (response.ok) {
      console.log('Número enviado com sucesso!');
    } else {
      throw new Error('Erro ao enviar número.');
    }
  })
  .catch(function(error) {
    console.error(error);
  });
});
