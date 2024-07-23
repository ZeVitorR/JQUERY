var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase").text();
$("#tamanho-frase").text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input",function(){
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracter = conteudo.length
    $("#contador-caractere").text(qtdCaracter);
})

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){
    var cronometroId = setInterval(function (){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled",true);
            clearInterval(cronometroId)
        }
        
    },1000)    
})