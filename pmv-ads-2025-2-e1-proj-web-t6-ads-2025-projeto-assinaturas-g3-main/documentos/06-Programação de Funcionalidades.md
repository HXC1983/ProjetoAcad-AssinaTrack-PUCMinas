# Programação de Funcionalidades
Pré-requisitos: Especificação do Projeto, Metodologia, Projeto de Interface, Arquitetura da Solução











<hr>

Tela: Login
Título da funcionalidade

Tela de Autenticação do Usuário

Responsável: Douglas

Exemplo da tela de login:

<img width="700" height="800" alt="Captura de tela 2025-11-05 213742" src="https://github.com/user-attachments/assets/252fa7be-8ba6-4877-b2f1-b6ef7728f8ed" />

Requisito atendido
RF-02: A aplicação deve permitir que a pessoa usuária acesse sua conta por meio da tela de login, fornecendo e-mail e senha, podendo visualizar a senha, recuperar o acesso através da opção “Esqueci a senha” e navegar para a tela de cadastro caso ainda não possua uma conta.

Artefatos da funcionalidade

Arquivos utilizados no desenvolvimento desta tela:

login.html

login.css

login.js

Imagens externas usadas na interface (ícones das redes sociais)

Estrutura de Dados

A validação usa as informações armazenadas no localStorage
<hr>
Tela: Meu Perfil
Título da funcionalidade

Tela de Gerenciamento do Perfil do Usuário

Responsável: Douglas

<img width="700" height="800" alt="tela meu perfil" src="https://github.com/user-attachments/assets/7caf0869-2ed6-4d9e-be9e-7300b9f1939f" />

Requisito atendido

RF-11 – Gerenciamento de Perfil do Usuário
Permitir que o usuário visualize, edite e gerencie suas informações pessoais, incluindo nome, e-mail, telefone, endereço e foto de perfil.
Deve também apresentar o progresso de conclusão do perfil com base nos campos preenchidos.

Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento:

perfil.html

perfil.css

perfil.js

Estrutura de Dados

Objeto userLogado armazenado no LocalStorage

Implementação da aplicação descritas por meio dos requisitos codificados. 
<hr>

<hr>

Tela: Home  
Título da funcionalidade

Tela Inicial e Apresentação do Sistema

Responsável: Gabriel Martins

Exemplo da tela Home:

<img width="700" height="800" alt="home-secao-1" src="https://github.com/user-attachments/assets/deb0ee83-bcc7-462e-b995-3989a4eaac45" />
<img width="700" height="800" alt="home-secao-2" src= "https://github.com/user-attachments/assets/01f0d52b-27e0-4b42-a675-8aea003eadb6"/>
<img width="700" height="800" alt="home-secao-3" src= "https://github.com/user-attachments/assets/2ddabbc5-9d47-4657-9734-9fb0a1049909"/>
<img width="700" height="800" alt="home-secao-4" src= "https://github.com/user-attachments/assets/780e14f5-669e-4a79-859c-6322a2f313f6"/>

Requisito atendido  
RF-14: O aplicativo deve ter uma tela HOME, que faz uma apresentação das funcionalidades do sistema e permite que o usuário se direcione para as demais telas.

Artefatos da funcionalidade

Arquivos utilizados no desenvolvimento desta tela:

home.html  
home.css  
script.js  

Estrutura de Dados

A tela exibe textos e seções informativas sem necessidade de manipulação de dados dinâmicos, atuando como interface inicial de apresentação.

<hr>


<hr>

Tela: Pesquisa de Assinaturas  
Título da funcionalidade

Tela de Exibição das Principais Assinaturas Digitais

Responsável: Gabriel Martins

Exemplo da tela de assinaturas:

<img width="700" height="800" alt="assinaturas-secao-1" src="https://github.com/user-attachments/assets/a8dad719-4062-482c-b86e-39f63d78e3ad" />
<img width="700" height="800" alt="assinaturas-secao-2" src="https://github.com/user-attachments/assets/b36d9297-bc97-4536-b1c7-8926b82e2434" />
<img width="700" height="800" alt="assinaturas-secao-3" src="https://github.com/user-attachments/assets/2604ffff-eb35-42e1-b570-66a9cd92c32f" />

Requisito atendido  
RF-15: A aplicação deve fornecer ao usuário as principais assinaturas da atualidade, fornecido o valor mensal atualizado e um link direto para a página de cada assinatura, dando ao usuário um acesso fácil às informações e links dessas assinaturas.

Artefatos da funcionalidade

Arquivos utilizados no desenvolvimento desta tela:

index.html  
style.css  
script.js  
robô.js  

Estrutura de Dados

As assinaturas são exibidas dinamicamente por meio de dados obtidos via API e complementados com informações provenientes do JSON gerado pelo robô de coleta de preços.

<hr>

Tela: Criar Conta
Título da funcionalidade

Tela de Criação de Conta do Usuário

Responsável: Hugo Castro

Exemplo da tela Criar Conta: 


<img width="900" height="1000" alt="Print_Tela Criar Conta" src="https://github.com/user-attachments/assets/d3dbe437-9b30-4c19-bd72-eb8355f1523f" />


Requisito atendido

RF-01 – A aplicação deve permitir que a pessoa usuária crie um cadastro com dados básicos (nome, e-mail e senha) para acessar todas as funções do sistema. |ALTA|

Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento: Localizados na pasta codigo-fonte --> Criar Conta-Hugo

index.3.html

style.css

script.js

Estrutura de Dados

Objeto userLogado armazenado no LocalStorage

Implementação da aplicação descritas por meio dos requisitos codificados. 

<hr>

Tela: Criar Nova Senha
Título da funcionalidade

Tela de Criação de Nova Senha do Usuário

Responsável: Hugo Castro

Exemplo da tela Criar Conta: 

<img width="1864" height="1036" alt="Print_Tela_Criar Nova Senha" src="https://github.com/user-attachments/assets/c5db0451-3741-457c-8b34-03ba6de25f2c" />

Requisito atendido

RF-04 –  A aplicação deve permitir o usuário criar uma nova senha. |ALTA|

Artefatos da funcionalidade

Arquivos relacionados ao desenvolvimento: Localizados na pasta codigo-fonte --> Criar Nova Senha

index.html

style.css

script.js

Estrutura de Dados

Objeto userLogado armazenado no LocalStorage

Implementação da aplicação descritas por meio dos requisitos codificados. 

<hr>

Tela: Recuperar Senha (RF-13)

Título da funcionalidade:
Recuperar Senha

Responsável: Arthur

O acesso a tela de Recuperar Senha poderá ser feito através da opção de “Esqueci a senha”.

Exemplo da tela de recuperar senha:

<img width="1913" height="907" alt="image" src="https://github.com/user-attachments/assets/74498e49-2294-4c05-b08c-5b499f2ad2a5" />

Requisito atendido

RF-13	A aplicação deve permitir que o usuário recupere sua senha por meio de um código de verificação enviado ao endereço de e-mail cadastrado.	ALTA

Artefatos da funcionalidade

index.html

style.css

script.js

A validação do e-mail usa as informações armazenadas no localStorage e foi usado o EmailJS para o envio da mensagem ao e-mail do usuário.

<hr>

Tela: Código de Recuperação de Senha (RF-13)

Título da funcionalidade:
Digite o código enviado

Responsável: Arthur

O acesso a tela do Código de Recuperação é concedido ao colocar um e-mail válido na tela de recuperar senha.

Exemplo da tela do código de recuperação:

<img width="1913" height="907" alt="image" src="https://github.com/user-attachments/assets/35fd1013-d38d-453a-987f-5e30a3e41d04" />

Requisito atendido

RF-13	A aplicação deve permitir que o usuário recupere sua senha por meio de um código de verificação enviado ao endereço de e-mail cadastrado.	ALTA

Artefatos da funcionalidade

index.html

style.css

script.js

A validação do código usa as informações armazenadas no localStorage

<hr>

Exportar Relatórios de Minhas Assinaturas (RF-09)

Título da funcionalidade:
Exportar Relatórios

Responsável: Arthur

O acesso a funcionalidade de Exportar Relatórios é feito através da tela de Minhas Assinaturas.

Exemplo da funcionalidade de Exportar Relatórios:

<img width="1896" height="908" alt="image" src="https://github.com/user-attachments/assets/09b7390f-395e-417d-97c5-ceb0b37a41c4" />

Requisito atendido

RF-09	A aplicação deve gerar relatórios que mostram, por mês e por ano, quanto foi gasto em cada categoria de assinatura, ajudando a pessoa usuária a acompanhar seus gastos.

Artefatos da funcionalidade

minhas-assinaturas.html

style.css

relatorio.js

Instruções de Acesso

1. Ao acessar a tela de "Minhas Assinaturas" e adicionar suas assinaturas clique em "Exportar Relatórios".
2. Selecione o formato desejado do relatório Excel ou PDF.
3. Após clciar em uma das opções será feito o download do relatório.

<hr>

