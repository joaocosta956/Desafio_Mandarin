
main = '../'


postPrincipal = {
    imagem : main+'images/img-principal.png',
    titulo : 'NRF 2020: conheça os top 5 assuntos do evento.',
    subtitulo : 'O maior evento sobre varejo do mundo mostrando as tendências, oportunidades e inovações do setor.',
    fonte : 'CMO ADOBE',
    gradient : ['red', 'blue'],
}

subPost1 = {
    id : '0',
    imagem : '',
    titulo : 'Petição para colocar Kobe Bryant no logo da NBA.',
    subtitulo : '',
    fonte : 'Daily Mail',
    gradient : [],
}

subPost2 = {
    id : '1',
    imagem : main+'images/nba.png',
    titulo : 'WhatsApp terá função de pagamentos em 2020.',
    subtitulo : '',
    fonte : 'Proxxima',
    gradient : [],
}

subPost3 = {
    id : '2',
    imagem : '',
    titulo : '',
    subtitulo : '',
    fonte : '',
    gradient : [],
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


<div class="box-sub">
<div class="sub-conteudos">            
    <div class="img-sub one">
    </div>
    <div class="texto-principal">
        <h1>`+subPost1.titulo+`</h1>
        <h3>Fonte: `+subPost1.fonte+`</h3>
    </div>
    <span id="color-bar"></span>
</div>
<div class="sub-conteudos">            
    <div id="sub-image`+subPost1.id+`">
        <img src="`+subPost2.imagem+`">
    </div>
    <div class="texto-principal">
        <h1>`+subPost2.titulo+`</h1>
        <h3>Fonte: `+subPost2.fonte+`</h3>
    </div>
    <span id="color-bar"></span>
</div>


</div> 
`
document.getElementById("img-principal").style.backgroundImage = "url("+postPrincipal.imagem+")";
document.getElementById("color-bar").style.background = "linear-gradient( to right," +postPrincipal.gradient[0]+","+postPrincipal.gradient[1]+")";
