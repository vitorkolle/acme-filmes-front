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
            let filmeJson = {
                "nome": filme.nome,
                "sinopse": filme.sinopse,
                "duracao": filme.duracao,
                "data_lancamento": filme.data_lancamento,
                "data_relancamento": filme.data_relancamento,
                "foto_capa": filme.foto_capa,
                "valor_unitario": filme.valor_unitario
            }
            passarDadosFilme(filmeJson)
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

function passarDadosFilme(filmeJson){
   localStorage.setItem('dadosFilme', filmeJson)
   window.location.href = "../pag-home.html"
}

mostrarCards()

