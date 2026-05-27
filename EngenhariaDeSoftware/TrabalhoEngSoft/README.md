# Voz Segura 💜
> **Sistema de Apoio ao Enfrentamento da Violência contra a Mulher**

**Equipe:** Eric Assis e José Raimundo

O **Voz Segura** é uma aplicação desenvolvida com o objetivo de auxiliar no combate à violência contra a mulher e na prevenção ao feminicídio. O projeto foi idealizado para atender às necessidades do **Instituto Voz da Mulher** (cliente fictício) e estruturado pela equipe **SafeTech Solutions**, aplicando as melhores práticas de Engenharia de Software e metodologias ágeis (Scrum/Trello).

Este sistema visa oferecer um canal seguro, acessível, confidencial e em estrita conformidade com a **Lei Geral de Proteção de Dados (LGPD)**, servindo como uma ferramenta de acolhimento e socorro rápido em situações de risco.

---

## 🎯 Funcionalidades Principais

*   **🚨 Botão de Emergência (SOS):** Um botão de acionamento imediato visível em todas as telas da aplicação. Permite alertar a polícia militar (190) ou enviar uma mensagem de socorro via SMS para os contatos cadastrados de forma instantânea. **Funciona de forma independente, mesmo sem login ativo.**
*   **🔒 Cadastro e Autenticação Seguros:** Sistema de cadastro de usuárias individuais e login com senhas criptografadas, garantindo isolamento total de dados entre os perfis.
*   **📞 Contatos de Emergência:** Cadastro estruturado de até 5 contatos de confiança (nome, e-mail, endereço e telefone) vinculados à conta da usuária.
*   **📝 Registro Confidencial de Denúncias:** Formulário para registrar ocorrências contendo data, tipo de violência (física, psicológica, moral, patrimonial ou sexual), descrição dos fatos, nome do agressor e parentesco. Visando à integridade do processo, **uma denúncia registrada não pode ser editada ou excluída pela usuária**.
*   **📖 Informação e Rede de Apoio:** Páginas de conteúdo educativo sobre violência de gênero, orientações legais e canal de apoio com acesso a atendimento psicológico online.

---

## 🛠️ Stack Tecnológica

O protótipo funcional do sistema foi construído visando leveza, responsividade e rapidez nas transições de telas (requisito não funcional de tempo de resposta menor que 3 segundos):

*   **Interface:** HTML5 e Vanilla CSS3 (estilização responsiva para celulares e computadores).
*   **Lógica de Interações:** JavaScript puro (ES6+).
*   **Monitoramento de Qualidade:** Integração com a SDK do **Sentry** para monitoramento de exceções e erros em produção em tempo real.


---

## 📂 Estrutura do Repositório

O repositório está organizado de forma a separar os códigos do protótipo funcional, as documentações do projeto e as modelagens de engenharia de software:

```text
├── VozSegura/                     # Código-fonte da aplicação protótipo
│   ├── cadastro.html              # Tela de cadastro de usuária
│   ├── contato.html               # Tela de contatos de emergência
│   ├── denuncia.html              # Formulário de registro de denúncias
│   ├── emergencia.html            # Tela de envio de ajuda / SOS
│   ├── index.html                 # Página inicial (boas-vindas)
│   ├── info.html                  # Guia informativo e de rede de apoio
│   ├── login.html                 # Tela de login/autenticação
│   ├── menu.html                  # Dashboard e menu principal de navegação
│   ├── relatorio.html             # Listagem/Histórico de denúncias
│   ├── style.css                  # Estilização global da interface
│   └── script.js                  # Lógica de validações e simulações (com Sentry)
│
├── Diagrama Casos de uso.png      # Diagrama Geral de Casos de Uso (UML)
└── Diagrama de classes.png        # Diagrama de Classes UML (Domínio)
```

---

## 📐 Engenharia e Modelagem de Software

A concepção do projeto seguiu um processo rígido de especificação técnica e modelagem UML:

1.  **Casos de Uso:** Mapeamento de interações críticas como Cadastrar Conta (UC01), Realizar Login (UC02), Acionar SOS (UC03), Registrar Denúncia (UC04) e Cadastrar Contato (UC05).
2.  **Modelo de Dados:** Estruturado com a entidade pai **Usuária** exercendo centralidade sobre as tabelas filhas (Contatos, Denúncias e Pedidos de Ajuda) com regras em cascata para atualizações.
3.  **Diagrama de Classes:** Define a arquitetura interna do domínio orientada a objetos das principais entidades do sistema.

---

## 🧪 Política de Testes e Qualidade

*   **Testes de Caixa Preta:** Validações de entrada em todos os formulários (impedindo campos vazios, dados incorretos ou e-mails duplicados).
*   **Resiliência no SOS:** O fluxo de emergência foi modelado para prever falhas de rede, armazenando o status da solicitação localmente em caso de falta de conexão.
*   **Monitoramento de Erros:** Utilização do Sentry para capturar de forma proativa bugs em produção (falhas em requisições, logins ou envios de formulários), aumentando a estabilidade do produto final.

---

## 🚀 Como Rodar o Protótipo Localmente

Por ser uma aplicação web baseada em arquivos estáticos (HTML/CSS/JS), a execução é simples:

1.  Faça o clone deste repositório ou baixe os arquivos da pasta `VozSegura`.
2.  Abra o diretório `VozSegura` no seu computador.
3.  Dê um duplo clique no arquivo `index.html` para abrir a aplicação no seu navegador de preferência.
4.  Opcionalmente, você pode rodar um servidor local simples no diretório da aplicação:
    ```bash
    # Se você possuir Python instalado
    python -m http.server 8000
    ```
    Depois, acesse `http://localhost:8000` em seu navegador.

---

## 👥 Equipe

*   **Eric Assis** — Análise e Desenvolvimento de Sistemas
*   **José Raimundo** — Ciência da Computação

---

## 🎓 Contexto Acadêmico

Este projeto foi apresentado como requisito parcial para a aprovação na disciplina de **Engenharia de Software** em 2026, sob orientação do **Prof. Msc. Heleno Cardoso**.
