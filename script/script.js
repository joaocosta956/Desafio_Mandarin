
main = '../'


postPrincipal = {
    imagem : main+'images/img-principal.png',
    titulo : 'NRF 2020: conheça os top 5 assuntos do evento.',
    subtitulo : 'O maior evento sobre varejo do mundo mostrando as tendências, oportunidades e inovações do setor.',
    fonte : 'CMO ADOBE',
    gradient : ['red', 'blue'],
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
    <h3>Fonte: `+postPrincipal.fonte+`</h3>    
</div>
<span id="color-bar"></span>
</div>
`
document.getElementById("img-principal").style.backgroundImage = "url("+postPrincipal.imagem+")";
document.getElementById("color-bar").style.background = "linear-gradient( to right," +postPrincipal.gradient[0]+","+postPrincipal.gradient[1]+")";
