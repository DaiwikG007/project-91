player1_name = localStorage.getItem("Player1_name");
player2_name = localStorage.getItem("Player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;



function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    x = Math.floor(word.length/2);
    charAt2 = word.charAt(x);
    console.log(charAt2);


    y = word.length-1;
    charAt3 = word.charAt(y);
    console.log(charAt3);

    a = word.replace(charAt1 , "_");
    b = a.replace(charAt2, "_");
    c = b.replace(charAt3,"_");
    console.log(c);

    q1 = "<h4 id='word_display'>Q." + c + "</h4>";
    q2 = "<br> Answer: <input id='input_checkbox' type='text'>";
    q3 = "<br><br>  <button class='btn btn-info' onclick = 'check()'>Check</button>";

    row = q1 + q2 + q3;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}