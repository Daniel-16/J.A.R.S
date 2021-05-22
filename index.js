const button = document.getElementById('button');
const content = document.getElementById('content');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    'Hello, how are you?',
    'Welcome, I am Jars. Just a regular speech recognition',
    'Hello there'
]

const forbidden = [
    'Sorry but that word is prohibited to me',
    'No curse words allowed',
    'Hmm!'
];

const badSide = [
    "You really don't wanna see my bad side you ugly piece of shit. Oops",
    "Fuck that shit",
    "Ooh fuck, here we go again"
];

const creator = [
    "I was created by a brilliant programmer called Daniel",
    "I am still under development, but my creator is Daniel"
];

const intro = [
    "I am JARS which stands for 'Just a regular speech recognition"
]

recognition.onstart = () => {
    console.log('Voice is activated')
};

recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content.innerHTML = transcript;
    reply(transcript);
}

button.addEventListener('click', () => {
    recognition.start()
});

function reply (message) {
    const speech = new SpeechSynthesisUtterance();
    if (message.includes('hello') || message.includes('hi')) {
        const welcome = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = welcome
    };
    if (message.includes(['fuck', 'shit', 'bitch', 'idiot', 'bastard'])) {
        const forbiddenReply = forbidden[Math.floor(Math.random() * forbidden.length)];
        speech.text = forbiddenReply;
    }
    if (message.includes('Bad side') || message.include('your other side')) {
        const badSideReply = badSide[Math.floor(Math.random() * badSide.length)];
        speech.text = badSideReply;
    }
    if (message.includes(['who created you', 'created you', 'creator'])) {
        const creatorReply = creator[Math.floor(Math.random() * creator.length)];
        speech.text = creatorReply;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.text = 'I am sorry, but i have troubles understanding you';
    window.speechSynthesis.speak(speech)
}