let cadastro = [{
    nome: 'Fabio',
    email: 'fabioemail@hotmail.com',
    idade: 29
}, {
    nome: 'Eduarda',
    email: 'eduardaemail@hotmail.com',
    idade: 28
}, {
    nome: 'Roberto',
    email: 'robertoemail@hotmail.com',
    idade: 33
}];
let input = '';
let salvar = '';

console.log('Olá. Você está fazendo uma busca em um banco de dados de um cadastro.');
console.log('Digite um email válido para verificar se o usuário está cadastrado.');
console.log('Ou digite "Sair" para finalizar a busca.');

process.stdin.on('data', function (data) {
    input = data.toString().trim();

    if (input == 'Sair' || input == 'sair') {
        process.exit();
    }

    for (let i = 0; i < cadastro.length; i++) {
        if (cadastro[i].email === input) {
            salvar = cadastro[i];
        }
    }

    if (salvar) {
        console.log('Essa pessoa está cadastrada.');
        console.log('Se quiser finalizar a busca basta digitar "Sair".');
        salvar = '';
    } else {
        console.log('Essa pessoa não foi encontrada.');
        console.log('Se quiser finalizar a busca basta digitar "Sair".');
        salvar = '';
    }
})