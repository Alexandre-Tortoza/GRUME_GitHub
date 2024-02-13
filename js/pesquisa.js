window.onload = async function(){
    activeButton(0);
    changePesquisa(0);
}


function changePesquisa(categoria){
    document.getElementById("pesquisa__container").innerHTML = "";
    if(categoria == 0){

        activeButton(0)
        var cardContainer =`
        <div class="membros" id='membros'>
        </div>
    `
    document.getElementById("pesquisa__container").innerHTML += cardContainer;
    var card = `
    <div id="pesquisa__container">



            
    <div class="membros" id="membros">
    
        <div class="membro">
            <div>
                <img class="membro__img" src="../imagens/equipe/0.png" alt="Lina Assumi Abe">
                <br>
                <span>2021-2024</span>
            </div>
            
            <div>
                <div>
                    <h2>Lina Assumi Abe</h2>
                    <p>A relação entre as representações mentais e os esquemas sensoriomotores para o desenvolvimento da expertise na prática de ritmos brasileiros para piano solo.</p>
                </div>
                <br>
                <div class="membro__links">
                    <a target="_blank" href="mailto:linaabe@hotmail.com"><img src="../imagens/icons/cv.svg" alt="">Mail</a>
                    <a target="_blank" href="http://lattes.cnpq.br/4784867636956605"><img src="../imagens/icons/mail.svg" alt="">Currículo </a>
                </div>
            </div>
    </div>
        <div class="membro">
            <div>
                <img class="membro__img" src="../imagens/equipe/1.png" alt="João Gabriel Assunção Lima">
                <br>
                <span>2023-2026</span>
            </div>
            
            <div>
                <div>
                    <h2>João Gabriel Assunção Lima</h2>
                    <p>Perfis de pianistas brasileiros: os caminhos de aprendizagem até a expertise de elite</p>
                </div>
                <br>
                <div class="membro__links">
                    <a target="_blank" href="mailto:Joaog.lima@live.com"><img src="../imagens/icons/cv.svg" alt="">Mail</a>
                    <a target="_blank" href="http://lattes.cnpq.br/0529889208543751"><img src="../imagens/icons/mail.svg" alt="">Currículo </a>
                </div>
            </div>
    </div>
        <div class="membro">
            <div>
                <img class="membro__img" src="../imagens/equipe/2.png" alt="Gabriel Dell’Agnolo Busarello">
                <br>
                <span>2022-2024</span>
            </div>
            
            <div>
                <div>
                    <h2>Gabriel Dell’Agnolo Busarello</h2>
                    <p>O papel das representações mentais na aprendizagem da harmonização de melodias cifradas no piano popular.</p>
                </div>
                <br>
                <div class="membro__links">
                    <a target="_blank" href="mailto:gabrielbusarello65@gmail.com"><img src="../imagens/icons/cv.svg" alt="">Mail</a>
                    <a target="_blank" href="-http://lattes.cnpq.br/1126964874928164"><img src="../imagens/icons/mail.svg" alt="">Currículo </a>
                </div>
            </div>
    </div>
        <div class="membro">
            <div>
                <img class="membro__img" src="../imagens/equipe/3.png" alt="José Vitor Pintado Corato">
                <br>
                <span>2022-2024</span>
            </div>
            
            <div>
                <div>
                    <h2>José Vitor Pintado Corato</h2>
                    <p>A improvisação idiomática no piano popular: um estudo comparativo entre solos de cinco pianistas experts.</p>
                </div>
                <br>
                <div class="membro__links">
                    <a target="_blank" href="mailto:jvpcorato@gmail.com"><img src="../imagens/icons/cv.svg" alt="">Mail</a>
                    <a target="_blank" href="http://lattes.cnpq.br/2084407821292410"><img src="../imagens/icons/mail.svg" alt="">Currículo </a>
                </div>
            </div>
    </div></div>
</div>
    `;               
    document.getElementById("membros").innerHTML += card;
    } else if (categoria == 1){
        activeButton(1)
        var cardContainer =`
        <div class="orientacoes" id='orientacoes'>
        </div>
        `
        document.getElementById("pesquisa__container").innerHTML += cardContainer;

            var card = `
            <div class="orientacoes" id="orientacoes">
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">TESE DE DOUTORADO</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Silva, E. G.</h4>
                    <span>2021</span>
                </div>
                <p>Preferência e emoção em ambientes de escuta musical mediados pela tecnologia. Tese de doutorado. Universidade Federal do Paraná, PR, Brasil. </p>
                <a class="orientacao__link" target="_blank" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">TESE DE DOUTORADO</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Mello, E. K. S.</h4>
                    <span>2021</span>
                </div>
                <p> A influência da familiaridade musical sobre a formação de expectativas melódicas: um estudo transcultural. Tese de doutorado. Universidade Federal do Paraná, PR, Brasil.</p>
                <a class="orientacao__link" target="_blank" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">TESE DE DOUTORADO</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Gomes, V. B.</h4>
                    <span>2019</span>
                </div>
                <p>O desenvolvimento da expertise do pianista intérprete-arranjador-improvisador. Tese de doutorado. Universidade Federal do Paraná, PR, Brasil.</p>
                <a class="orientacao__link" target="_blank" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">DISSERTAÇÕES DE MESTRADO</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Lima, J. G. A.</h4>
                    <span>2023</span>
                </div>
                <p>A prática deliberada e Debora Gurgel: estratégias de estudo de uma pianista expert. Dissertação de mestrado. Universidade Federal do Paraná, Brasil.</p>
                <a class="orientacao__link" target="_blank" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">DISSERTAÇÕES DE MESTRADO</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Bonaldo, L.</h4>
                    <span>2022</span>
                </div>
                <p>O papel das representações mentais na improvisação em “Berimbau”, de Baden Powell e Vinicius de Moraes: um estudo comparativo entre músicos experts e iniciantes. Dissertação de mestrado. Universidade Federal do Paraná, Brasil. </p>
                <a class="orientacao__link" target="_blank" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        

        </div>
            `;               
            document.getElementById("orientacoes").innerHTML += card;
    } else if (categoria == 2){
        activeButton(2)

        var cardContainer =`
        <div class="publicacoes" id='publicacoes'>
        </div>
        `
        document.getElementById("pesquisa__container").innerHTML += cardContainer;
            var card = `
            <div class="publicacoes" id="publicacoes">
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Duarte, T. A. &amp; Ramos, D.</h4>
                    <span>2022</span>
                </div>
                <p>Polyrhythm as a bridge for group improvisation in Brazilian Jazz: an analysis of the performance of Trio Corrente. IASPM Journal, 12(1), 41-66.</p>
                <a class="orientacao__link" href="https://iaspmjournal.net/index.php/IASPM_Journal/article/view/1091" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Pereira, L., Ramos, D. &amp; Bueno, J. L. O.</h4>
                    <span>2022</span>
                </div>
                <p>The influence of different musical modes and tempi on time perception. Acta Psychologica, 229(103701), 1-9.</p>
                <a class="orientacao__link" href="https://www.sciencedirect.com/science/article/pii/S0001691822002165?utm_campaign=STMJ_AUTH_SERV_PUBLISHED&amp;utm_medium=email&amp;utm_acid=85685913&amp;SIS_ID=&amp;dgcid=STMJ_AUTH_SERV_PUBLISHED&amp;CMX_ID=&amp;utm_in=DM284894&amp;utm_source=AC_" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Ramos, D. &amp; Mello, E. K. S.</h4>
                    <span>2021</span>
                </div>
                <p>Communication of emotions in music between Brazilian composer, performers, and listeners. Psychomusicology: music, mind and brain, 31(1), 1-17.</p>
                <a class="orientacao__link" href="https://psycnet.apa.org/doiLanding?doi=10.1037%2Fpmu0000269" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Ramos, D. &amp; Wisniewski, G. R. O.</h4>
                    <span>2020</span>
                </div>
                <p>As necessidades psicológicas básicas dos estudantes de um curso superior de música de Curitiba entre 2014 e 2017. Revista da Associação Brasileira de Educação Musical, 28, 194-210.</p>
                <a class="orientacao__link" href="http://abemeducacaomusical.com.br/revistas/revistaabem/index.php/revistaabem/article/view/877" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Anta, F., Oliveira, L. F. &amp; Ramos, D.</h4>
                    <span>2019</span>
                </div>
                <p>Música y afecto: una revisión bibliográfica y el análisis de tres casos problemáticos. Revista Argentina de Musicología, v. 20, p. 103-131, 2019.</p>
                <a class="orientacao__link" href="http://ojs.aamusicologia.org.ar/index.php/ram/article/view/248" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Ramos, D. &amp; Toni, A.</h4>
                    <span>2018</span>
                </div>
                <p>Reflexões curriculares sobre perfil e demandas dos estudantes de música da UFPR em 2016. Vórtex, 6, 1-30.</p>
                <a class="orientacao__link" href="http://vortex.unespar.edu.br/ramos_toni_v6_n3.pdf" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Ramos, D. &amp; Elias, A.</h4>
                    <span>2013</span>
                </div>
                <p>A incessante espera pelo futuro: uma introdução sobre expectativas geradas pela dimensão rítmica em música. Percepta, 1(1), 83–94.</p>
                <a class="orientacao__link" href="http://www.abcogmus.org/journals/index.php/percepta/article/view/5" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Droit-Volet, S., Ramos, D., Bueno, J. L. D. O. &amp; Bigand, E.</h4>
                    <span>2013</span>
                </div>
                <p>Music, emotion and time perception: the influence of subjective emotional valence and arousal? Frontiers in Psychology, (4), 417.</p>
                <a class="orientacao__link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3713348/" target="_blank">Link</a>
            </div>
        
            <div class="orientacao">
                <h3 class="orientacao__categoria">ARTIGOS PUBLICADOS EM PERIÓDICOS DA ÁREA</h3>
                <div class="orientacao__nomeEAno">
                    <h4>Ramos, D. &amp; Bueno, J. L.</h4>
                    <span>2012</span>
                </div>
                <p>A percepção de emoções em trechos de música ocidental erudita. Per Musi, 26, 21-30.</p>
                <a class="orientacao__link" href="http://www.scielo.br/pdf/pm/n26/03.pdf" target="_blank">Link</a>
            </div>
        </div>
            `;               
            document.getElementById("publicacoes").innerHTML += card;




    } else if (categoria == 3){
        activeButton(3)

        var cardContainer =`
        <div class="documentos" id='documentos'>
        </div>
        `
        document.getElementById("pesquisa__container").innerHTML += cardContainer;

            var card = `
            <div class="documentos" id="documentos">
        
            <div class="documento">
                <h3>Roteiro Estudo Textos Teóricos </h3>
                <a download="" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="documento">
                <h3>Roteiro Estudo Textos Empíricos</h3>
                <a download="" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="documento">
                <h3>Roteiro Levantamento Bibliográfico</h3>
                <a download="" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="documento">
                <h3>Questionario Planejamento Pesquisa</h3>
                <a download="" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        
            <div class="documento">
                <h3>Procedimento Submissão Trabalhos Comite Ética Pesquisa</h3>
                <a download="" href="../assets/arquivoDeTeste.pdf">Link</a>
            </div>
        

        </div>
            `;               
            document.getElementById("documentos").innerHTML += card;




    }
    


}

function activeButton(botao){
    if(botao ==0){

        var botaoOff = document.getElementById("bnt__orientacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__publicacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__documentos");
        botaoOff.style.color = "var(--whitePiano)";

        var botaoAtivo = document.getElementById("bnt__equipe");
        botaoAtivo.style.color = "var(--accent)";

    } else if(botao == 1){

        var botaoOff = document.getElementById("bnt__equipe");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__publicacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__documentos");
        botaoOff.style.color = "var(--whitePiano)";

        var botaoAtivo = document.getElementById("bnt__orientacoes");
        botaoAtivo.style.color = "var(--accent)";

    } else if(botao == 2){

        
        var botaoOff = document.getElementById("bnt__equipe");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__orientacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__documentos");
        botaoOff.style.color = "var(--whitePiano)";
        
        var botaoAtivo = document.getElementById("bnt__publicacoes");
        botaoAtivo.style.color = "var(--accent)";
    } else if(botao == 3){

        
        var botaoOff = document.getElementById("bnt__equipe");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__orientacoes");
        botaoOff.style.color = "var(--whitePiano)";
        var botaoOff = document.getElementById("bnt__publicacoes");
        botaoOff.style.color = "var(--whitePiano)";
        
        var botaoAtivo = document.getElementById("bnt__documentos");
        botaoAtivo.style.color = "var(--accent)";
    }
        
}
