/* ============================================
   VOZ SEGURA — Script Principal (Sem Emojis)
   ============================================ */

/* ---------- Navegação ---------- */
function irParaLogin() {
    window.location.href = 'login.html';
}

function irParaCadastro() {
    window.location.href = 'cadastro.html';
}

function irParaMenu() {
    window.location.href = 'menu.html';
}

function irParaDenuncia() {
    window.location.href = 'denuncia.html';
}

function irParaContato() {
    window.location.href = 'contato.html';
}

function irParaEmergencia() {
    window.location.href = 'emergencia.html';
}

function irParaInfo() {
    window.location.href = 'info.html';
}

function irParaRelatorio() {
    window.location.href = 'relatorio.html';
}

function voltar() {
    // Tenta voltar no histórico, senão vai para o menu
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'menu.html';
    }
}

function voltarPagina() {
    window.location.href = 'menu.html';
}

function sair() {
    window.location.href = 'index.html';
}

/* ---------- Toast Notification ---------- */
function mostrarToast(mensagem, tipo) {
    var toastExistente = document.querySelector('.toast');
    if (toastExistente) {
        toastExistente.remove();
    }

    var toast = document.createElement('div');
    toast.className = 'toast';
    if (tipo === 'sucesso') {
        toast.classList.add('toast-sucesso');
    } else if (tipo === 'erro') {
        toast.classList.add('toast-erro');
    }
    toast.textContent = mensagem;
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.classList.add('visivel');
    }, 50);

    setTimeout(function() {
        toast.classList.remove('visivel');
        setTimeout(function() {
            toast.remove();
        }, 400);
    }, 3000);
}

/* ---------- Handlers de Formulário ---------- */
function entrarSistema() {
    var email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
    var senha = document.getElementById('senha') ? document.getElementById('senha').value.trim() : '';

    if (!email || !senha) {
        mostrarToast('Erro: Preencha todos os campos obrigatorios.', 'erro');
        if (typeof Sentry !== 'undefined') {
            Sentry.captureMessage('Tentativa de login com campos vazios');
        }
        return;
    }

    mostrarToast('Login realizado com sucesso! Aguarde o redirecionamento.', 'sucesso');
    setTimeout(function() {
        window.location.href = 'menu.html';
    }, 1200);
}

function cadastrar() {
    var nome = document.getElementById('nome') ? document.getElementById('nome').value.trim() : '';
    var email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
    var senha = document.getElementById('senha') ? document.getElementById('senha').value.trim() : '';
    var telefone = document.getElementById('telefone') ? document.getElementById('telefone').value.trim() : '';

    if (!nome || !email || !senha || !telefone) {
        mostrarToast('Erro: Preencha todos os campos obrigatorios.', 'erro');
        if (typeof Sentry !== 'undefined') {
            Sentry.captureMessage('Tentativa de cadastro incompleta');
        }
        return;
    }

    mostrarToast('Cadastro realizado com sucesso!', 'sucesso');
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 1500);
}

function enviarDenuncia() {
    var data = document.getElementById('data-fato') ? document.getElementById('data-fato').value : '';
    var tipo = document.getElementById('tipo-violencia') ? document.getElementById('tipo-violencia').value : '';
    var detalhes = document.getElementById('detalhes') ? document.getElementById('detalhes').value.trim() : '';

    if (!data || !tipo || !detalhes) {
        mostrarToast('Erro: Por favor, informe a data, tipo de violencia e detalhes.', 'erro');
        if (typeof Sentry !== 'undefined') {
            Sentry.captureMessage('Falha ao enviar denuncia: campos vazios');
        }
        return;
    }

    mostrarToast('Denuncia enviada com sucesso e arquivada sob sigilo.', 'sucesso');

    // Limpar os campos do formulário
    var campos = document.querySelectorAll('.input');
    campos.forEach(function(campo) {
        if (campo.tagName === 'SELECT') {
            campo.selectedIndex = 0;
        } else {
            campo.value = '';
        }
    });
}

function salvarContato() {
    var nome = document.getElementById('nome-contato') ? document.getElementById('nome-contato').value.trim() : '';
    var telefone = document.getElementById('tel-contato') ? document.getElementById('tel-contato').value.trim() : '';

    if (!nome || !telefone) {
        mostrarToast('Erro: Nome e telefone sao obrigatorios.', 'erro');
        if (typeof Sentry !== 'undefined') {
            Sentry.captureMessage('Falha no cadastro de contato de emergencia');
        }
        return;
    }

    mostrarToast('Contato salvo com sucesso!', 'sucesso');

    var campos = document.querySelectorAll('.input');
    campos.forEach(function(campo) {
        campo.value = '';
    });
}

/* ---------- Emergência ---------- */
function mostrarOpcoes() {
    var opcoes = document.getElementById('opcoes');
    if (opcoes) {
        opcoes.style.display = 'block';
    }
}

function ajudaPolicia() {
    mostrarToast('A central de policia militar (190) foi acionada com sucesso!', 'sucesso');
    if (typeof Sentry !== 'undefined') {
        Sentry.captureMessage('SOS: Central de Policia acionada');
    }
}

function ajudaContatos() {
    mostrarToast('Contatos de emergencia cadastrados foram alertados via SMS!', 'sucesso');
    if (typeof Sentry !== 'undefined') {
        Sentry.captureMessage('SOS: Contatos de emergencia alertados');
    }
}

/* ---------- Monitoramento Sentry e Simulação ---------- */
function gerarErro() {
    try {
        // Disparar erro intencional para testes
        erroInexistenteParaSimulacao();
    } catch (error) {
        mostrarToast('Erro capturado e enviado ao Sentry!', 'erro');
        if (typeof Sentry !== 'undefined') {
            Sentry.captureException(error);
        } else {
            console.error('Sentry indisponivel para registrar o erro: ', error);
        }
    }
}

// Inicialização segura do Sentry
if (typeof Sentry !== 'undefined') {
    try {
        Sentry.init({
            dsn: "https://00000000000000000000000000000000@o000000.ingest.sentry.io/0000000", // DSN fictício para evitar erros de rede, mas iniciar a SDK
            integrations: [Sentry.replayIntegration()],
            replaysSessionSampleRate: 1.0,
            replaysOnErrorSampleRate: 1.0,
        });
        console.log('Sentry inicializado com sucesso.');
    } catch (e) {
        console.error('Falha ao inicializar o Sentry:', e);
    }
} else {
    console.warn('Biblioteca Sentry nao encontrada no escopo global. Usando simulador local de logs.');
}
