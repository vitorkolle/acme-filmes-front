'use strict'

import { getFilme, getFilmes } from "./filmes.js"

function criarCard(filme){
    const card = document.createElement('div')
    card.classList.add('card')
    const titulo = document.createElement('h2')
    titulo.classList.add('titulo')
    const texto = document.createElement('p')
    texto.classList.add('texto')
    const background = document.createElement('img')
    background.classList.add('background')
    background.src = filme.foto_capa
    titulo.textContent = filme.nome
    texto.textContent = filme.sinopse
    card.append(titulo, texto, background)
    
    return card
}

async function preencherContainer(){
    const container = document.getElementById('container')
    const filmes = await getFilmes()
    
    filmes.forEach(filme => {
        const card = criarCard(filme) 
        container.appendChild(card)
        console.log(card)           
    });

}

preencherContainer()