window.onload = function(){

    button = document.querySelector('.hamburger')
    let answers = [0,0,0,0];
    let carType = [
        {name: 'Drift car', value: 0},
        {name: 'Super car', value: 0},
        {name: 'Tuner car', value: 0},
        {name: 'Muscle car', value: 0}]
    let result = []

    const questions = [
        {
            question: "Labore culpa cupidatat nostrud ad?",
            choices: ["a","b","c","d"]
        },
        {
            question: "Voluptate ea occaecat occaecat dolor sunt adipisicing proident qui proident laborum?",
            choices: ["a","b","c","d"]
        },
        {
            question: "Ullamco sint duis pariatur sint consectetur aliqua ullamco sit ex amet sint consequat cillum consequat?",
            choices: ["a","b","c","d"]
        },
        {
            question: "Voluptate consectetur consectetur consequat eu ipsum irure aliquip?",
            choices: ["a","b","c","d"]
        },
        {
            question: "Incididunt quis irure aliqua in commodo aliqua magna proident commodo?",
            choices: ["a","b","c","d"]
        },
    ]

    for(let i = 0; i < questions.length; i++){
        let quizDiv = document.createElement('div');
        let questId = document.createAttribute('id')
        questId.value = `id${i}`
        quizDiv.setAttributeNode(questId)

        quizDiv.innerHTML = `
        <h1 id='question${i}'>${questions[i].question}</h1>
        `
        document.querySelector('.quiz').appendChild(quizDiv)


        for(let j = 0; j < questions[i].choices.length; j++){
            let choice = document.createElement('button');
            choice.innerHTML = `${questions[i].choices[j]}`
            document.querySelector(`#id${i}`).appendChild(choice);
            choice.onclick = function (){
            carType[j].value += 1
               
            }
        }

    }

    

    let submit = document.querySelector('#quizSubmit')
    let displayResult = document.querySelector('#quizResult')
    submit.onclick = function handleClick(){

        result = carType.sort( (a,b) => {return b.value - a.value})
        displayResult.innerHTML = `${result[0].name}`

    }
    
    button.onclick = function handleClick(){
        let sidebar = document.querySelector('.sidebar');
        if (sidebar.style.display === "block") {
            sidebar.style.display = "none";
          } else {
            sidebar.style.display = "block";
          }

    }
}