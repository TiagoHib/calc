function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
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
    if (plays > 1){
        document.getElementById('plays').innerHTML = plays - 1;
    }
    else{
        if(document.getElementById('resultado').innerHTML == 0){
            var popup_win = document.getElementById('pop_win');
            popup_win.classList.toggle("show");
    
            var elements = document.getElementsByClassName("botao");
            for (var i = 0; i < elements.length; i++) {
                elements[i].disabled =true;
            }
        }
        else{
            var popup_lose = document.getElementById('pop_lose');
            popup_lose.classList.toggle("show");
            document.getElementById('plays').innerHTML = 0;

            document.getElementById("zero").disabled = true;
            var elements = document.getElementsByClassName("botao");
            for (var i = 0; i < elements.length; i++) {
                elements[i].disabled =true;
            }
        }
    }

    if(document.getElementById('resultado').innerHTML == 0){
        var popup_win = document.getElementById('pop_win');
        popup_win.classList.toggle("show");

        document.getElementById("zero").disabled = true;
        var elements = document.getElementsByClassName("botao");
        for (var i = 0; i < elements.length; i++) {
            elements[i].disabled =true;
        }
    }
}