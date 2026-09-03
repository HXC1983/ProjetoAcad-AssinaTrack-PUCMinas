
const userLogado = JSON.parse(localStorage.getItem("userLogado"));

if (!userLogado || !userLogado.id) {
  alert("Você precisa estar logado para acessar o perfil.");
  localStorage.removeItem("userLogado");
  window.location.href = "/codigo-fonte/Login-Douglas/Login.html";
}

const userID = userLogado.id;

const fotoPerfil = document.getElementById("fotoPerfil");
const miniAvatar = document.getElementById("miniAvatar");
const miniPlaceholder = document.querySelector(".mini-avatar-placeholder");
const avatarPlaceholder = document.querySelector(".avatar-placeholder");
const fotoInput = document.getElementById("fotoInput");
const avatarWrapper = document.getElementById("avatarWrapper");
const salvarBtn = document.getElementById("salvarBtn");
const deletarContaBtn = document.getElementById("deletarContaBtn");
const nomeDisplay = document.getElementById("nomeDisplay");

avatarWrapper.addEventListener("click", () => fotoInput.click());

fotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const img = reader.result;

    fotoPerfil.src = img;
    fotoPerfil.style.display = "block";
    avatarPlaceholder.style.display = "none";

    if (miniAvatar) {
      miniAvatar.src = img;
      miniAvatar.style.display = "block";
      miniPlaceholder.style.display = "none";
    }

    localStorage.setItem(`usuario_${userID}_fotoPerfil`, img);
    atualizarConclusaoPerfil();
  };

  reader.readAsDataURL(file);
});

function removerFotoPerfil() {
  localStorage.removeItem(`usuario_${userID}_fotoPerfil`);

  fotoPerfil.style.display = "none";
  avatarPlaceholder.style.display = "flex";

  if (miniAvatar) {
    miniAvatar.style.display = "none";
    miniPlaceholder.style.display = "flex";
  }

  fotoInput.value = "";
  atualizarConclusaoPerfil();
}
document.addEventListener("DOMContentLoaded", () => {
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover foto";
  btnRemover.className = "acao remover-foto";
  btnRemover.style.marginTop = "10px";
  document.querySelector(".perfil-left").appendChild(btnRemover);
  btnRemover.addEventListener("click", removerFotoPerfil);

  carregarPerfil();
});

function carregarPerfil() {
  
  const savedFoto = localStorage.getItem(`usuario_${userID}_fotoPerfil`);
  if (savedFoto) {
    fotoPerfil.src = savedFoto;
    fotoPerfil.style.display = "block";
    avatarPlaceholder.style.display = "none";

    if (miniAvatar) {
      miniAvatar.src = savedFoto;
      miniAvatar.style.display = "block";
      miniPlaceholder.style.display = "none";
    }
  }

  ["nome", "email", "telefone", "endereco"].forEach((campo) => {
    const value = localStorage.getItem(`usuario_${userID}_${campo}`);
    if (value) {
      document.getElementById(campo).value = value;
      if (campo === "nome") nomeDisplay.textContent = value;
    }
  });

  atualizarConclusaoPerfil();
}

salvarBtn.addEventListener("click", () => {
  let lista = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
  const index = lista.findIndex((u) => u.id === userID);

 
  ["nome", "email", "telefone", "endereco"].forEach((campo) => {
    const valor = document.getElementById(campo).value.trim();
    localStorage.setItem(`usuario_${userID}_${campo}`, valor);

    if (index !== -1) {
      lista[index][campo] = valor; 
      
    }

    if (campo === "nome") nomeDisplay.textContent = valor || "Seu Nome";
  });

  localStorage.setItem("listaUsuarios", JSON.stringify(lista));

  atualizarConclusaoPerfil();
  alert("Alterações salvas com sucesso!");
});


deletarContaBtn.addEventListener("click", () => {
  if (!confirm("Tem certeza que deseja deletar sua conta?")) return;

  ["fotoPerfil", "nome", "email", "telefone", "endereco"].forEach((campo) => {
    localStorage.removeItem(`usuario_${userID}_${campo}`);
  });

  let lista = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
  lista = lista.filter((u) => u.id !== userID);
  localStorage.setItem("listaUsuarios", JSON.stringify(lista));

  localStorage.removeItem("userLogado");
  localStorage.removeItem("token");

  alert("Conta removida com sucesso!");
  window.location.href = "/codigo-fonte/Login-Douglas/Login.html";
});



document.getElementById("sairContaBtn").addEventListener("click", () => {
  if (!confirm("Deseja realmente sair da conta?")) return;

  localStorage.removeItem("userLogado");
  localStorage.removeItem("token");

  alert("Você saiu da sua conta.");
  window.location.href = "/codigo-fonte/Home-Gabriel/home.html";
});



function atualizarConclusaoPerfil() {
  const campos = {
    foto: !!localStorage.getItem(`usuario_${userID}_fotoPerfil`),
    nome: !!document.getElementById("nome").value.trim(),
    email: !!document.getElementById("email").value.trim(),
    telefone: !!document.getElementById("telefone").value.trim(),
    endereco: !!document.getElementById("endereco").value.trim(),
  };

  Object.keys(campos).forEach((campo) => {
    const li = document.getElementById(`check-${campo}`);
    if (li) li.classList.toggle("completo", campos[campo]);
  });

  const completos = Object.values(campos).filter(Boolean).length;
  const total = Object.keys(campos).length;
  const porcentagem = Math.round((completos / total) * 100);

  document.getElementById("progressoPerfil").style.width = `${porcentagem}%`;
  document.getElementById("porcentagemPerfil").textContent =
    `Seu perfil está ${porcentagem}% completo`;
}


["nome", "email", "telefone", "endereco"].forEach((campo) => {
  document.getElementById(campo).addEventListener("input", atualizarConclusaoPerfil);
});
