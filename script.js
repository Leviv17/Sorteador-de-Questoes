document.addEventListener('DOMContentLoaded', () => {
    let questaoDiv = document.getElementById('questaoDiv');
    const botaoSorteio = document.getElementById('botaoSorteio');

    botaoSorteio.addEventListener('click', sortear);

    let questoes = [
        {enunciado: `A primeira lei de Mendel, conhecida também como princípio da segregação dos caracteres ou lei da segregação,
        afirma que:`,
        opcoes: `a) cada característica é condicionada por um par de fatores que se separam na formação dos gametas.<br>
        b) cada par de fatores segrega-se de maneira independente de outros pares durante a formação dos gametas.<br>
        c) cada característica é condicionada por um par de fatores que permanecem unidos na formação dos gametas.<br>
        d) cada par de fatores segrega-se de maneira conjunta com outros pares durante a formação dos gametas.<br>
        e) cada característica é condicionada por um fator que não se separa na formação dos gametas.`,
        resposta: `<strong>Alternativa “a”.</strong> A primeira lei de Mendel afirma que cada característica é condicionada por um par de fatores
        que se segregam na formação dos gametas, nos quais ocorrem em dose simples.`},

        {enunciado: `Qual das alternativas abaixo corresponde a uma característica da Revolução Industrial?`,
        opcoes: `a) A expansão do feudalismo como modelo econômico predominante.<br>
        b) A mecanização da produção e o crescimento das cidades industriais.<br>
        c) O fortalecimento da economia baseada exclusivamente na agricultura.<br>
        d) A consolidação das corporações de ofício como base da produção.<br>
        e) O aumento do trabalho artesanal como método produtivo dominante.`,
        resposta: `<strong>Alternativa "b".</strong> A Revolução Industrial foi marcada pela mecanização da produção e pelo crescimento das cidades industriais.`},

        {enunciado: `A Lei da Inércia, estabelecida por Isaac Newton, afirma que:`,
        opcoes: `a) Um corpo em repouso permanecerá em repouso, e um corpo em movimento permanecerá em movimento, a menos que uma força externa atue sobre ele.<br>
        b) A força resultante aplicada a um corpo é proporcional à sua aceleração.<br>
        c) Para cada ação, existe uma reação de mesma intensidade e direção, porém em sentido contrário.<br>
        d) A aceleração de um corpo é inversamente proporcional à força aplicada sobre ele.<br>
        e) O movimento de um corpo independe das forças aplicadas a ele.`,
        resposta: `<strong>Alternativa "a".</strong> A Lei da Inércia estabelece que os corpos tendem a manter seu estado de movimento ou repouso a menos que uma força externa interfira.`},

        {enunciado: `Na língua portuguesa, a oração subordinada adverbial causal indica:`,
        opcoes: `a) Uma consequência da ação principal.<br>
        b) A causa da ação principal.<br>
        c) Uma condição para que a ação principal ocorra.<br>
        d) Uma comparação entre dois elementos.<br>
        e) Uma finalidade da ação principal.`,
        resposta: `<strong>Alternativa "b".</strong> A oração subordinada adverbial causal indica a causa da ação principal da oração.`},

        {enunciado: `Em relação à tabela periódica, é correto afirmar que os elementos do grupo 18 são conhecidos como:`,
        opcoes: `a) Metais alcalinos.<br>
        b) Halogênios.<br>
        c) Gases nobres.<br>
        d) Metais de transição.<br>
        e) Lantanídeos.`,
        resposta: `<strong>Alternativa "c".</strong> Os elementos do grupo 18 da tabela periódica são chamados de gases nobres, sendo caracterizados por sua baixa reatividade.`},

        {enunciado: `Na economia, o conceito de oferta refere-se:`,
        opcoes: `a) À quantidade de bens e serviços que os consumidores estão dispostos a adquirir.<br>
        b) À quantidade de bens e serviços que os produtores estão dispostos a oferecer a um determinado preço.<br>
        c) À relação entre o preço e a demanda de um produto.<br>
        d) Ao consumo de bens e serviços em um mercado competitivo.<br>
        e) Ao monopólio exercido por grandes empresas.`,
        resposta: `<strong>Alternativa "b".</strong> A oferta representa a quantidade de bens e serviços que os produtores estão dispostos a disponibilizar ao mercado por um preço específico.`},

        {enunciado: `Na geografia, o conceito de urbanização refere-se:`,
        opcoes: `a) À migração da população rural para as áreas urbanas.<br>
        b) Ao crescimento da população mundial.<br>
        c) Ao desenvolvimento de infraestruturas agrícolas.<br>
        d) À concentração de indústrias em áreas rurais.<br>
        e) À preservação das áreas naturais em regiões urbanas.`,
        resposta: `<strong>Alternativa "a".</strong> A urbanização é caracterizada pela migração da população rural para as áreas urbanas em busca de melhores condições de vida.`},

        {enunciado: `Na informática, qual das opções abaixo representa um sistema operacional?`,
        opcoes: `a) Microsoft Word.<br>
        b) Google Chrome.<br>
        c) Linux.<br>
        d) Adobe Photoshop.<br>
        e) Excel.`,
        resposta: `<strong>Alternativa "c".</strong> Linux é um sistema operacional que gerencia os recursos de hardware e software de um computador.`},

        {enunciado: `O que é um pronome de tratamento na língua portuguesa?`,
        opcoes: `a) Um tipo de adjetivo.<br>
        b) Uma palavra usada para substituir substantivos em determinadas situações sociais.<br>
        c) Um tipo de verbo usado para indicar ações futuras.<br>
        d) Um elemento que conecta frases e orações.<br>
        e) Um tipo de numeral ordinal.`,
        resposta: `<strong>Alternativa "b".</strong> Pronomes de tratamento são usados para se referir a interlocutores de maneira formal ou respeitosa.`},

        {
        enunciado: `Na literatura brasileira, o Modernismo foi um movimento caracterizado por:`,
        opcoes: `a) A valorização das normas clássicas e da tradição literária.<br>
        b) A ruptura com os padrões estéticos tradicionais e a busca por uma identidade nacional.<br>
        c) O resgate da cultura medieval e da religiosidade.<br>
        d) A predominância da literatura de cordel como expressão artística.<br>
        e) A ausência de influências externas na produção literária nacional.`,
        resposta: `<strong>Alternativa "b".</strong> O Modernismo brasileiro rompeu com os padrões tradicionais, explorando uma linguagem inovadora e valorizando elementos da cultura nacional.`
        },
        {
        enunciado: `No contexto da Segunda Guerra Mundial, o evento que marcou o fim do conflito na Europa foi:`,
        opcoes: `a) O ataque a Pearl Harbor pelos japoneses.<br>
        b) O lançamento das bombas atômicas em Hiroshima e Nagasaki.<br>
        c) A invasão da Polônia pela Alemanha nazista.<br>
        d) A assinatura da rendição alemã em maio de 1945.<br>
        e) A Conferência de Yalta entre os Aliados.`,
        resposta: `<strong>Alternativa "d".</strong> A rendição alemã em maio de 1945 marcou o fim da Segunda Guerra Mundial na Europa.`
        },
        {
        enunciado: `Qual é o resultado da expressão matemática (2 + 3) × 4 ÷ 2?`,
        opcoes: `a) 10<br>
        b) 20<br>
        c) 8<br>
        d) 12<br>
        e) 15`,
        resposta: `<strong>Alternativa "d".</strong> A expressão (2 + 3) × 4 ÷ 2 resulta em 10.`
        },
        {
        enunciado: `Na biologia, qual estrutura celular é responsável pela produção de energia?`,
        opcoes: `a) Núcleo.<br>
        b) Mitocôndria.<br>
        c) Ribossomo.<br>
        d) Lisossomo.<br>
        e) Retículo endoplasmático rugoso.`,
        resposta: `<strong>Alternativa "b".</strong> A mitocôndria é responsável pela produção de energia na célula através da respiração celular.`
        },
        {
        enunciado: `Segundo a primeira lei de Mendel:`,
        opcoes: `a) as características de um indivíduo são determinadas por genes dominantes.<br>
        b) as características de um indivíduo são determinadas por alelos recessivos.<br>
        c) as características de um indivíduo são determinadas por um par de fatores.<br>
        d) as características de um indivíduo são determinadas por duplicação de um fator.`,
        resposta: `<strong>Alternativa "c".</strong> As características de um indivíduo são determinadas por um par de fatores.<br>
        Segundo a primeira lei de Mendel, também conhecida como Lei da Segregação dos Fatores, as características resulta da 
        combinação de dois fatores que se separam na formação dos gametas.`
        }
    ];

    let questoesSorteadas = [];

    function sortear() {
        const i = Math.floor(Math.random() * questoes.length);
        const questaoSorteada = questoes[i];

        questaoDiv.innerHTML = `
        <p class="enunciado">${questaoSorteada.enunciado}</p>
        <p class="opcoes">${questaoSorteada.opcoes}</p>
        <button id="buttonShow">Mostrar Resposta</button>
        <div id="answer">
            <p class="resposta">${questaoSorteada.resposta}</p>
        </div>
        `;
    
        questoesSorteadas.push(questaoSorteada);
        questoes.splice(i, 1);

        if(questoes.length === 1) {
            questoes.push(...questoesSorteadas);
            questoesSorteadas = [];
        }

        const buttonShow = document.getElementById('buttonShow');
        buttonShow.addEventListener('click', () => {
            let answer = document.getElementById('answer');

            if (answer.style.opacity == '0') {
                answer.style.opacity = '100%';
                answer.style.transition = '0.5s';
                buttonShow.textContent = 'Ocultar Resposta';
            } else {
                answer.style.opacity = '0';
                answer.style.transition = '0.5s';
                buttonShow.textContent = 'Mostrar Resposta';
            }
        });
    };
});
