document.addEventListener('DOMContentLoaded', () => {
    const houses = {
        "Frontend": 0,
        "Backend": 0,
        "Mobile": 0,
        "Data": 0
    };

    const questions = [
        {
            question: "¿Qué tipo de proyectos te interesa más desarrollar?",
            answers: [
                { option: "Aplicaciones móviles nativas para múltiples plataformas.", house: "Mobile" },
                { option: "Interfaces visualmente atractivas y responsivas.", house: "Frontend" },
                { option: "Procesamiento y análisis de grandes volúmenes de datos.", house: "Data" },
                { option: "Sistemas robustos y optimización de rendimiento del servidor.", house: "Backend" }
            ]
        },
        {
            question: "¿Qué aspecto del desarrollo disfrutas más?",
            answers: [
                { option: "Resolver problemas complejos de lógica y escalabilidad.", house: "Backend" },
                { option: "Analizar datos para tomar decisiones basadas en estadísticas.", house: "Data" },
                { option: "Crear aplicaciones móviles eficientes y funcionales.", house: "Mobile" },
                { option: "Trabajar en el diseño y la experiencia de usuario.", house: "Frontend" }
            ]
        },
        {
            question: "¿Qué herramienta prefieres usar en tu día a día?",
            answers: [
                { option: "Kotlin o Swift para desarrollar apps móviles nativas.", house: "Mobile" },
                { option: "Python o R para análisis de datos.", house: "Data" },
                { option: "Frameworks como React o Angular.", house: "Frontend" },
                { option: "Lenguajes como Node.js o Python para la gestión de servidores.", house: "Backend" }
            ]
        },
        {
            question: "¿Cómo te ves en un equipo de desarrollo?",
            answers: [
                { option: "Modelando datos y construyendo dashboards de análisis.", house: "Data" },
                { option: "Encargado de la lógica del servidor y las APIs.", house: "Backend" },
                { option: "Desarrollando la interfaz y funcionalidad de una app móvil.", house: "Mobile" },
                { option: "Diseñando las interacciones y los componentes visuales.", house: "Frontend" }
            ]
        },
        {
            question: "¿Qué te motiva más al trabajar en un proyecto?",
            answers: [
                { option: "Ver cómo el diseño cobra vida en la pantalla.", house: "Frontend" },
                { option: "Descubrir insights a partir del análisis de datos.", house: "Data" },
                { option: "Optimizar el rendimiento y escalabilidad del sistema.", house: "Backend" },
                { option: "Lograr que una aplicación móvil funcione perfectamente en cualquier dispositivo.", house: "Mobile" }
            ]
        },
        {
            question: "¿Cuál es tu enfoque al aprender nuevas tecnologías?",
            answers: [
                { option: "Explorar técnicas avanzadas de análisis de datos y machine learning.", house: "Data" },
                { option: "Aprender sobre nuevas arquitecturas y lenguajes de servidor.", house: "Backend" },
                { option: "Probar nuevas plataformas y herramientas para desarrollo móvil.", house: "Mobile" },
                { option: "Experimentar con nuevas librerías y frameworks de interfaz de usuario.", house: "Frontend" }
            ]
        },
        {
            question: "¿Qué tipo de desafíos disfrutas más resolver?",
            answers: [
                { option: "Solución de problemas de concurrencia y carga en servidores.", house: "Backend" },
                { option: "Optimización de interfaces para que se vean bien en cualquier dispositivo.", house: "Frontend" },
                { option: "Análisis de grandes volúmenes de datos para detectar patrones ocultos.", house: "Data" },
                { option: "Creación de experiencias de usuario fluídas en dispositivos móviles.", house: "Mobile" }
            ]
        },
        {
            question: "¿Cómo te gusta medir el éxito de tu trabajo?",
            answers: [
                { option: "Por la estabilidad y rapidez del sistema bajo carga.", house: "Backend" },
                { option: "Mediante la satisfacción del usuario con la interfaz visual.", house: "Frontend" },
                { option: "Por la fluidez y buen rendimiento de la app móvil en diferentes dispositivos.", house: "Mobile" },
                { option: "Por la precisión y relevancia de los resultados obtenidos en el análisis de datos.", house: "Data" }
            ]
        },
        {
            question: "¿Qué te resulta más interesante al trabajar con tecnologías emergentes?",
            answers: [
                { option: "Trabajar con tecnologías de big data o inteligencia artificial.", house: "Data" },
                { option: "Explorar nuevas arquitecturas para mejorar el rendimiento del servidor.", house: "Backend" },
                { option: "Probar nuevas herramientas y metodologías para mejorar el diseño y la UX.", house: "Frontend" },
                { option: "Desarrollar apps móviles que aprovechen nuevas capacidades de hardware.", house: "Mobile" }
            ]
        },
        {
            question: "¿Cómo te enfrentas a un nuevo problema en un proyecto?",
            answers: [
                { option: "Buscando patrones y soluciones basadas en análisis de datos.", house: "Data" },
                { option: "Replanteando la estructura visual y funcional de la interfaz.", house: "Frontend" },
                { option: "Explorando cómo mejorar la experiencia del usuario en dispositivos móviles.", house: "Mobile" },
                { option: "Analizando la estructura de datos y la lógica del backend.", house: "Backend" }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let userName = "";

    const startButton = document.getElementById('start-button');
    const nameInput = document.getElementById('name');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const startScreen = document.getElementById('start-screen');

    function showStartScreen() {
        startScreen.style.display = 'block';
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'none';
    }

    function hideInitialContent() {
        startScreen.style.display = 'none';
        questionContainer.style.display = 'block';
    }

    function showQuestion(questionIndex) {
        questionContainer.innerHTML = ''; 
        if (questionIndex >= questions.length) {
            showResult();
            return;
        }

        const question = questions[questionIndex];
        const questionElement = document.createElement('h2');
        questionElement.textContent = question.question;
        questionContainer.appendChild(questionElement);

        question.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.textContent = answer.option;
            button.classList.add('answer-button');
            button.addEventListener('click', () => handleAnswerClick(answer.house));
            questionContainer.appendChild(button);
        });
    }

    function handleAnswerClick(house) {
        houses[house]++;
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }

    function showResult() {
        const maxPoints = Math.max(...Object.values(houses));
        const possibleHouses = Object.keys(houses).filter(house => houses[house] === maxPoints);

        const assignedHouse = possibleHouses.length > 1
            ? possibleHouses[Math.floor(Math.random() * possibleHouses.length)]
            : possibleHouses[0];

        resultContainer.innerHTML = `
            <img id="sombrero" src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2015/06/Sombrero-seleccionador.jpg?fit=612%2C344&ssl=1" alt="Sombrero seleccionador de Hogwarts">
            <h2>Felicidades ${userName}, tu casa será ${assignedHouse}!</h2>
            ${possibleHouses.length > 1 ? "<p>La decisión fue complicada, ya que tu puntuación fue muy pareja entre varias casas.</p>" : ""}
            <button id="restart-button">Volver al inicio</button>
        `;

        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        document.getElementById('restart-button').addEventListener('click', () => {
            resetQuiz();
            showStartScreen();
        });
    }

    function resetQuiz() {
        Object.keys(houses).forEach(house => houses[house] = 0);
        currentQuestionIndex = 0;
        questionContainer.innerHTML = '';
        resultContainer.innerHTML = '';
        nameInput.value = '';
    }

    startButton.addEventListener('click', () => {
        userName = nameInput.value.trim();
        if (userName && /^[a-zA-Z\s]+$/.test(userName)) {
            hideInitialContent();
            showQuestion(currentQuestionIndex);
        } else {
            alert("Por favor, introduce un nombre válido (solo letras y espacios).");
        }
    });

    showStartScreen();
});


