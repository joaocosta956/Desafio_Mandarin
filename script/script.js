
main = '../'


postPrincipal = {
    imagem : main+'images/img-principal.png',
    titulo : 'NRF 2020: conheça os top 5 assuntos do evento.',
    subtitulo : 'O maior evento sobre varejo do mundo mostrando as tendências, oportunidades e inovações do setor.',
    fonte : 'CMO ADOBE',
    gradient : ['green', 'blue'],
}

console.log(postPrincipal.titulo)

conteudo = document.querySelector('.conteudo')


conteudo.innerHTML+=`

<div class="conteudo-principal">
<div id="img-principal">

</div>
<div class="texto-principal">
    <h1>`+postPrincipal.titulo+`</h1>
    <h2>`+postPrincipal.subtitulo+`</h2>
    <h3>`+postPrincipal.fonte+`</h3>
</div>
</div>
`
document.getElementById("img-principal").style.backgroundImage = "url("+postPrincipal.imagem+")";
