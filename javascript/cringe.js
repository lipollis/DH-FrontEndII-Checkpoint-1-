// =================================================================================
//                          VALIDAR NOME
// =================================================================================
var nome; 

function validar_nome() {
    nome = document.getElementById("nome").value;
    // RegEX QUE ACEITA APENAS LETRAS E UMA PALAVRA
    var padrao = /[^a-zà-ú]/gi;
    var valida_nome = nome.match(padrao);
    if (valida_nome || !nome) {
        console.log("Nome possui caracteres inválidos ou é vazio.");


        return false;
    } else {
        console.log("Nome Ok!");
        return true;
    }
}

// =================================================================================
//                          VALIDAR RADIO
// =================================================================================
// VERIFICAÇÃO DA QUESTÃO 1
function validar_radio1() {
    var radio = document.getElementsByName("questao1");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q1 = radio[i].value;
            console.log("radio q1 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 2
function validar_radio2() {
    var radio = document.getElementsByName("questao2");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q2 = radio[i].value;
            console.log("radio q2 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 3
function validar_radio3() {
    var radio = document.getElementsByName("questao3");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q3 = radio[i].value;
            console.log("radio q3 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 4
function validar_radio4() {
    var radio = document.getElementsByName("questao4");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q4 = radio[i].value;
            console.log("radio q4 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 5
function validar_radio5() {
    var radio = document.getElementsByName("questao5");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q5 = radio[i].value;
            console.log("radio q5 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 6
function validar_radio6() {
    var radio = document.getElementsByName("questao6");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q6 = radio[i].value;
            console.log("radio q6 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}
// VERIFICAÇÃO DA QUESTÃO 7
function validar_radio7() {
    var radio = document.getElementsByName("questao7");
    var contagem7 = 0
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            q7 = radio[i].value;
            console.log("radio q7 " + radio[i].value);
            return true;
        } else {
            // return false;
        }
    }
}

// =================================================================================
//                     VERIFICAÇÃO DE TODOS OS CAMPOS
// =================================================================================
function valida_tudo() {
    if (
        (validar_nome() == true)
        && (validar_radio1() == true)
        && (validar_radio2() == true)
        && (validar_radio3() == true)
        && (validar_radio4() == true)
        && (validar_radio5() == true)
        && (validar_radio6() == true)
        && (validar_radio7() == true)
    ) {
        // OPÇÃO CRIANDO O BOTÃO NO JS
        // Criação do "Botão enviar" quando todas as verificações forem 'true'
        // var botaoEnviar = document.createElement("button");
        // var botaoTextoEnviar = document.createTextNode("ENVIAR");
        // botaoEnviar.setAttribute("type", "button");
        // botaoEnviar.appendChild(botaoTextoEnviar);
        // form.appendChild(botaoEnviar);

        // Formatando o botão
        // botaoEnviar.style.display = "flex";
        // botaoEnviar.style.flexDirection = "column";
        // botaoEnviar.style.border = "var(--cor-bg-verde-cringe)";
        // botaoEnviar.style.color = "var(--cor-bg-laranja-escuro)";
        // botaoEnviar.style.width = "12rem";
        // botaoEnviar.style.height = "5rem";
        // botaoEnviar.style.borderRadius = "1rem";
        // botaoEnviar.style.textAlign = "center";  


        // OUTRA OPÇÃO APENAS HABILITANDO O BOTÃO QUE ESTÁ NO HTML
        document.getElementById("botaoEnviar").disabled = false;
        // CHAMA A FUNÇÃO QUE SOMA OS PONTOS DE CADA QUESTÃO
        return somar()
    } else {
        document.getElementById("botaoEnviar").disabled = true;
    }
}

// =================================================================================
//                          SOMA DA PONTUAÇÃO
// =================================================================================
// ATRIBUIÇÃO DOS VALORES DE CADA QUESTÃO INICIALMENTE. SEM ALTERNATIVA CHECKED
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;

// DECLARAÇÃO GLOBAL DA STRING QUE SOMA O VALOR DE CADA QUESTÃO
var soma

function somar() {
    // CONTAGEM DOS PONTOS
    soma = parseInt(q1)
        + parseInt(q2)
        + parseInt(q3)
        + parseInt(q4)
        + parseInt(q5)
        + parseInt(q6)
        + parseInt(q7)
    console.log("O valor de todas as questões: " + soma)
}
// =================================================================================
//                     RESULTADO DO QUIZ
// =================================================================================

var imagem = ["imagem/emApuros.png", "imagem/explorador.png", "imagem/epico.png", "imagem/lendario.png"];

var mensagem = [
"Você é Cringe Em Apuros: Você não é nada cringe, talvez seja o oposto! Você sabe o que significa based e quem é a Olivia Rodrigo. Você julga os adultos e sabe todas as danças do TikoTeko e reclama que ninguém te entende ou leva a sério! Jovem, não se preocupe o tempo chega e com ele a depre… O cringe.", 
"Você é Cringe Explorador: Você tem altos e baixos sendo cringe. Tem consciência de alguns momentos e outro não. Você mostra um talento natural para ser cringe, mas as vezes escolhe não ser, esperamos que você possa mudar isso brevemente.",
"Você é Cringe Épico: Você é bastante cringe as pessoas ao seu redor gostariam de esconder a cabeça de vergonha, mas não a todo momento. Você ainda não está iniciado totalmente ao caminho cringe, mas está na direção… Eu sei você já viu Friends na Netflix.",
"Você é Cringe Lendário: Você é tão cringe que a linha para virar aquele parente das piadas sem graça é muito próxima. Você não entende os jovens e acaba sendo julgando por fazer as coisas e causar vergonha nos outros, infelizmente não há salvação para ti a não ser abraçar o cringe."];
var score;

function card(){
    // CONDIÇÕES PARA ATRIBUIR O INTERVALO CRINGE DO USUÁRIO
    if ((soma >= 7) && (soma <= 10)){
        score = 0;
    }
    
    if ((soma >= 11) && (soma <= 14)){
        score = 1;
    }
    
    if ((soma >= 15) && (soma <= 19)){
        score = 2;
    }
    
    if ((soma >= 20) && (soma <= 28)){
        score = 3;
    }
    
    // CRIAÇÃO DO CARD
    document.getElementById("depois_submit").style.visibility = "visible";
    
    document.getElementById("mensagem").innerHTML = mensagem[score];
    document.getElementById("resultado_soma").innerHTML = nome + "!";
    document.getElementById("imagem").src = imagem[score];

    // CHAMA A FUNÇÃO QUE GERA O JSON
    return submitJSON()
}


// =================================================================================
//                     CRIAÇÃO DO JSON
// =================================================================================
function submitJSON() {
    console.log("================================")
    console.log("==  ==   REGISTRO JSON    ==  ==")
    console.log("================================")

    // BUSCA AS INFOS DE DADOS
    let storage = JSON.parse(localStorage.getItem("dados"));

    // CONFERE SE O ARRAY ESTÁ VAZIO, SE SIM, ATRIBUI UM CONJUNTO VAZIO PARA 'DADOS'
    if (storage == null) {
        localStorage.setItem("dados", "[]")
        storage = [];
    }

    // ATRIBUI AO OBJETO OS VALORES DOS DADOS SUBMETIDOS PELO USUÁRIO
    let dadosForm = {
        nome: document.querySelector('#nome').value,
        pontos: soma,
        mensagem: mensagem[score],
        imagem_card: imagem[score]
    }

    // ARMAZENA AS INFORMAÇÕES DE 'DADOS' NO OBJETO
    storage.push(dadosForm);
    localStorage.setItem("dados", JSON.stringify(storage));

    // CHAMA A FUNÇÃO QUE RECUPERA OS DADOS PARA EXIBIR NO CONSOLE O RESULTADO
    return recuperaDados()
};

// =================================================================================
//                     RECUPERAÇÃO DO JSON
// =================================================================================
function recuperaDados() {
    let dadosRecuperados = JSON.parse(localStorage.getItem("dados"));
    for (let i = 0; i < dadosRecuperados.length; i++) {
        console.log(`Nome da pessoa ${i + 1}: ${dadosRecuperados[i].nome}`)
        console.log(`Pontos ${i + 1}: ${dadosRecuperados[i].pontos}`)
        console.log(`Mensagem ${i + 1}: ${dadosRecuperados[i].mensagem}`)
        console.log(`Imagem_card ${i + 1}: ${dadosRecuperados[i].imagem_card}`)
    }
};


