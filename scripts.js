 var jogadores = []
  
  for (var i = 0; i < jogadores.length; i++) {
  
  jogadores[i].pontos = calculaPontos(jogadores[i])
}
  imprimeNaTela(jogadores)

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}


function imprimeNaTela(jogadores){
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
  imprimeNaTela(jogadores)
}
function adicionarEmpate(i){
  //console.log("clicou no botao empate")
  for(var i = 0; i < jogadores.length; i++){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    imprimeNaTela(jogadores)
  }
  
}
function adicionarDerrota(i){
  //console.log("clicou no botao derrota")
  var jogador = jogadores[i]
  jogador.derrotas++
  imprimeNaTela(jogadores)
}

  function criaJogador(nome){
  return (player = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0 })
  }
  
//jogadorNovo.nome = adicionaJogador(jogadorNovo)


function addPlayer() {
  var nomedoJogador = document.getElementById('addPlayer').value
  if (nomedoJogador == ""){
    alert("Insira um nome antes de adicionar")
  } 
  else {
    jogadores.push(criaJogador(nomedoJogador))
    imprimeNaTela(jogadores)
    document.getElementById('addPlayer').value = ""
  }
  
 }







//ver

//jogadores.push(jogadorNovo)
//jogadores.push(nomeJogador)
imprimeNaTela(jogadores)




 function zerarPlacar(i){
  //console.log("clicou no botao zerar")
  var jogador = jogadores[i]
  jogador.vitorias = 0
  jogador.empates = 0 
  jogador.derrotas = 0
  jogador.pontos = 0
  imprimeNaTela(jogadores)
}

