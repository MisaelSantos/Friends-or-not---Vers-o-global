const nome = document.querySelector('input.name');
const fazer = document.querySelector('input.todo');
const onde = document.querySelector('input.onde');
const btn = document.querySelector('div div form button');

btn.onclick = () => {
    if (nome.value !== '' && fazer.value !== '' & onde.value !== '') {
        if (confirm('Combinação do texto gerado, clique para copiar!'))
            var texto = 'Hey, ' + nome.value + ', como vai?(Espero que bem😉).' + ' Talvez posso ser meio precipitado, mas venho fazer esse humilde convite, eu sei que você gosta de ' + fazer.value + '😄' +
                ', então vamos praticar! no horário que estiver disponível(eu também).' +
                ' Se caso topar, eu te encontro na ' + onde.value + ', bora viver esse momento?😎 ' +
                'Aguardo sua resposta...';
        var dummy = document.createElement("input");
        //dummy.style.display = 'none'
        document.body.appendChild(dummy);
        //$(dummy).css('display','none');
        dummy.setAttribute("id", "dummy_id");
        //dummy.setAttribute('value', document.URL + '; ' + document.title)
        dummy.setAttribute('value', texto) //TEXTX is the value of variable
            //document.getElementById("dummy_id").value=val;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

    } else {
        alert('Preencha todos os campos');
    }
}