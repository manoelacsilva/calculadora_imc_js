const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');
let weight = document.getElementById('weight');
let height = document.getElementById('height');

function go(atualStep, proximoStep) {
    let displayNone, displayBlock;

    if (atualStep == 1) {
        displayNone = firstDiv;
    } else if (atualStep == 2) {
        displayNone = secondDiv;
    } else {
        displayNone = finalDiv;
    }

    displayNone.style.display = 'none';

    if (proximoStep == 1) {
        displayBlock = firstDiv;
    } else if (proximoStep == 2) {
        displayBlock = secondDiv;
    } else {
        displayBlock = finalDiv;
    }

    displayBlock.style.display = 'block';
}

function validate() {
    weight.style.border = 'none';
    height.style.border = 'none';

    if (!weight.value || !height.value) {
        if (!weight.value && !height.value) {
            weight.style.border = '1px solid #984447';
            height.style.border = '1px solid #984447';
        } else if (!weight.value) {
            weight.style.border = '1px solid #984447';
        } else {
            height.style.border = '1px solid #984447';
        }
    } else {
        let imc = weight.value / (height.value * height.value);

        const result = document.getElementById('resultado');

        if (imc < 18.5) {
            result.innerHTML = 'Magreza | Obesidade: 0';
            result.style.color = '#b0e1ff';
        } else if (imc >= 18.5 && imc < 25) {
            result.innerHTML = 'Normal | Obesidade: 0';
            result.style.color = '#a6ffae';
        } else if (imc >= 25 && imc < 30) {
            result.innerHTML = 'Sobrepeso | Obesidade: I';
            result.style.color = '#fffdac';
        } else if (imc >= 30 && imc < 40) {
            result.innerHTML = 'Obesidade | Obesidade: II';
            result.style.color = '#ffbf84';
        } else {
            result.innerHTML = 'Obesidade grave | Obesidade: III';
            result.style.color = '#ff9a9e';
        }

        go(2, 3);
    }
}

function limparInputs() {
    weight.value = '';
    height.value = '';
    go(3, 1);
}