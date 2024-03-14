'use strict'

import { getFilme, getFilmes, deleteFilme } from "./filmes.js"

function criarCards(filme){
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = filme.foto_capa
    img.classList.add('capa')

    card.append(img)
    return card    
}

async function mostrarCards(){
    const container = document.getElementById('container')
    const container2 = document.getElementById('container2')
    const filmes = await getFilmes()

    // for (let i = 0; i < filmes.length; i++) {
    //     if(i < 5){
    //         const card = criarCards(filmes)
    //         container.appendChild(card)
    //         console.log(card)        
    //     }else if(i < 10){
    //         const card = criarCards(filmes)
    //         container2.appendChild(card)
    //         console.log()
    //     }        
    // }

    filmes.forEach(filme => {
        const card = criarCards(filme)
        container.appendChild(card)
        console.log(card)        
    });

    filmes.forEach(filme => {
        const card = criarCards(filme)
        container2.appendChild(card)
        console.log(card)        
    });
}

mostrarCards()

