// variables
let amigos = []; //crea el array
let nombre = ''; //inicializa
let amigoSecreto = ''; //inicializa

function agregarAmigo(){
    //obtiene el valor
    let nombre = document.querySelector('#amigo').value;

    //si no hay nada, pide un nombre y si hay lo agrega a la lista
    if (nombre == ''){
        alert('Por favor, inserte un nombre.');
        console.log(amigos);
    }else{
        amigos.push(nombre);
    }

    //reestablece el campo
    limpiarCaja();
    
    //para ver la lista en la consola
    console.log(amigos);

    //actualiza la lista de amigos 
    agregarLista(amigos);
   
}

function limpiarCaja(){
   document.querySelector('#amigo').value = '';
}

function agregarLista(valores){
    //selecciona la lista <ul> y la borra
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i=0; i<valores.length; i++){
        //crea el <li>
        const nuevoElemento = document.createElement('li');

        //le pone el texto
        nuevoElemento.innerHTML = valores[i];

        //lo agrega a la lista
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo(){
    //valida si hay amigos
    if (amigos.length == 0){
        alert('Ingresa los amigos para realizar el sorteo');
        return;
    }

    //hace el sorteo
    let maximo = amigos.length;
    i = Math.floor(Math.random()*maximo);
    amigoSecreto = amigos[i];

    // selecciona la lista <ul> y la borra por completo
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    //selecciona la lista <ul> resultado
    const resultado = document.getElementById('resultado');

    //crea el <li>
    const nuevoElemento = document.createElement('li');

    //le pone texto 
    nuevoElemento.innerHTML = `Tu amigo secreto es ${amigoSecreto}`;

    //lo agrega a la lista
    resultado.appendChild(nuevoElemento);
}
