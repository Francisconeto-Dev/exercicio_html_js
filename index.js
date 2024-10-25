const form = document.getElementById('form1');
const numA = document.getElementById('campoA');
const numB = document.getElementById('campoB');
const mensagemErro = document.getElementById('error-message');
const mensagemSucess = document.getElementById('sucess-message');

mensagemErro.style.display = 'none';
mensagemSucess.style.display = 'none';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorA = Number(numA.value);
    const valorB = Number(numB.value);

if(valorA >= valorB){
    mensagemSucess.style.display = 'none';
   mensagemErro.style.display = 'block';
   numA.style.border = '2px solid red'; 
   numB.style.border = '2px solid red'; 
}   
else{
    mensagemSucess.textContent = 'O número foi enviado com sucesso';
    mensagemSucess.style.display = 'block'
    mensagemErro.style.display = 'none';
    numA.style.border = '2px solid green';
    numB.style.border = '2px solid green';
    form.reset();
}

});

