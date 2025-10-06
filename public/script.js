const form = document.getElementById('lang-form');
const textInput = document.querySelector('textarea[name="text"]');
const resultDiv = document.getElementById('result');
const charCounter = document.getElementById('char-counter');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const text = textInput.value;
    if (!text) return;

    resultDiv.classList.remove('visible');
    resultDiv.innerHTML = '<div class="spinner"></div>';
    resultDiv.classList.add('visible');

    try {
        const response = await fetch('/api/detect', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text }),
        });
        const data = await response.json();

        if (data.language) {
            resultDiv.innerHTML = `<strong>Detected Language:</strong> ${data.language} (<code>${data.code}</code>)`;
        } else {
            resultDiv.innerHTML = data.message || 'An error occurred.';
        }
    } catch (error) {
        resultDiv.innerHTML = 'Failed to connect to the server.';
        console.error('Error:', error);
    }
});

textInput.addEventListener('input', () => {
    const count = textInput.value.length;
    charCounter.textContent = `${count} characters`;
});