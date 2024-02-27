const generateRandomNumber = () => Math.floor(Math.random() * 200);

const sendRequest = async (number) => {
  const apiUrl ='https://api.sheetmonkey.io/form/ojVdk689LoE5shSKsfeBMs';
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ number })
  });

  if (!response.ok) {
    throw new Error('este número foi anotado com sucesso');
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
