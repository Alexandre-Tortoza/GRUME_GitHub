window.onload = async function(){
    changeEnsino(0)
}
function activeButton(botao){
    if(botao ==0){
        var botaoOff = document.getElementById("bnt__disciplina");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__videos");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__curiosidades");
        botaoOff.style.color = "var(--whitePiano)";

        var botaoAtivo = document.getElementById("bnt__disciplina");
        botaoAtivo.style.color = "var(--accent)";

    } else if(botao == 1){
        var botaoOff = document.getElementById("bnt__disciplina");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__videos");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__curiosidades");
        botaoOff.style.color = "var(--whitePiano)";

        var botaoAtivo = document.getElementById("bnt__videos");
        botaoAtivo.style.color = "var(--accent)";
    } else if(botao == 2){
        var botaoOff = document.getElementById("bnt__disciplina");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__videos");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__curiosidades");
        botaoOff.style.color = "var(--whitePiano)";

        var botaoAtivo = document.getElementById("bnt__curiosidades");
        botaoAtivo.style.color = "var(--accent)";
    }
}


function changeEnsino(numero) {
    
    if (numero == 0){
        activeButton(0)

document.getElementById("ensino__container").innerHTML = " "
var cardContainer =`
<div class="disciplinas" id='disciplinas'>
</div>
`
document.getElementById("ensino__container").innerHTML += cardContainer;


    var card = `
    <div class="disciplinas" id="disciplinas">

    <div class="DisciplinaDoc">
        <h3>Análise musical.</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc rhoncus laoreet est tempor laoreet. Ut diam lectus varius sit amet odio sit amet finibus </p>
        <br>
        <a target="_blank" href="https://github.com/Alexandre-Tortoza">Download</a>
    </div>
    
    <div class="DisciplinaDoc">
        <h3>Fundamentos da harmonia.</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc rhoncus laoreet est tempor laoreet.</p>
        <br>
        <a target="_blank" href="https://github.com/Alexandre-Tortoza">Download</a>
    </div>
    
    <div class="DisciplinaDoc">
        <h3>História da música internacional e nacional.</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc rhoncus laoreet est tempor laoreet.</p>
        <br>
        <a target="_blank" href="https://github.com/Alexandre-Tortoza">Download</a>
    </div>
    
    <div class="DisciplinaDoc">
        <h3>Música contemporânea.</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc rhoncus laoreet est tempor laoreet. Ut diam lectus varius sit amet odio sit amet finibus </p>
        <br>
        <a target="_blank" href="https://github.com/Alexandre-Tortoza">Download</a>
    </div>
    
    <div class="DisciplinaDoc">
        <h3>História mMúsica brasileira.usical.</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc rhoncus laoreet est tempor laoreet. Ut diam lectus varius sit amet odio sit amet finibus </p>
        <br>
        <a target="_blank" href="https://github.com/Alexandre-Tortozahttps://github.com/Alexandre-Tortoza">Download</a>
    </div>
    
    <div class="DisciplinaDoc">
        <h3>Acústica.</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc rhoncus laoreet est tempor laoreet.</p>
        <br>
        <a target="_blank" href="https://github.com/Alexandre-Tortoza">Download</a>
    </div>
    
    <div class="DisciplinaDoc">
        <h3>Percepção musical.</h3>
        <br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc rhoncus laoreet est tempor laoreet. Ut diam lectus varius sit amet odio sit amet finibus </p>
        <br>
        <a target="_blank" href="https://github.com/Alexandre-Tortoza">Download</a>
    </div>
    </div>
    `;               
    document.getElementById("disciplinas").innerHTML += card;

    }
    else if( numero == 1){
        activeButton(1)
        document.getElementById("ensino__container").innerHTML = " "

    }else if ( numero == 2){
        activeButton(2)
        document.getElementById("ensino__container").innerHTML = " "

    };


};