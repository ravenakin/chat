document.getElementById('button').addEventListener('click', function() {
    var input = document.getElementById('input').value;
    fetch('https://api-inference.huggingface.co/models/Tap-M/Luna-AI-Llama2-Uncensored', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_HUGGING_FACE_API_TOKEN',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: input,
        })
    })
    .then(response => response.json())
    .then(data => {
        var message = document.createElement('p');
        message.textContent = data[0].generated_text;
        document.getElementById('messages').appendChild(message);
    });
});
