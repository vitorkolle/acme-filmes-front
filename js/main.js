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
            const dadosFilme = {}
            dadosFilme.nome = filme.nome
            dadosFilme.sinopse = filme.sinopse
            dadosFilme.duracao = filme.duracao
            dadosFilme.data_lancamento = filme.data_lancamento
            dadosFilme.foto_capa = filme.foto_capa
            dadosFilme.preco_unitario = filme.valor_unitario       
            passarDadosFilme(dadosFilme)
        }    
        container.appendChild(card)    
    });

    filmes.forEach(filme => {
        const card = criarCards(filme)
        
        card.onclick = function(){
            const dadosFilme = {}
            dadosFilme.nome = filme.nome
            dadosFilme.sinopse = filme.sinopse
            dadosFilme.duracao = filme.duracao
            dadosFilme.data_lancamento = filme.data_lancamento
            dadosFilme.foto_capa = filme.foto_capa
            dadosFilme.preco_unitario = filme.valor_unitario       
            passarDadosFilme(dadosFilme)
        }    
        container2.appendChild(card)       
    });
}

function passarDadosFilme(dadosFilme){
   localStorage.setItem('dadosFilme', JSON.stringify(dadosFilme))
   window.location.href = "../pag-home.html"
}

mostrarCards()

