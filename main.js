function adduser(){
    player1 = document.getElementById("player1_input").value;
    player2 = document.getElementById("player2_input").value;
    localStorage.setItem("player1key",player1);
    localStorage.setItem("player2key",player2);
    window.location = "gamepage.html"
}