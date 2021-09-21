/*--- SISTEMA DE CADASTRO DE EVENTOS ---*/

// VARIÁVEIS - EVENTO
let nomeEvento = "SHOW DO ZECA PAGODIN"
let dataEvento = "25/09/2021"
let dataAtual = "20/09/2021"

// VARIÁVEIS - PARTICIPANTES
let idade = 18
let convidados = 111
let musicos = 7
let total = musicos + convidados

// DESCRIÇÃO
console.log(`
EVENTO: ${nomeEvento}

Data Atual: ${dataAtual}
Data do Evento: ${dataEvento}

Idade: ${idade + " anos"}
Participantes: ${musicos} musicos e ${convidados} convidados (Total: ${total})
`)

// VALIDAÇÕES
// DATAS
if (dataEvento < dataAtual){
    console.log("!CADASTRO NÃO PERMITIDO! - DATA INVALIDA!")
}else
// IDADE
if (idade < 18){
    console.log("!CADASTRO NÃO PERMITIDO! - EVENTO PARA MAIORES DE 18 ANOS!")
} else
// PARTICIPANTES
if (total > 100){
    console.log("!CADASTRO NÃO PERMITIDO! - EVENTO LOTADO!")
} else {
    console.log("!CADASTRO CONCLUÍDO!")
}