
var hogwarts = document.getElementById('hogwarts');
hogwarts.addEventListener('change', function () {

    var casa = hogwarts.value;

    switch (casa) {
        case "gry":
            var caracte = document.getElementById('caracte');

            for (var i = caracte.children.length - 1; i >= 0; i--) {
                caracte.removeChild(caracte.children[i]);
            }

            var op0 = document.createElement('option');
            op0.innerHTML = 'Selecione uma característica'
            caracte.appendChild(op0);

            var op1 = document.createElement('option');
            op1.innerHTML = 'Coragem';
            op1.value = 'co';
            caracte.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Lealdade'
            op2.value = 'lea'
            caracte.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Teimosia'
            op3.value = 'tei'
            caracte.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Espirito Aventureiro'
            op4.value = 'epa'
            caracte.appendChild(op4);
            break;

        case "sly":
            var caracte = document.getElementById('caracte');


            for (var i = caracte.children.length - 1; i >= 0; i--) {
                caracte.removeChild(caracte.children[i]);
            }

            var op0 = document.createElement('option');
            op0.innerHTML = 'Selecione uma característica'
            caracte.appendChild(op0);

            var op1 = document.createElement('option');
            op1.innerHTML = 'Ambição';
            op1.value = 'amb';
            caracte.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Angústia'
            op2.value = 'ang'
            caracte.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Inteligência'
            op3.value = 'int'
            caracte.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Determinação'
            op4.value = 'det'
            caracte.appendChild(op4);
            break;


        case "rav":
            var caracte = document.getElementById('caracte');

            for (var i = caracte.children.length - 1; i >= 0; i--) {
                caracte.removeChild(caracte.children[i]);
            }

            var op0 = document.createElement('option');
            op0.innerHTML = 'Selecione uma característica'
            caracte.appendChild(op0);

            var op1 = document.createElement('option');
            op1.innerHTML = 'Curioso';
            op1.value = 'cur';
            caracte.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Sábio'
            op2.value = 'sab'
            caracte.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Perspicaz'
            op3.value = 'per'
            caracte.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Inteligente'
            op.value = 'int'
            caracte.appendChild(op4);
            break;

        case "huf":
            var caracte = document.getElementById('caracte');

            for (var i = caracte.children.length - 1; i >= 0; i--) {
                caracte.removeChild(caracte.children[i]);
            }

            var op0 = document.createElement('option');
            op0.innerHTML = 'Selecione uma característica'
            caracte.appendChild(op0);

            var op1 = document.createElement('option');
            op1.innerHTML = 'Lealdade';
            op1.value = 'lea';
            caracte.appendChild(op1);

            var op2 = document.createElement('option');
            op2.innerHTML = 'Dedicação'
            op2.value = 'ded'
            caracte.appendChild(op2);

            var op3 = document.createElement('option');
            op3.innerHTML = 'Paciência'
            op3.value = 'pac'
            caracte.appendChild(op3);

            var op4 = document.createElement('option');
            op4.innerHTML = 'Jogo Limpo'
            op4.value = 'jgl'
            caracte.appendChild(op4);
            break;
    }
});



var formulario = document.getElementById("formulario");
var hogwartsSelect = document.getElementById("hogwarts");
var caracteSelect = document.getElementById("caracte");
var personagemInput = document.getElementById("personagem");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    var SelectCasaHog = hogwartsSelect.options[hogwartsSelect.selectedIndex].text;
    var selectCaracter = caracteSelect.options[caracteSelect.selectedIndex].text
    var NomePersonagem = personagemInput.value;

    if (!SelectCasaHog || !selectCaracter || !NomePersonagem) {
        alert("Trouxa! Preencha todos os campos antes de enviar.");
        return;
    }

    var PreencherDiv = document.createElement("div");
    PreencherDiv.className = "item-container";

    var TextoEnviado = document.createElement("span");
    TextoEnviado.textContent = ` ${SelectCasaHog} -  ${selectCaracter} - ${NomePersonagem}`;

    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => {

        var NovaCasaHog = prompt("Digite o nome da nova casa:", SelectCasaHog);
        var NovaCaracter = prompt("Digite uma característica dessa casa:", selectCaracter);
        var NovoNome = prompt("Digite o nome de um personagem que pertence a essa casa:", NomePersonagem);
        
        if (NovoNome) {
            TextoEnviado.textContent = `${NovaCasaHog} - ${NovaCaracter} - ${NovoNome}`;
        }
    });

    var btnDeletar = document.createElement("button");
    btnDeletar.textContent = "X";
    btnDeletar.addEventListener("click", () => {
        listarItens.removeChild(PreencherDiv);
    });

    PreencherDiv.appendChild(TextoEnviado);
    PreencherDiv.appendChild(btnEditar);
    PreencherDiv.appendChild(btnDeletar);

    listarItens.appendChild(PreencherDiv);

    hogwartsSelect.selectedIndex = 0;
    caracteSelect.innerHTML = "";
    personagemInput.value = "";
});
