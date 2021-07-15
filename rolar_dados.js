
// aqui abaixo criei uma arrow function que simula a soma de dois dados aleatorios
const rolarDados = () => Math.floor(Math.random() * (6 - 1 + 1)) + 1 + Math.floor(Math.random() * (6 - 1 + 1)) + 1;

const local = document.querySelector("#div_1");
const rolar = () => {

    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // pq 11 zeros ? porque eu quero eu nao jogo somente um dado, eu jogo a partir de 2, assim pra chegar ao 12 sao 11 posições
    let resultado = 0

    for (let i = 1; i <= 1000; i++) {
        resultado = rolarDados();
        count[resultado - 2] = count[resultado -  2] + 1;    
    }

    return count;
}


const resultadosDados = () => {

    let result = rolar();
    console.log(result);

    for (let i = 0; i < result.length; i ++) {
        const div = document.createElement('div');
        div.innerText = `${i + 2} : ${result[i]}`;
        div.style.backgroundColor = "orange";
        div.style.width = `${result[i] * 5}px`;
        local.appendChild(div);
    }
}

resultadosDados()





