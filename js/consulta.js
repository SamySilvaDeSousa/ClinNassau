function mensagem(){
    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var email = document.getElementById('email');
    var data = document.getElementById('data');
    var medico = document.getElementById('medico');
    var servico = document.getElementById('servico');
    const sucesso = document.getElementById('sucesso');
    const erro = document.getElementById('erro');

    if(nome.value === '' || cpf.value === '' || email.value === '' ||
    data.value === '' || medico.value === 'escolha' || servico.value === 'escolha'  ){
    erro.style.display = 'block';
    }
    else{
        setTimeout(() => {
            nome.value = '';
            cpf.value  = '';
            email.value = '';
            data.value = '';
            medico.value = 'escolha';
            servico.value = 'escolha';
        }, 0);
    
        sucesso.style.display = 'block'
    }

    setTimeout(() => {
        erro.style.display = 'none';
        sucesso.style.display = 'none';
    }, 3000)
}