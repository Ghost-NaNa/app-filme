const DATA = [
    {
        id: '1',
        nome:'Jujutsu Kaisen 0',
        nota: 7.8,
        genero: 'Ação, Sobrenatural',
        autor: 'Gege Akutami',
        dataLancamento: '2021-12-24',
        sinopse: 'Yuta Okkotsu, um jovem amaldiçoado, entra em uma escola de feiticeiros para aprender a controlar seu poder e proteger os outros.',
        image: require('./imagens/jujutsu.jpg')
    },
    {
        id: '2',
        nome:'Look Back',
        nota: 7.8,
        genero: 'Drama, Psicológico',
        autor: 'Tatsuki Fujimoto',
        dataLancamento: '2021-07-19',
        sinopse: 'Duas garotas com talentos artísticos diferentes se conectam através do mangá, mas enfrentam eventos que mudarão suas vidas para sempre.',
        image: require('./imagens/lookBack.jpg')
    },
    {
        id: '3',
        nome:'Your Name',
        nota: 8.4,
        genero: 'Romance, Fantasia',
        autor: 'Makoto Shinkai',
        dataLancamento: '2016-08-26',
        sinopse: 'Dois adolescentes trocam de corpo misteriosamente e desenvolvem um forte laço enquanto tentam se encontrar.',
        image: require('./imagens/yourName.jpg')
    },
    {
        id: '4',
        nome:'Seishun buta yaro wa yumemiru shoujo no yume wo minai',
        nota: 8.2,
        genero: 'Drama, Romance, Sobrenatural',
        autor: 'Hajime Kamoshida',
        dataLancamento: '2019-06-15',
        sinopse: 'Sakuta Azusagawa reencontra seu primeiro amor, que deveria não existir mais, enfrentando paradoxos temporais e emocionais.',
        image: require('./imagens/yumemiruShoujo.jpg')
    },
    {
        id: '5',
        nome:'Seishun buta yaro wa ransel girl no yume o minai',
        nota: 7.8,
        genero: 'Drama, Romance, Fantasia',
        autor: 'Hajime Kamoshida',
        dataLancamento: '2023-12-01',
        sinopse: 'Sakuta encontra uma nova manifestação da síndrome da puberdade, desta vez envolvendo uma garota com uma mochila escolar incomum.',
        image: require('./imagens/ranselGirl.jpg')
    },
    {
        id: '6',
        nome:'Ponyo',
        nota: 7.6,
        genero: 'Fantasia, Infantil',
        autor: 'Hayao Miyazaki',
        dataLancamento: '2008-07-19',
        sinopse: 'Uma peixinha mágica chamada Ponyo deseja se tornar humana após conhecer um garoto chamado Sosuke.',
        image: require('./imagens/ponyo.jpg')
    },
    {
        id: '7',
        nome:'O castelo animado',
        nota: 8.2,
        genero: 'Fantasia, Aventura',
        autor: 'Hayao Miyazaki',
        dataLancamento: '2004-11-20',
        sinopse: 'Sophie, amaldiçoada com um corpo de idosa, encontra abrigo em um castelo mágico que anda, pertencente ao misterioso mago Howl.',
        image: require('./imagens/casteloAnimado.jpg')
    },
    {
        id: '8',
        nome: 'Flow',
        nota: 7.9,
        genero: 'Drama, Psicológico',
        autor: 'Fictional',
        dataLancamento: '2022-10-10',
        sinopse: 'Uma análise profunda da psicologia do desempenho humano, seguindo personagens em busca de seu “estado de fluxo”.',
        image: require('./imagens/flow.jpg')
    },
    {
        id: '9',
        nome:'Porco Rosso - O Último Herói Romântico',
        nota: 7.7,
        genero: 'Aventura, Guerra, Fantasia',
        autor: 'Hayao Miyazaki',
        dataLancamento: '1992-07-18',
        sinopse: 'Um piloto de caça amaldiçoado com uma aparência de porco enfrenta piratas aéreos e sua própria solidão no pós-guerra.',
        image: require('./imagens/porcoRosso.jpg')
    },
    {
        id: '10',
        nome:'A Viagem de Chihiro',
        nota: 8.6,
        genero: 'Fantasia, Aventura',
        autor: 'Hayao Miyazaki',
        dataLancamento: '2001-07-20',
        sinopse: 'Chihiro, uma menina de 10 anos, entra num mundo mágico onde precisa trabalhar em uma casa de banhos para salvar seus pais.',
        image: require('./imagens/viagemDeChihiro.jpg')
    },
    {
        id: '11',
        nome:'Meu Amigo Totoro',
        nota: 8.1,
        genero: 'Fantasia, Infantil',
        autor: 'Hayao Miyazaki',
        dataLancamento: '1988-04-16',
        sinopse: 'Duas irmãs se mudam para o campo e conhecem criaturas mágicas, incluindo o adorável Totoro.',
        image: require('./imagens/totoro.jpg')
    },
    {
        id: '12',
        nome: 'Ilha do medo',
        nota: 8,
        genero: 'Suspense, Mistério',
        autor: 'Dennis Lehane (livro), Martin Scorsese (diretor)',
        dataLancamento: '2010-02-19',
        sinopse: 'Um detetive investiga o desaparecimento de uma paciente em um hospital psiquiátrico isolado em uma ilha, enfrentando seus próprios traumas.',
        image: require('./imagens/ilhaDoMedo.jpg')
    },
    {
        id: '13',
        nome:'O Show de Truman - O Show da Vida',
        nota: 8.2,
        genero: 'Drama, Ficção Científica',
        autor: 'Andrew Niccol',
        dataLancamento: '1998-06-05',
        sinopse: 'Truman Burbank vive uma vida perfeita até suspeitar que tudo ao seu redor é parte de um grande programa de TV.',
        image: require('./imagens/truman.jpg')
    },
    {
        id: '14',
        nome:'O Máskara',
        nota: 7.8,
        genero: 'Comédia, Fantasia',
        autor: 'Michael Fallon, Mike Werb (roteiro), baseado em quadrinhos da Dark Horse',
        dataLancamento: '1994-07-29',
        sinopse: 'Um homem tímido encontra uma máscara mágica que o transforma em um personagem caótico com poderes ilimitados.',
        image: require('./imagens/maskara.jpg')
    },
    {
        id: '15',
        nome:'O Castelo no Céu',
        nota: 8,
        genero: 'Fantasia, Aventura',
        autor: 'Hayao Miyazaki',
        dataLancamento: '1986-08-02',
        sinopse: 'Dois jovens embarcam em uma jornada para encontrar uma ilha flutuante lendária chamada Laputa, enfrentando vilões e descobertas mágicas.',
        image: require('./imagens/casteloCeu.jpg')
    }
];

export default DATA;
