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
    
    filmes.forEach(filme => {
        const card = criarCards(filme)
        
        card.onclick = function(){
            let idFilme = (filme.id)
            passarDadosFilme(idFilme)
        }    
        container.appendChild(card)    
    });

    filmes.forEach(filme => {
        const card = criarCards(filme)
        card.onclick = function(){
            passarDadosFilme(filme)
        }  
        container2.appendChild(card)       
    });
}

function passarDadosFilme(idFilme){
   localStorage.setItem('dadosFilme', JSON.stringify(idFilme))
   window.location.href = "../pag-home.html"
}

mostrarCards()

