// TABATA FERNANDA DOS SANTOS SILVA 
// RA: 01202089


function conferir() {
    // VARIAVEL GLOBAL
    dig = digito.value;
    contador = 0;

    var validacoes = 0;
    var resto = Number(conta.value) % Number(loja.value);

    // validando loja
    if (loja.value >= 1 && loja.value <= 10) {
        // alert("Validado");
        validacoes++;
    }
    else {
        alert("Loja inválida");
    }

    // SE O VALOR DA CONTA FOR MENOR OU IGUAL A 0
    if (conta.value <= 0) {
        alert("Conta inválida")
    }

    // validando digito
    if (resto < 3) {
        if (digito.value == 1) {
            validacoes++;
        }
        else {
            alert("Digito invalido");
        }
    }
    else if (resto >= 3 && resto <= 6) {
        if (digito.value == 2) {
            validacoes++;
        }
        else {
            alert("Digito invalido");
        }
    }
    else if (resto > 6) {
        if (digito.value == 3) {
            validacoes++;
        }
        else {
            alert("Digito invalido");
        }
    }

    // verificação da validação de acordo com a variavel

    if (validacoes == 2) {
        loja.value = " ";
        conta.value = " ";
        digito.value = " ";
        content.style = 'display: none';
        telaSenha.style = 'display: block;';
    }
}

// ESSA FUNCAO LIMPA O CAMPO DA SENHA
function limpar() {
    pass.value = "";
}

// FUNCAO PARA O BOTAO ENTRAR 
function entrar() {
    var senha = pass.value;

    // SE A SENHA FOR VALIDA
    if (dig == 1 && senha == 'recife' || dig == 2 && senha == 'manaus' || dig == 3 && senha == 'fortaleza') {
        telaSenha.style = 'display: none';
        cadeira.style = 'display: block';
    }
    // SE A SENHA FOR INVALIDA
    else {
        res.innerHTML += "<p>Senha invalida!</p>";
        contador++;
    }

    // SE AS TENTATIVAS FOREM EXCEDIDAS
    if (contador >= 4) {
        contador = 0;
        alert("Você excedeu o número de tentativas, sua conta está bloqueada, PROCURE O SUPORTE");
        telaSenha.style = 'display: none';
        content.style = 'display: block';
    }
}

// COMBO DO TIPO DE CADEIRA
function cbCadeira() {
    if (comboCadeira.value == 1) {
        tipoCadeira = 'praia';
        imgPraia.style = 'display: block; width: 150px;';
        imgJardim.style = 'display: none';
        matCadeira.style = 'display: block';
    }
    else if (comboCadeira.value == 0) {
        imgPraia.style = 'display: none';
        imgJardim.style = 'display: none;';
        matCadeira.style = 'display: none';
    }
    else {
        tipoCadeira = 'jardim';
        imgPraia.style = 'display: none';
        imgJardim.style = 'display: block; width: 150px;';
        matCadeira.style = 'display: block';
    }
}

// MATERIAL DA CADEIRA
function material() {
    materialCadeira = matCadeira.value;
    qCadeiras.style = 'display: block';
}

// CALCULANDO PELO MATERIAL DA CADEIRA X QUANTIDADE
function calcular() {
    qtdCadeiras = Number(nCadeiras.value);
    var resp = 0;

    if ((qtdCadeiras.value) <= 0) {
        alert("A quantidade deve ser maior que 0!");
        nCadeiras.value = '';
    }
    else {
        // ATRIBUINDO O VALOR DE ACORDO COM O MATERIAL E TIPO DA CADEIRA
        if (materialCadeira == 'aluminio' && tipoCadeira == 'praia'){
            resp = 75 * qtdCadeiras;
        }
        else if (materialCadeira == 'plastico' && tipoCadeira == 'praia') {
            resp = 50 * qtdCadeiras;
        }
        else if (materialCadeira == 'ferro' && tipoCadeira == 'praia') {
            resp = 80 * qtdCadeiras;
        }
        else if (materialCadeira == 'aluminio' && tipoCadeira == 'jardim') {
            resp = 70 * qtdCadeiras;
        }
        else if (materialCadeira == 'plastico' && tipoCadeira == 'jardim') {
            resp = 35 * qtdCadeiras;
        }
        else {
            resp = 55 * qtdCadeiras;
        }

        // DESCONTO DE 3%
        if (qtdCadeiras > 50) {
            resp -= (resp * 0.03);
        }

        // DESCONTO UNITARIO PGTO. À VISTA
        desconto = 0;
        console.log(resp);
        materialCadeira == 'aluminio' ? desconto = resp * 0.035 : desconto = resp * 0.05;
        respDesconto = resp - desconto;
        materialCadeira == 'aluminio' ? desco = 3.5 : desco = 5;
        

        respCalculo.innerHTML = `<p>O orçamento para a compra de <b>${qtdCadeiras}</b> <i>cadeira(s) de ${tipoCadeira}</i> de <i>${materialCadeira}</i> é R$ <b>${resp.toFixed(2)}</b></p>
                                <p>Para pagamento a vista o desconto é de <b>${desco}%</b> e seu pedido ficará por R$ <b>${respDesconto.toFixed(2)}</b></p>`;        
    }
}
