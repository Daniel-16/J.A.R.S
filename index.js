const button = document.getElementById('button');
const content = document.getElementById('content');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = [
    'Hello, how are you?',
    'Welcome, I am Jars. Just a regular speech recognition',
    'Hello there'
]

const answer =  [
    'I am doing fine. The internet is a whole big world and I am glad to be part of it',
    'I am okay today',
    'A little bit okay'
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
    "I am JARS which stands for 'Just a regular speech recognition'"
]

recognition.onstart = () => {
    console.log('Voice is activated')
};

recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;
    content.innerHTML = transcript;
    reply(transcript);
    button.className = 'btn btn-primary shadow-none'
}

button.addEventListener('click', () => {
    recognition.start()
});

function reply (message) {

    if (message.includes('hello') || message.includes('hi')) {
        const welcome = greetings[Math.floor(Math.random() * greetings.length)];
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(welcome);
        utterance.pitch = 1;
        utterance.volume = 1.5
        window.speechSynthesis.speak(utterance);
    }
    if (message.includes(['fuck', 'shit', 'bitch', 'idiot', 'bastard'])) {
        const forbiddenReply = forbidden[Math.floor(Math.random() * forbidden.length)];
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(forbiddenReply);
        utterance.pitch = 1;
        utterance.volume = 1.5
        window.speechSynthesis.speak(utterance);
    }
    if (message.includes('Bad side') || message.include('your other side')) {
        const badSideReply = badSide[Math.floor(Math.random() * badSide.length)];
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(badSideReply);
        utterance.pitch = 1;
        utterance.volume = 1.5
        window.speechSynthesis.speak(utterance);
    }
    if (message.includes('who created you') || message.includes('created you') || message.includes('creator')) {
        const creatorReply = creator[Math.floor(Math.random() * creator.length)];
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(creatorReply);
        utterance.pitch = 1;
        utterance.volume = 1.5
        window.speechSynthesis.speak(utterance);
    }
    if (message.includes('how are you') || message.includes('how you') || message.includes('you doing')) {
        const feeling = answer[Math.floor(Math.random() * answer.length)];
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(feeling);
        utterance.pitch = 1;
        utterance.volume = 1.5
        window.speechSynthesis.speak(utterance);
    } else {
        window.speechSynthesis.cancel();
        const speech = 'I do not understand what you mean yet'
        const utterance = new SpeechSynthesisUtterance(speech);
        utterance.pitch = 1.5;
        utterance.volume = 1.5
        window.speechSynthesis.speak(utterance);
    }
}