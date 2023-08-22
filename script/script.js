

// POSTS -------------------------------------------

postPrincipal = {
    id : '0',
    imagem : 'images/img-principal.png',
    titulo : 'NRF 2020: conheça os top 5 assuntos do evento.',
    subtitulo : 'O maior evento sobre varejo do mundo mostrando as tendências, oportunidades e inovações do setor.',
    fonte : 'CMO ADOBE',
    gradient : ['#e62259', '#6c5aa2'],
}
 
subPost1 = {
    id : '1',
    imagem : 'images/nba.png',
    titulo : 'Petição para colocar Kobe Bryant no logo da NBA.',
    subtitulo : '',
    fonte : 'Daily Mail',
    gradient : ['#76c6cf','#675fa6'],
}

subPost2 = {
    id : '2',
    imagem : 'images/whats.png',
    titulo : 'WhatsApp terá função de pagamentos em 2020.',
    subtitulo : '',
    fonte : 'Proxxima',
    gradient : ['#75c7cf','#3ab38a'],
}

subPost3 = {
    id : '3',
    imagem : '',
    titulo : '',
    subtitulo : '',
    fonte : '',
    gradient : [],
}


// HTML DOM -------------------------------------------------------


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
<span class="color-bar" id="color-bar`+postPrincipal.id+`"></span>
</div>


<div class="box-sub">
<div class="sub-conteudos">            
    <div class="img-sub" id="sub-image`+subPost1.id+`">
    </div>
    <div class="texto-principal">
        <h1>`+subPost1.titulo+`</h1>
        <h3>Fonte: `+subPost1.fonte+`</h3>
    </div>
    <span class="color-bar" id="color-bar`+subPost1.id+`"></span>
</div>
<div class="sub-conteudos">            
    <div class="img-sub" id="sub-image`+subPost2.id+`">
    </div>
    <div class="texto-principal">
        <h1>`+subPost2.titulo+`</h1>
        <h3>Fonte: `+subPost2.fonte+`</h3>
    </div>
    <span class="color-bar" id="color-bar`+subPost2.id+`"></span>
</div>


</div> 

`

// IMAGENS ---------------------------------------------------------------

document.getElementById("img-principal").style.backgroundImage = "url("+postPrincipal.imagem+")";
document.getElementById("sub-image1").style.backgroundImage = "url("+subPost1.imagem+")";
document.getElementById("sub-image2").style.backgroundImage = "url("+subPost2.imagem+")";


// GRADIENTS -------------------------------------------------------------

document.getElementById("color-bar0").style.background = "linear-gradient( to right," +postPrincipal.gradient[0]+","+postPrincipal.gradient[1]+")";
document.getElementById("color-bar1").style.background = "linear-gradient( to right," +subPost1.gradient[0]+","+subPost1.gradient[1]+")";
document.getElementById("color-bar2").style.background = "linear-gradient( to right," +subPost2.gradient[0]+","+subPost2.gradient[1]+")";

// LARGURA BARRA ---------------------------------------------------------

document.getElementById("color-bar1").style.width = "60%";
document.getElementById("color-bar2").style.width = "60%";
