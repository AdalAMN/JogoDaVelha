let jogador = 1;
let jogadas = 0;
let ganhou = false;

let tabuleiro = [
    9,9,9,
    9,9,9,
    9,9,9
];

const jogadores = [
    {
        id: 1,
        nome: "X"
    },
    {
        id: 2,
        nome: "O"
    }
];

function novoJogo(){
    ganhou = false;
    jogadas = 0;
    tabuleiro = [9,9,9,9,9,9,9,9,9];
    jogador = 1;
    resultado.innerHTML = "";

    for(let i = 0; i < 9; i++) {
        document.getElementById("quadrante_"+i).innerHTML = "";
        document.getElementById("quadrante_"+i).style.backgroundColor = "white";
    }

    jogador = (jogador==0) ? 1 : 0;
    document.getElementById("jogador").innerHTML = "Jogador: "+jogadores[jogador].nome;
    console.log("Jogo iniciado!");
}

function jogar(_posicao){
    if(tabuleiro[_posicao] == 9 && jogadas < 9 && !ganhou) {
        tabuleiro[_posicao] = jogadores[jogador].id;
        document.getElementById("quadrante_"+_posicao).innerHTML = jogador==0 ? "X" : "O";
        jogadas++;
        verificar(_posicao);
    }
}
    
let posicao = {
    "V1":[0, 3, 6],
    "V2":[1, 4, 7],
    "V3":[2, 5, 8],
    "H1":[0, 1, 2],
    "H2":[3, 4, 5],
    "H3":[6, 7, 8],
    "D1":[0, 4, 8],
    "D2":[2, 4, 6]
};

function verificar(__posicao){

    console.log(posicao.H1);
    switch(__posicao) {
        case 0:
            check([posicao.H1,posicao.V1,posicao.D1]);
            break;
        case 1:
            check([posicao.H1,posicao.V2]);
            break;
        case 2:
            check([posicao.H1,posicao.V3,posicao.D2]);
            break;
        case 3:
            check([posicao.H2,posicao.V1]);
            break;
        case 4:
            check([posicao.H2,posicao.V2,posicao.D1,posicao.D2]);
            break;
        case 5:
            check([posicao.V3,posicao.H2]);
            break;
        case 6:
            check([posicao.V1,posicao.H3,posicao.D2]);
            break;
        case 7:
            check([posicao.V2,posicao.H3]);
            break;
        case 8:
            check([posicao.H3,posicao.V3,posicao.D1]);
            break;
    }
}

function check(quadrantes) {
    for(let i = 0; i < quadrantes.length; i++) {
        const total = tabuleiro[quadrantes[i][0]]+tabuleiro[quadrantes[i][1]]+tabuleiro[quadrantes[i][2]];
            
        const ultimoJogador = jogadores[jogador];
        if(total < 9 && total == 3*(ultimoJogador.id)) {
            for(let j = 0; j < 3; j++) {
                document.getElementById("quadrante_"+quadrantes[i][j]).style.backgroundColor = "green";
            }
            ganhou = true;
            break;
        }
    }

    if (ganhou) {
        resultado.innerHTML = "Jogador "+jogadores[jogador].nome+" GANHOU!";
    } else if(jogadas == 9) {
        resultado.innerHTML = "Deu velha!";
    } else {
        jogador = jogador == 0 ? 1 : 0;
        document.getElementById("jogador").innerHTML = "Jogador: "+jogadores[jogador].nome;
    }
}

novoJogo();
