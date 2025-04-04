let currentTopic = '';

function displayQuizForm(category) {
    currentTopic = category; // Salvează categoria selectată
    const quizForm = document.getElementById('quizForm');
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = ''; // Sterge resursele anterioare
    
    let questions = [];

    if (category === 'HTML & CSS') {
        questions = [
            'Ce tag HTML se folosește pentru a afișa un paragraf de text?',
            'Care dintre următoarele proprietăți CSS controlează dimensiunea fontului?',
            'Ce atribut HTML este folosit pentru a seta o imagine de fundal?'
        ];
    } else if (category === 'JavaScript') {
        questions = [
            'Cum se declară o variabilă în JavaScript folosind ES6?',
            'Care este rezultatul următorului cod: console.log(2 + "2")?',
            'Ce metodă se folosește pentru a transforma un array în string?'
        ];
    } else if (category === 'Cultură Generală') {
        questions = [
            'Care este cel mai mare continent de pe Pământ?',
            'Care este formula chimică a apei?',
            'Cine a fost primul om care a pășit pe Lună?'
        ];
    }

    quizForm.innerHTML = '<h3>Răspunde la următoarele întrebări:</h3>';

    questions.forEach((question, index) => {
        quizForm.innerHTML += `
            <div class="quiz-item">
                <label for="question${index + 1}">${question}</label>
                <input type="text" id="answer${index + 1}" class="quiz-answer" placeholder="Scrie răspunsul aici" required>
            </div>
        `;
    });

    quizForm.innerHTML += '<button onclick="submitQuiz()">Submit</button>';
    quizForm.style.display = 'block';
}

function submitQuiz() {
    const questions = document.querySelectorAll('.quiz-answer');
    let answers = [];
    questions.forEach(question => answers.push(question.value));
    console.log('Răspunsuri:', answers);  
    clearQuizForm();
    simulateQuiz(currentTopic);
}

function simulateQuiz(topic) {
    const recommendations = document.getElementById('recommendations');
    const resources = {
        'HTML & CSS': ['W3Schools', 'Mozilla Developer Network (MDN)', 'CSS-Tricks'],
        'JavaScript': ['Eloquent JavaScript', 'JavaScript.info', 'Mozilla Developer Network (MDN)'],
        'Cultură Generală': ['Wikipedia', 'Britannica', 'National Geographic']
    };

    const randomScore = Math.floor(Math.random() * 101);
    recommendations.innerHTML = `
        <h3>Rezultatul tău pentru ${topic} este: ${randomScore}%</h3>
        <h4>Resurse recomandate:</h4>
        <ul>
            ${resources[topic] ? resources[topic].map(resource => `<li>${resource}</li>`).join('') : '<li>Nu există resurse disponibile</li>'}
        </ul>
    `;
}

function clearQuizForm() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = '';
}
