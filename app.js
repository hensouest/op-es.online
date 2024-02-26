const generateRandomNumber = () => Math.floor(Math.random() * 100);

const sendRequest = async (number) => {
  const apiUrl = 'https://sheetdb.io/api/v1/j04s2vzx2ucg0';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ number })
  });

  if (!response.ok) {
    throw new Error('Failed to save the number.');
  }
};

const generateAndSaveRandomNumber = async () => {
  try {
    const number = generateRandomNumber();
    document.getElementById('random-number-input').value = number;
    await sendRequest(number);
    alert('seu numero foi enviado com sucesso .');
  } catch (error) {
    alert('Error: ' + error.message);
  }
};

document.getElementById('generate-random-number').addEventListener('click', generateAndSaveRandomNumber);