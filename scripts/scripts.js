window.onload = function () {

    button = document.querySelector('.hamburger')
    let answers = [0, 0, 0, 0];
    let carType = [
        { name: 'Drift car', 
        value: 0, 
        description: `Drift cars are usually light- to moderate-weight rear-wheel-drive coupes and sedans, 
        offering a large range of power levels. There have also been all-wheel drive cars that have been converted 
        to rear-wheel drive such as the Subaru WRX, Toyota Avensis, Scion tC, Mitsubishi Lancer Evolution and 
        Nissan GT-R.`, 
        image: "../scripts/drift-car.jpg" 
        },

        { name: 'Luxury car', 
        value: 0,
        description: `A luxury vehicle provides increased levels of comfort, equipment, amenities, quality, 
        performance, and status relative to regular cars for an increased price.`, 
        image: "../scripts/luxury-car.jpg"
        },

        { name: 'Tuner car', value: 0,
        description: `A Tuner car is a vehicle with modifications and replaced OEM (original engine manufacture) parts. 
        Sometimes swapped with custom or performance oriented upgrades or even changing parts to make a more powerful 
        and efficient vehicle; tuned.`,
        image: "../scripts/tuner-car.jpg" 
        },

        { name: 'Muscle car', 
        value: 0,
        description: `Muscle car is a term for high-performance American coupes, usually but not limited to rear-wheel drive 
        and fitted with a high-displacement V8 engine.`,
        image: "../scripts/muscle-car.jpg"
        }
    ]

    let result = []

    //to change the question just change the question property of each object
    //to change choices change the choices property 
    const questions = [
        {
            question: "What is your favorite Fast and Furious movie?",
            choices: ["Tokyo Drift", "Fast and Furious 6", "2 Fast 2 Furious", "Fast and Furious 1"]
        },
        {
            question: "Which type of car do you prefer the most?",
            choices: ["Coupe", "Sedan", "Coupe", "SUV"]
        },
        {
            question: "Which car performance you most likely to improve?",
            choices: ["Handling", "Overall", "Transmission", "Turbo"]
        },
        {
            question: "In what race would you think you are the fastest?",
            choices: ["Street", "Circuit", "Sprint", "Drag"]
        },
        {
            question: "What kind of person are you?",
            choices: ["Aggressive", "Classy", "Flashy", "Bold"]
        },
    ]

    let questionLeft = questions.length;

    for (let i = 0; i < questions.length; i++) {
        const quizDiv = document.createElement('div');
        const questId = document.createAttribute('id');
        const questClass = document.createAttribute('class');
        questClass.value = 'questionContainer';
        questId.value = `question${i}`;
        quizDiv.setAttributeNode(questId);
        quizDiv.setAttributeNode(questClass);

        quizDiv.innerHTML =
            `
            <h1 class='question'>${questions[i].question}</h1>
        `

        document.querySelector('.quiz').appendChild(quizDiv)

        const choiceContainer = document.createElement('div');
        const choiceContainerClass = document.createAttribute('class');
        choiceContainerClass.value = 'choiceContainer';
        const choiceContainerId = document.createAttribute('id');
        choiceContainerId.value = `choiceContainer${i}`
        choiceContainer.setAttributeNode(choiceContainerClass);
        choiceContainer.setAttributeNode(choiceContainerId);

        document.querySelector(`#question${i}`).appendChild(choiceContainer);


        for (let j = 0; j < questions[i].choices.length; j++) {
            let choice = document.createElement('button');
            let choiceClass = document.createAttribute('class');
            choiceClass.value = 'choices';
            choice.setAttributeNode(choiceClass);

            choice.innerHTML =
                `
                ${questions[i].choices[j]}
            `

            document.querySelector(`#choiceContainer${i}`).appendChild(choice);

            choice.onclick = function () {
                carType[j].value += 1
                quizDiv.style.display = "none";
                questionLeft--;

                const displayResult = document.querySelector('#quizResult');
                const resultContainer = document.querySelector('.resultContainer');
                const mainContainer = document.querySelector('.mainContainer');

                function quizResult() {
                    result = carType.sort((a, b) => { return b.value - a.value })
                    resultContainer.style.display = "block";
                    mainContainer.style.display = "none";
                    displayResult.innerHTML =
                        `
                        <p class="carDescription"> 
                            The type of car you most likely to drive would be a <strong>${result[0].name}</strong>,
                            ${result[0].description}
                        </p>

                        <img class="carImage" src="${result[0].image}">
                    `
                }

                if (questionLeft == 0) {
                    setTimeout(quizResult(), 1000);
                }
            }

        }

    }

    button.onclick = function toggleHamburger() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar.style.display == "block") {
            sidebar.style.display = "none";
        } else {
            sidebar.style.display = "block";
        }

    }
}