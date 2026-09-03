<h1>Plano de Testes de Software</h1>

<span style="color:red">Pré-requisitos: 
  <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e1-proj-web-t6-ads-2025-projeto-assinaturas-g3/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md">Especificação do Projeto</a>
</span>, 
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e1-proj-web-t6-ads-2025-projeto-assinaturas-g3/blob/main/documentos/04-Projeto%20de%20Interface.md">Projeto de Interface</a>

<p>Os requisitos para realização dos testes de software são:</p>
<ul>
  <li>Site publicado na internet;</li>
  <li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

<p>Os testes funcionais a serem realizados na aplicação são descritos a seguir.</p>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-01: Verificar apresentação da tela Home e acesso à tela de login</td>
    <td>
      <ul>
        <li>RF-14: O aplicativo deve ter uma tela HOME, que faz uma apresentação das funcionalidades e permite que o usuário acesse a tela de login.</li>
      </ul>
    </td>
    <td>Verificar se a tela Home apresenta as funcionalidades do sistema e permite acessar corretamente a tela de login.</td>
    <td>
      <ol>
        <li>Abrir o navegador.</li>
        <li>Informar o endereço da aplicação no campo de URL.</li>
        <li>Aguardar o carregamento completo da tela Home.</li>
        <li>Verificar se a Home apresenta introdução, título ou seções explicativas.</li>
        <li>Identificar o botão/link para acessar a tela de login.</li>
        <li>Clicar no botão/link de acesso.</li>
        <li>Confirmar se a tela exibida é a de login.</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>A tela Home carrega sem erros.</li>
        <li>Apresenta conteúdo explicativo sobre as funcionalidades.</li>
        <li>Existe botão/link para acessar o login.</li>
        <li>O redirecionamento leva corretamente à tela de login.</li>
        <li>A tela de login exibe os campos esperados.</li>
      </ul>
    </td>
    <td>Douglas</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-02: Verificar exibição das assinaturas, valores mensais e links de acesso</td>
    <td>
      <ul>
        <li>RF-15: A aplicação deve fornecer ao usuário assinaturas atualizadas com nome, valor mensal e link para o site oficial.</li>
      </ul>
    </td>
    <td>Verificar se a página de assinaturas exibe corretamente nome, valor e link de acesso de cada assinatura.</td>
    <td>
      <ol>
        <li>Acessar a página de assinaturas.</li>
        <li>Verificar se uma lista de assinaturas é exibida.</li>
        <li>Para cada assinatura, confirmar a presença de nome, valor mensal e botão/link de acesso.</li>
        <li>Clicar em uma assinatura para testar o link.</li>
        <li>Confirmar se o site oficial abre em nova aba ou janela.</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>A página carrega sem erros.</li>
        <li>Todas as assinaturas aparecem corretamente.</li>
        <li>Nome, valor e link estão preenchidos e legíveis.</li>
        <li>O link abre o site oficial corretamente.</li>
        <li>O usuário consegue identificar rapidamente nome, preço e link.</li>
      </ul>
    </td>
    <td>Douglas</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-03: Verificar apresentação da tela de Login e funcionalidades de autenticação</td>
    <td>
      <ul>
        <li>RF-02: A aplicação deve permitir que a pessoa usuária acesse sua conta por meio da tela de login, fornecendo e-mail e senha, podendo visualizar a senha, recuperar o acesso através da opção “Esqueci a senha” e navegar para a tela de cadastro caso ainda não possua uma conta.</li>
      </ul>
    </td>
    <td>Verificar se a tela de Login é carregada corretamente e se todas as funcionalidades de autenticação (login, visualização de senha, recuperação de senha e acesso ao cadastro) funcionam conforme o especificado.</td>
    <td>
      <ol>
        <li>Abrir o navegador.</li>
        <li>Informar a URL da tela de login no campo de endereço.</li>
        <li>Aguardar o carregamento completo da tela de login.</li>
        <li>Verificar se são exibidos: logotipo da aplicação, campo de e-mail, campo de senha, ícone para visualizar/ocultar senha, link “Esqueci a senha”, link “Cadastre-se” e botão “Entrar”.</li>
        <li>Informar um e-mail válido e já cadastrado no campo de e-mail.</li>
        <li>Informar a senha correta no campo de senha.</li>
        <li>Clicar no ícone de visualização de senha e verificar se o campo alterna entre os modos de exibição de senha e texto.</li>
        <li>Clicar no link “Esqueci a senha” e verificar se o sistema redireciona para a página apropriada de recuperação de acesso.</li>
        <li>Retornar à tela de login.</li>
        <li>Clicar no link “Cadastre-se” e verificar se o sistema redireciona para a página de criação de conta.</li>
        <li>Retornar à tela de login.</li>
        <li>Clicar no botão “Entrar”.</li>
        <li>Confirmar se o usuário é redirecionado para a tela “Meu Perfil”.</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>A tela de Login é carregada sem erros.</li>
        <li>Todos os elementos essenciais (logotipo, campos, links e botão) são exibidos corretamente.</li>
        <li>O ícone de visualização de senha alterna corretamente a exibição da senha.</li>
        <li>O link “Esqueci a senha” redireciona para a tela de recuperação de acesso.</li>
        <li>O link “Cadastre-se” redireciona para a tela de criação de conta.</li>
        <li>O botão “Entrar” permite o login com credenciais válidas.</li>
        <li>Após o login, o usuário é direcionado para a tela “Meu Perfil”.</li>
      </ul>
    </td>
    <td>Gabriel</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-04: Verificar exibição, edição, atualização e gerenciamento da conta na tela Meu Perfil</td>
    <td>
      <ul>
        <li>RF-11: A aplicação deve permitir que a pessoa usuária gerencie seu perfil, podendo visualizar, editar e salvar seus dados pessoais, atualizar ou remover a foto de perfil e excluir sua conta, garantindo acesso apenas para usuários autenticados.</li>
      </ul>
    </td>
    <td>Verificar se a tela Meu Perfil permite a visualização dos dados do usuário autenticado, edição e salvamento das informações, atualização ou remoção da foto de perfil e exclusão da conta, garantindo que apenas usuários autenticados tenham acesso a essa tela.</td>
    <td>
      <ol>
        <li>Garantir que exista um usuário autenticado salvo no localStorage.</li>
        <li>Acessar a página de perfil (perfil.html).</li>
        <li>Verificar se, na ausência de usuário autenticado, o sistema redireciona automaticamente para a tela de login.</li>
        <li>Com usuário autenticado, verificar se são exibidos: foto de perfil ou placeholder, nome completo, e-mail, telefone, endereço, barra de progresso do perfil, botão “Salvar alterações” e botão “Deletar conta”.</li>
        <li>Editar os campos de nome, e-mail, telefone e endereço com novos valores.</li>
        <li>Clicar no botão “Salvar alterações”.</li>
        <li>Atualizar a página e verificar se os dados editados permanecem salvos.</li>
        <li>Clicar na área da foto de perfil para enviar uma nova imagem utilizando o campo de upload de foto.</li>
        <li>Verificar se a nova foto é exibida corretamente na tela.</li>
        <li>Se existir a funcionalidade, testar a remoção da foto de perfil e verificar se o placeholder é restaurado.</li>
        <li>Clicar no botão “Deletar conta”.</li>
        <li>Verificar se os dados do usuário são removidos do localStorage.</li>
        <li>Confirmar se o sistema redireciona o usuário para a tela de login após a exclusão da conta.</li>
        <li>Tentar acessar novamente a página de perfil sem autenticação e confirmar se ocorre redirecionamento para a tela de login.</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>A tela Meu Perfil só é acessada por usuários autenticados.</li>
        <li>Os dados pessoais do usuário são exibidos corretamente.</li>
        <li>É possível editar e salvar as informações, que permanecem consistentes após atualizar a página.</li>
        <li>A foto de perfil pode ser enviada e exibida corretamente.</li>
        <li>Caso implementado, a foto pode ser removida e o placeholder é restaurado.</li>
        <li>A barra de progresso reflete o preenchimento dos dados do perfil.</li>
        <li>O botão “Deletar conta” remove os dados do usuário e encerra a sessão.</li>
        <li>Após excluir a conta, o usuário é redirecionado para a tela de login.</li>
        <li>Não é possível acessar a página Meu Perfil sem estar autenticado.</li>
      </ul>
    </td>
    <td>Gabriel</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-05: Verificar funcionamento da tela Criar Conta</td>
    <td>
      <ul>
        <li>RF-01: O sistema deve permitir o cadastro de um novo usuário por meio da tela Criar Conta, com preenchimento de Nome, E-mail, Senha e confirmação de senha.</li>
      </ul>
    </td>
    <td>Verificar se a tela Criar Conta permite inserir os dados corretamente e criar um usuário válido.</td>
    <td>
      <ol>
        <li>Abrir o navegador.</li>
        <li>Acessar a aplicação pelo endereço de URL.</li>
        <li>Navegar até a tela Criar Conta.</li>
        <li>Inserir um nome válido no campo correspondente.</li>
        <li>Inserir um e-mail válido no campo correspondente.</li>
        <li>Inserir uma senha válida no campo correspondente.</li>
        <li>Repetir a mesma senha no campo "Confirmar Senha".</li>
        <li>Clicar no botão para concluir o cadastro.</li>
        <li>Verificar se o sistema confirma o cadastro e redireciona conforme especificado.</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>Todos os campos aceitam dados válidos nos formatos exigidos.</li>
        <li>O e-mail deve seguir padrão válido (exemplo@dominio.com).</li>
        <li>A senha e a confirmação devem ser iguais.</li>
        <li>O botão de cadastro deve efetivar o registro sem erro.</li>
        <li>Após o cadastro, o sistema deve exibir confirmação e/ou redirecionamento.</li>
      </ul>
    </td>
    <td>Arthur</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-06: Verificar funcionamento da tela Criar Nova Senha</td>
    <td>
      <ul>
        <li>RF-04: O sistema deve permitir que o usuário redefina sua senha, inserindo e confirmando uma nova senha conforme os critérios estabelecidos.</li>
      </ul>
    </td>
    <td>Verificar se a tela Criar Nova Senha permite redefinir a senha com sucesso a partir do fornecimento de uma nova senha válida e sua confirmação.</td>
    <td>
      <ol>
        <li>Abrir o navegador.</li>
        <li>Acessar o endereço da aplicação.</li>
        <li>Navegar até a funcionalidade de recuperação de senha.</li>
        <li>Após receber o acesso/validação, acessar a tela Criar Nova Senha.</li>
        <li>Inserir uma nova senha válida seguindo os critérios definidos pelo sistema.</li>
        <li>Repetir a mesma nova senha no campo "Confirmar Nova Senha".</li>
        <li>Clicar no botão para concluir a redefinição da senha.</li>
        <li>Verificar se o sistema confirma a atualização da senha e redireciona corretamente.</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>A senha deve atender aos critérios definidos (ex.: tamanho mínimo e padrões específicos).</li>
        <li>A senha e a confirmação devem ser idênticas.</li>
        <li>O botão de confirmação deve atualizar a senha sem erro.</li>
        <li>Após a redefinição, o sistema deve exibir mensagem de sucesso e/ou redirecionamento.</li>
      </ul>
    </td>
    <td>Arthur</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-07: Verificar funcionamento da tela de Recuperar Senha</td>
    <td>
      <ul>
        <li>RF-13: A aplicação deve permitir que o usuário recupere sua senha por meio de um código de verificação enviado ao endereço de e-mail cadastrado.</li>
      </ul>
    </td>
    <td>Verificar se a tela de Recuperar Senha só aceita um e-mail de recuperação que já foi cadastrado no site e se o e-mail de recuperação está chegando para o usuário cadastrado.</td>
    <td>
      <ol>
        <li>Abrir o navegador.</li>
        <li>Acessar a aplicação pelo endereço de URL.</li>
        <li>Acessar a tela pelo botão de "Esqueci a senha" na tela de login.</li>
        <li>Inserir um e-mail válido no campo correspondente.</li>
        <li>Clicar no botão "Enviar".</li>
        <li>Verificar no e-mail se o código de recuperação de senha chegou.</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>O campo de e-mail deve seguir o padrão válido (exemplo@dominio.com).</li>
        <li>O e-mail para ser válido deve ser aquele que já foi cadastrado na aplicação.</li>
        <li>O botão de "Enviar" deve efetivar o envio do código de recuperação.</li>
        <li>O código de recuperação deve chegar devidamente ao e-mail, com o nome do usuário, o código de recuperação e uma mensagem explicativa.</li>
      </ul>
    </td>
    <td>Hugo Castro</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-08: Verificar funcionamento da tela do Código de Recuperação</td>
    <td>
      <ul>
        <li>RF-13: A aplicação deve permitir que o usuário recupere sua senha por meio de um código de verificação enviado ao endereço de e-mail cadastrado.</li>
      </ul>
    </td>
    <td>Verificar se a tela do Código de Recuperação só aceita aquele código específico que foi enviado ao e-mail do usuário.</td>
    <td>
      <ol>
        <li>Abrir o navegador.</li>
        <li>Acessar a aplicação pelo endereço de URL.</li>
        <li>Acessar a tela colocando um e-mail válido de recuperação e clicando no botão de enviar.</li>
        <li>Inserir um código válido no campo correspondente.</li>
        <li>Clicar no botão "Recuperar Senha".</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>O campo do código deve seguir o padrão válido de aceitação, 5 números de 0-9.</li>
        <li>O código para ser válido deve ser aquele que foi enviado ao e-mail do usuário.</li>
        <li>O botão de "Recuperar Senha" deve redirecionar para a tela de Criar Nova Senha.</li>
      </ul>
    </td>
    <td>Hugo Castro</td>
  </tr>
</table>

<table>
  <tr>
    <th>Caso de teste</th>
    <th>Requisitos associados</th>
    <th>Objetivo do teste</th>
    <th>Passos</th>
    <th>Critérios de êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-09: Verificar a funcionalidade de Exportar Relatório</td>
    <td>
      <ul>
        <li>RF-09	A aplicação deve gerar relatórios que mostram, por mês e por ano, quanto foi gasto em cada categoria de assinatura, ajudando a pessoa usuária a acompanhar seus gastos.</li>
      </ul>
    </td>
    <td>Verificar se a função de Exportar Relatórios está funcionando adequadamente para os dois tipos de relatório.</td>
    <td>
      <ol>
        <li>Abrir o navegador.</li>
        <li>Acessar a aplicação pelo endereço de URL.</li>
        <li>Acessar a tela de Minhas Assinaturas.</li>
        <li>Clicar no botão de "Exportar Relatórios".</li>
      </ol>
    </td>
    <td>
      <ul>
        <li>O botão deve oferecer a opção de escolha do formato do relatório (Excel ou PDF)</li>
        <li>Deve mostrar um alerta quando clicar em uma das opções sem nenhuma assinatura adicionada.</li>
        <li>Com assinaturas adicionadas na página e escolhendo uma das opções de exportação, o relatório deve ser baixado automáticamente no computador</li>
        <li>O relatório deve conter as informações de nome, valor, vencimento, pagamento, status e categoria</li>     
      </ul>
    </td>
    <td>Hugo Castro</td>
  </tr>
</table>
