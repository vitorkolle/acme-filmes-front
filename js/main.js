'use strict'

import { getFilme, getFilmes } from "./filmes.js"

function criarCards(filme){
    const card = document.createElement('div')
    card.classList.add('card')

    const background = document.createElement('img')
    background.src = filme.foto_capa
    background.classList.add('background')

    card.append(background)
    return card    
}

async function mostrarCards(){
    const container = document.getElementById('container')
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCards(filme)
        container.appendChild(card)
        console.log(card)        
    });
}

mostrarCards()

