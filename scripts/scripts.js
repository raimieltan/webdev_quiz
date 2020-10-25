window.onload = function(){

    button = document.querySelector('.hamburger')

    const questions = [
        {
            question: "Labore culpa cupidatat nostrud ad.",
            choices: ["a","b","c","d"]
        },
        {
            question: "Voluptate ea occaecat occaecat dolor sunt adipisicing proident qui proident laborum.",
            choices: ["a","b","c","d"]
        },
        {
            question: "Ullamco sint duis pariatur sint consectetur aliqua ullamco sit ex amet sint consequat cillum consequat.",
            choices: ["a","b","c","d"]
        },
        {
            question: "Voluptate consectetur consectetur consequat eu ipsum irure aliquip.",
            choices: ["a","b","c","d"]
        },
        {
            question: "Incididunt quis irure aliqua in commodo aliqua magna proident commodo.",
            choices: ["a","b","c","d"]
        },
    ]

    button.onclick = function handleClick(){
        let sidebar = document.querySelector('.sidebar');
        if (sidebar.style.display === "block") {
            sidebar.style.display = "none";
          } else {
            sidebar.style.display = "block";
          }

    }
}