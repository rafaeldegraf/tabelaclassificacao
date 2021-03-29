if (typeof tabelaJogadores !== 'null'){
var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}
var rafa = {
  nome: "Rafa",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i=0; i< jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    html += "<td><button onClick='zerarPlacar(" + i + ")'>Zerar</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  //console.log("clicou no botao vitória")
  var jogador = jogadores[i]
  jogador.vitorias = jogador.vitorias + 1
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}
function adicionarEmpate(i){
  //console.log("clicou no botao empate")
  for(var i = 0; i < jogadores.length; i++){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
}
function adicionarDerrota(i){
  //console.log("clicou no botao derrota")
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}
 function zerarPlacar(i){
  //console.log("clicou no botao zerar")
  var jogador = jogadores[i]
  jogador.vitorias = 0
  jogador.empates = 0 
  jogador.derrotas = 0
  jogador.pontos = 0
  exibirJogadoresNaTela(jogadores)
}
}
