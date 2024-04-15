function salvarDados(){

var nome = document.getElementBydId('nome'),value;
var email = document.getElementBydId('email'),value;
var senha = document.getElementBydId('senha'),value;
var idade = document.getElementBydId('idade'),value;
var cidade = document.getElementBydId('cidade'),value;

var usuario ={
    nome: nome,
    email: email,
    senha: senha,
    idade: idade,
    cidade: cidade
}

console.log(usuario);

}