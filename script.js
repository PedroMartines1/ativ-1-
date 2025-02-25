
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = {
        nome,
        email,
        senha
    };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    document.getElementById('cadastroForm').reset();
});


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginSenha = document.getElementById('loginSenha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === loginEmail && usuario.senha === loginSenha);

    if (usuarioEncontrado) {
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais inválidas.');
    }

    document.getElementById('loginForm').reset();
});


document.getElementById('buscarBtn').addEventListener('click', function () {
    const emailBusca = prompt('Digite o email do usuário para buscar:');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === emailBusca);

    if (usuario) {
        alert(`Usuário encontrado: ${usuario.nome}`);
    } else {
        alert('Usuário não encontrado.');
    }
});


document.getElementById('editarBtn').addEventListener('click', function () {
    const emailBusca = prompt('Digite o email do usuário para editar:');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === emailBusca);

    if (usuario) {
        const novoNome = prompt('Digite o novo nome:', usuario.nome);
        const novaSenha = prompt('Digite a nova senha:', usuario.senha);
        usuario.nome = novoNome;
        usuario.senha = novaSenha;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Usuário editado com sucesso!');
    } else {
        alert('Usuário não encontrado.');
    }
});


document.getElementById('apagarBtn').addEventListener('click', function () {
    const emailBusca = prompt('Digite o email do usuário para apagar:');
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios = usuarios.filter(u => u.email !== emailBusca);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário apagado com sucesso!');
});
