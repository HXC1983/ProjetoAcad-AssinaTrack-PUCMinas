const MY_KEY_API = 'eerdjOzRbnIGWAVOLaIzX21PqWsUzUxuSjGsHgaj';
let precos = []

const IdAssinaturas = [203,26,372,444,368,24,448,349,387, 140] //Ids para selecionar exatamente as assinaturas que eu quero na api
const LinkAssinaturas = [ 
    "https://www.netflix.com/",
    "https://www.max.com/",
    "https://www.primevideo.com/",
    "https://www.disneyplus.com/",
    "https://www.paramountplus.com/",
    "https://www.youtube.com/premium",
    "https://tv.apple.com/",
    "https://play.google.com/store/movies",
    "https://www.amazon.com/",
    "https://globoplay.globo.com/"
  ]

async function CarregaPreco(){ //função pra pegar preços do json
  try{
    const resposta = await fetch("precos.json");
    const precos = await resposta.json();
    console.log(precos)
    return precos;
  }catch(erro){
    console.error("Erro ao carregar precos.json", erro)
    return[]
  }
}


const container = document.querySelector(".container")
async function buscarAssinaturas() {
  try{
    precos = await CarregaPreco()
      const resposta = await fetch(
          `https://api.watchmode.com/v1/sources/?apiKey=${MY_KEY_API}`
      );
      const InfoAss = await resposta.json();

      const Assinaturas = InfoAss.filter(inf => IdAssinaturas.includes(inf.id));

      const jsonAssinaturas = Assinaturas.map(inf => ({
          nome: inf.name,
          logo: inf.logo_100px
      }))

      for(let i = 0; i < jsonAssinaturas.length; i++) //Adicionando os preços no jsonAssinaturas
      {
          jsonAssinaturas[i].preco = precos[i] 
      }

      for(let i = 0; i < jsonAssinaturas.length; i++) //Adicionando links no jsonasinaturas
      {
          jsonAssinaturas[i].link = LinkAssinaturas[i]
      }
      jsonAssinaturas.push(

          {
              "nome": "Spotify",
              "logo": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
              "link": "https://www.spotify.com",
              "preco": precos[10]
            },
            {
              "nome": "Xbox Game Pass",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Xbox_Game_Pass_new_logo_-_colored_version.svg/512px-Xbox_Game_Pass_new_logo_-_colored_version.svg.png",
              "link": "https://www.xbox.com/xbox-game-pass",
              "preco": precos[11]
            },
            {
              "nome": "PlayStation Plus",
              "logo": "PesquisaAssinaturas-Gabriel/PlayStation-Logo.wine.png",
              "link": "https://www.playstation.com/ps-plus/",
              "preco": `${precos[12]} /Ano`
            },
            {
              "nome": "iFood",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/IFood-Logo.png/512px-IFood-Logo.png",
              "link": "https://www.ifood.com.br",
              "preco": precos[13]
            },
            {
              "nome": "Uber",
              "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/512px-Uber_logo_2018.svg.png",
              "link": "https://www.uber.com/br/uber-one/",
              "preco": precos[14]
            }
          
      )

      jsonAssinaturas.forEach(ass =>{ //Criando as divs com  as informacoes de cada assinatura
          const div = document.createElement("div");
          div.classList.add("content")
          div.innerHTML=
          `
              <h3 class="name-ass"> ${ass.nome} </h3>
              <img class="logo-ass" src="${ass.logo}" alt="${ass.nome}">
              <p class="valor">${ass.preco} </p>
              <a class="btn-link" href="${ass.link}" target="_blank">Acessar</a>
          `;
          container.appendChild(div);

      })
    } catch (erro){
        console.error("Erro ao buscar assinaturas na Api ou ao montar pagina", erro)
    }

}

buscarAssinaturas()


