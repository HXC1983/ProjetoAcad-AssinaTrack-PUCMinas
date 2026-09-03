const puppeteer = require("puppeteer");
const fs = require("fs")
const links = [
    "https://tecnoblog.net/guias/planos-da-netflix-precos-beneficios/", //netflix
    "https://tecnoblog.net/noticias/hbo-max-fica-mais-caro-no-brasil-veja-os-novos-precos/", //HBO-MAX
    "https://canaltech.com.br/entretenimento/quanto-custa-o-amazon-prime-video/", //PRIMEVIDEO
    "https://canaltech.com.br/entretenimento/quanto-custa-o-disney-plus/", //Disney
    "https://canaltech.com.br/entretenimento/quanto-custa-o-paramount-plus/", //Paramount
    "https://canaltech.com.br/internet/o-que-e-youtube-premium-lite-conheca-o-novo-plano-baratinho-da-plataforma/", //Youtube Premium
    "https://canaltech.com.br/entretenimento/quanto-custa-o-apple-tv-plus/", //AppleTV
    "https://canaltech.com.br/apps/melhores-aplicativos-google-play-pass/", //GooglePlay
    "https://canaltech.com.br/produtos/amazon-inicia-mega-oferta-prime-com-precos-de-preblack-friday/",//Amazon Prime
    "https://canaltech.com.br/entretenimento/quanto-custa-o-globoplay/", //Globoplay
    "https://canaltech.com.br/apps/spotify-premium-vai-ficar-mais-caro-no-brasil-confira-novos-precos/", //Spotify
    "https://canaltech.com.br/games/ainda-vale-a-pena-assinar-o-xbox-game-pass-no-brasil/", //Xbox Gamepass 
    "https://canaltech.com.br/games/ainda-vale-a-pena-assinar-a-ps-plus-no-brasil/", //Playstation
    "https://institucional.ifood.com.br/clientes/beneficios-do-clube-ifood/", //ifood
    "https://canaltech.com.br/apps/vale-a-pena-assinar-o-uber-one/" //Uber
]

//Funçao que busca os primeiros preccos de cada pagina
async function pegaPrimeiroPreco(url){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url,{
        waitUntil:"domcontentloaded",
        timeout:120000
    });
    
    const preco = await page.evaluate(() => {
    const texto = document.body.innerText;
    const regras = /R\$\s*\d{1,3},\d{2}/g;
    const match = texto.match(regras);
    return match ? match[0] : null;

    });

    await browser.close()
    return preco || "Preço desconhecido"
}

//Funçao que pega todos os preços usando a funçao que busca os preços
async function Precos() {
    const valores = []
    for(let i =0; i <links.length;i++)
    {
        const PreTemp = await pegaPrimeiroPreco(links[i])
        valores.push(PreTemp)
    }

    return valores
}

(async () => {
    const listaPrecos = await Precos();
    console.log("TODOS OS PREÇOS:\n", listaPrecos);

    fs.writeFileSync("precos.json", JSON.stringify(listaPrecos,null,2))
})();