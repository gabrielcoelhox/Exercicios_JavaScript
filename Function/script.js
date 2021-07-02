// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)

console.log(`O total de caracteres é: ${totalCaracteres}`)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteúdo.

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento
}

console.log(criarElemento('li', 'verde', 'Esse é o conteudo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteúdo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const exerciciosJS = h1Titulo('Exercicios de JavaScript');
const exerciciosHTML = h1Titulo('Exercicios de HTML');

console.log(exerciciosJS, exerciciosHTML)