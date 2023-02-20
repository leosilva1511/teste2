function insert(number){ // função insert para "inserir um dado ao ser clikado"//
 var numero = document.getElementById('resultado').innerHTML;
 document.getElementById('resultado').innerHTML = numero + number //para inserir mais de um número//
}

function clean(){ // função clear para "Limpar tudo" algo que foi digitado//
document.getElementById('resultado').innerHTML = "";
}

function back(){ //limpar apenas o "ultimo" objeto que foi digitado.//
   var resultado =  document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular (){ //O "Eval" ele já faz todo o calculo//
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){//se tiver algo ele vai calcular//
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else{ //se não tiver nada para calcular ele vai passar essa mensagem "Nada..."//
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}