import { data } from "../data/data.js";
const items = document.getElementById('items');
const templatecCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = {};
let dislike = {};
document.addEventListener('DOMContentLoaded', () => {
    loadData(data)
})
const loadData = data => {
    data.forEach(personajes => {
        const { id, name, image } = personajes
        templatecCard.querySelector('h5').textContent = name
        templatecCard.querySelector('img').setAttribute('src', image)
        templatecCard.querySelector('.btn-dark').dataset.id = id
        const clone = templatecCard.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)
}
items.addEventListener('click', e => {
    addLike(e);
})
const addLike = e => {
    if (e.target.classList.contains('btn-dark')) {
        setLike(e.target.parentElement);
    }
}
const setLike = objeto => {
    const boton = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 0
    }
    if (like.hasOwnProperty(boton.id)) {
        boton.cantidad = like[boton.id].cantidad + 1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }
    like[boton.id] = { ...boton };
    console.log(like[boton.id]);
}
const disLike = objeto2 => {
    const boton = {
        id: objeto2.querySelector('.btn-dark1').dataset.id,
        cantidad: 0
    }
    if (dislike.hasOwnProperty(boton.id)){

        boton.cantidad = dislike[boton.id].cantidad + 1;
        objeto2.querySelector('#dislike').textContent = boton.cantidad;
    }
    dislike[boton.id] = { ...boton };
}
