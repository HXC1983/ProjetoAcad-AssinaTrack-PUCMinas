# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01 –  Consultores de Assinaturas Digitais</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Nós Consultores de Assinaturas Digitais somos pessoas diversas que contratam serviços digitais, como streaming, cursos online, aplicativos de música e ferramentas de trabalho.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
1. Visualizar de forma clara e rápida todos os serviços contratados, para ter uma noção do que tenho na minha “carteira” de serviços digitais.
  
2. Receber alertas sobre renovações e cobranças futuras, para manter ou cancelar assinaturas antes que as mesmas sejam renovadas.
  
3. Obter relatórios simples e visuais sobre gastos mensais e anuais.
  
4. Planejar o orçamento evitando desperdícios e cobranças inesperadas.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários
Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Consultor de assinaturas digitais | Desejo visualizar todas as minhas assinaturas em um único painel, para ter controle do que estou pagando. | Para que eu consiga gerenciar minhas finanças sem perder muito tempo. |
| Consultor de assinaturas digitais | Relatórios simples sobre quanto gasto em assinaturas. | Preciso organizar meu orçamento e evitar desperdícios.|
| Consultor de assinaturas digitais | Quero receber sugestões de serviços pouco utilizados. | Para cancelar ou ajustar assinaturas.|
| Consultor de assinaturas digitais | Quero registrar e atualizar rapidamente informações sobre minhas assinaturas. | Para manter todos os dados corretos e evitar erros de cobrança.|

## Requisitos

### Requisitos Funcionais

| ID    | Descrição                | Prioridade |
|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| RF-01 | A aplicação deve permitir que a pessoa usuária crie um cadastro com dados básicos (nome, e-mail e senha) para acessar todas as funções do sistema. |ALTA|
| RF-02 | A aplicação deve permitir que a pessoa usuária acesse sua conta por meio da tela de login, fornecendo e-mail e senha, podendo visualizar a senha, recuperar o acesso através da opção “Esqueci a senha” e navegar para a tela de cadastro caso ainda não possua uma conta.  |ALTA|
| RF-03 | A aplicação deve permitir que a pessoa usuária cadastre suas assinaturas, informando o nome do serviço, o valor e a data de renovação, além de possibilitar a consulta, edição e exclusão dessas informações quando necessário. |ALTA|
| RF-04 | A aplicação deve permitir o usuário criar uma nova senha. |ALTA|
| RF-05 | O aplicativo deve registrar as alterações feitas nas assinaturas, armazenando data e hora da modificação (histórico de alterações). |MEDIA|
| RF-06 | A aplicação deve permitir que a pessoa usuária organize suas assinaturas em categorias, como streaming, música, academia ou qualquer outro grupo que desejar. |MEDIA|
| RF-07 | A aplicação deve ter uma ferramenta de pesquisa que permita encontrar assinaturas pelo nome do serviço e aplicar filtros, como valor, categoria ou se o pagamento está em dia ou atrasado. |ALTA|
| RF-08 | A aplicação deve disponibilizar um sistema de lembretes e alertas personalizados, permitindo que a pessoa usuária configure com quantos dias de antecedência deseja ser notificada sobre cobranças, além de receber avisos para adicionar novas assinaturas ou regularizar assinaturas não cadastradas. |ALTA|
| RF-09 | A aplicação deve gerar relatórios que mostram, por mês e por ano, quanto foi gasto em cada categoria de assinatura, ajudando a pessoa usuária a acompanhar seus gastos. |ALTA|
| RF-10 | O aplicativo deve oferecer um painel resumido (dashboard) com os principais gastos do mês, próximos pagamentos e assinaturas ativas, de forma visual e simples. |ALTA|
| RF-11 | A aplicação deve permitir que a pessoa usuária gerencie seu perfil, podendo visualizar, editar e salvar seus dados pessoais, atualizar ou remover a foto de perfil e excluir sua conta, garantindo acesso apenas para usuários autenticados. |ALTA|
| RF-12 | O aplicativo deve integrar-se a serviços externos (e-mail, WhatsApp, calendário) para enviar notificações e lembretes automáticos sobre cobranças, renovação de assinaturas e sugestões baseadas no histórico de uso do usuário. |ALTA|
| RF-13 | A aplicação deve permitir que o usuário recupere sua senha por meio de um código de verificação enviado ao endereço de e-mail cadastrado. |ALTA|
| RF-14 | A aplicação deve ter uma tela HOME, que faça uma apresentação das funcionalidades do sistema e permita o usuario se direcionar a tela de login. |ALTA|
| RF-15 | A aplicação deve fornecer ao usuario as principais assinaturas da atualidade, fornecendo o valor mensal atualizado e um link direto para a pagina de cada assinatura, dando ao usuario um facil acesso as informações e links dessas assinaturas.|ALTA|
 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | O sistema deve responder em até 2 segundos quando a pessoa usuária pesquisar uma assinatura. |ALTA| 
| RNF-02 | Relatórios devem ser gerados com menos de 5 segundos mesmo com centenas de assinaturas. |ALTA|
| RNF-03 | O sistema deve ser capaz de aumentar a capacidade de usuários e dados sem comprometer o desempenho. |ALTA|
| RNF-04 | O sistema deve otimizar o uso de memória e recursos para manter desempenho estável mesmo com grande volume de dados. |ALTA|
| RNF-05 | O sistema deve limitar o número de tentativas de login incorretas consecutivas, prevenindo ataques de força bruta. |ALTA|
| RNF-06 | O sistema deve garantir o cumprimento da LGPD, protegendo a privacidade e os dados pessoais da pessoa usuária. |ALTA|
| RNF-07 | Em caso de falha, o sistema deve possuir mecanismo de recuperação automática ou backup. |ALTA|
| RNF-08 | O sistema deve registrar logs de atividades críticas, como login e alterações de assinaturas, garantindo rastreabilidade. |MÉDIA|
| RNF-09 | O sistema deve ser simples e fácil de usar, mesmo para usuários iniciantes, apresentando uma interface clean e organizada. |ALTA|
| RNF-10 | A documentação do sistema deve ser mantida atualizada, incluindo fluxos, APIs, banco de dados e telas, para auxiliar futuras manutenções. |ALTA|
| RNF-11 | O sistema deve ser desenvolvido de forma organizada e documentada, permitindo futuras manutenções, atualizações ou correções rápidas e de fácil entendimento. |ALTA|
| RNF-12 | O sistema deve possuir mecanismos de teste automatizados para verificar a integridade após atualizações ou correções. |ALTA|
| RNF-13 | O sistema deve funcionar em diferentes dispositivos, bem como em diversos sistemas operacionais, incluindo Windows, Android e iOS, sem necessidade de alterações. |ALTA| 


