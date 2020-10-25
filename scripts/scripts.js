window.onload = function(){

    button = document.querySelector('.hamburger')

    button.onclick = function handleClick(){
        let sidebar = document.querySelector('.sidebar');
        if (sidebar.style.display === "block") {
            sidebar.style.display = "none";
          } else {
            sidebar.style.display = "block";
          }

    }
}