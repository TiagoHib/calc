function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada...";
    }

    var plays = document.getElementById('plays').innerHTML;   
    if (plays >= 1){
        document.getElementById('plays').innerHTML = plays - 1;
    }
    else{
        if(document.getElementById('resultado').innerHTML == 0){
            var win = document.getElementById('calc_win');
            win.classList.toggle("show");

            document.getElementById("zero").disabled = true;
            document.getElementById("clean").disabled = true;

            var elements = document.getElementsByClassName("botao");
            for (var i = 0; i < elements.length; i++) {
                elements[i].disabled =true;
            }
        }
        else{
            var lose = document.getElementById('calc_lose');
            lose.classList.toggle("show");

            document.getElementById('plays').innerHTML = 0;

            document.getElementById("zero").disabled = true;
            document.getElementById("clean").disabled = true;

            var elements = document.getElementsByClassName("botao");
            for (var i = 0; i < elements.length; i++) {
                elements[i].disabled =true;
            }
        }
    }

    if(document.getElementById('resultado').innerHTML == 0){
        var win = document.getElementById('calc_win');
        win.classList.toggle("show");

        document.getElementById("zero").disabled = true;
        document.getElementById("clean").disabled = true;

        var elements = document.getElementsByClassName("botao");
        for (var i = 0; i < elements.length; i++) {
            elements[i].disabled =true;
        }
    }
}

function avançar(){
	window.open("fase2.html");
}