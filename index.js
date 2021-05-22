const button = document.getElementById('button');
const content = document.getElementById('content');

button.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    const text = 'This is a test';
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance)
})