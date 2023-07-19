const campoCadastro = document.getElementById('cadastros');

function meuEscopo () {
    const form = document.querySelector('form');  //seleciona os elementos como selecionaria CSS
    const resultado = document.querySelector('.resultado');

    const cadastros = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.name');
        const email = form.querySelector('.email');
        const nascimento = form.querySelector('.birthday');
        const telefone = form.querySelector('.phone');

        cadastros.push({
            name: nome.value,
            email: email.value,
            birthday: nascimento.value,
            phone: telefone.value
        });

        resultado.innerHTML += `<p>${nome.value}, ${email.value}, ${nascimento.value}, ${telefone.value}</p><br>`

        campoCadastro.classList.add("ativo");
    }
    
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();