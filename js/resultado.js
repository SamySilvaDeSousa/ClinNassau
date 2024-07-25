function mensagem(){
    var senha = document.getElementById('senha');
    var cpf = document.getElementById('cpf');
    const sucesso = document.getElementById('sucesso');
    const erro = document.getElementById('erro');

    if(senha.value === '' || cpf.value === ''){
    erro.style.display = 'block';
    }
    else{
        setTimeout(() => {
            senha.value = '';
            cpf.value  = '';
        }, 0);
    
        sucesso.style.display = 'block'
    }

    setTimeout(() => {
        erro.style.display = 'none';
        sucesso.style.display = 'none';
    }, 3000)
}