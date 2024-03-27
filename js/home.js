'use strict'

const dadosFilme = JSON.parse(localStorage.getItem('dadosFilme'))
console.log(dadosFilme)

function criarTela(){
    const player = document.getElementById('player')
    const backPlayer = document.createElement('img')
    backPlayer.src = dadosFilme.foto_capa
    backPlayer.classList.add('background-player')
    player.append(backPlayer)

    const header = document.getElementById('header')
    const tituloFilme = document.createElement('p')
    tituloFilme.textContent = dadosFilme.nome
    tituloFilme.classList.add('titulo-filme')

    const iconeShare = document.createElement('img')
    iconeShare.src = '../img/share icon.png'
    iconeShare.classList.add('icone')

    const iconeLike = document.createElement('img')
    iconeLike.src = '../img/like icon.png'
    iconeLike.classList.add('icone')
    iconeLike.addEventListener('click', function(){
        iconeLike.src = '../img/checked like icon.png'
    })

    const sinopseFilme = document.createElement('p')
    sinopseFilme.textContent = dadosFilme.sinopse
    sinopseFilme.classList.add('sinopse')

    const divTempo = document.createElement('div')
    const imgTempo = document.createElement('img')
    imgTempo.classList.add('img-itens')
    imgTempo.src = '../img/claquete icon.png'
    const textoTempo = document.createElement('p')
    textoTempo.classList.add('texto-itens')
    textoTempo.textContent = dadosFilme.duracao[11, 12] + 'h ' + dadosFilme.duracao[13, 14] + 'm'
    divTempo.append(imgTempo, textoTempo)
    divTempo.classList.add('itens')

    const divLancamento = document.createElement('div')
    const imgLancamento = document.createElement('img')
    imgLancamento.classList.add('img-itens')
    imgLancamento.src = '../img/calendar icon.png'
    const textoLancamento = document.createElement('p')
    textoLancamento.classList.add('texto-itens')
    textoLancamento.textContent = dadosFilme.data_lancamento[0] + dadosFilme.data_lancamento[1] + dadosFilme.data_lancamento[2] + dadosFilme.data_lancamento[3]
    divLancamento.append(imgLancamento, textoLancamento)
    divLancamento.classList.add('itens')

    const divPreco = document.createElement('div')
    const imgPreco = document.createElement('img')
    imgPreco.classList.add('img-cifrao')
    imgPreco.src = '../img/cifrao icon.png'
    const textoPreco = document.createElement('p')
    textoPreco.classList.add('texto-itens')
    textoPreco.textContent = String(dadosFilme.preco_unitario)[0] + String(dadosFilme.preco_unitario)[1] + String(dadosFilme.preco_unitario)[2] + String(dadosFilme.preco_unitario)[3] + String(dadosFilme.preco_unitario)[4]
    divPreco.append(imgPreco, textoPreco)
    divPreco.classList.add('itens')


    const footer = document.getElementById('footer')
    footer.append(divTempo, divLancamento, divPreco)

    const main = document.getElementById('main')
    main.append(sinopseFilme)

    header.append(iconeShare, tituloFilme, iconeLike)
}

criarTela()
