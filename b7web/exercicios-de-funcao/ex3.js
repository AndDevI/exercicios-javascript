/* 
3. Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

// Resposta: 

let usuario = "pedro"
let senha = "1234"

function validarUsuario(usuario, senha) {
    if (usuario === 'pedro' && senha === "1234") {
        return true;
    } else {
        return false;
    }
}

let validacaoConcluida = validarUsuario(usuario, senha);
if (validacaoConcluida) {
    console.log('Acesso Concedio.')
} else {
    console.log('Acesso Negado!')
}

/* 
Forma resumida: 

let usuario = "pedro";
let senha = "1234";

function validarUsuario(usuario, senha) {
    return usuario === 'pedro' && senha === '1234';
}

console.log(validarUsuario(usuario, senha) ? 'Acesso Concedido.' : 'Acesso Negado!');

*/