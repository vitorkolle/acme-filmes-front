'use strict'

const dadosFilme = JSON.parse(localStorage.getItem('dadosFilme'))

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

    const sinopseFilme = document.createElement('p')
    sinopseFilme.textContent = dadosFilme.sinopse
    sinopseFilme.classList.add('sinopse')

    const divTempo = document.createElement('div')
    const imgTempo = document.createElement('img')
    imgTempo.src = '../img/claquete icon.png'
    const textoTempo = document.createElement('p')
    textoTempo.textContent = dadosFilme.duracao[2] + 'h ' + dadosFilme.duracao[4] + dadosFilme.duracao[5]
    divTempo.append(imgTempo, textoTempo)
    divTempo.classList.add('itens')

    const footer = document.getElementById('footer')
    footer.append(divTempo)

    const main = document.getElementById('main')
    main.append(sinopseFilme)

    header.append(iconeShare, tituloFilme, iconeLike)
}

criarTela()
