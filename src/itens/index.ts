// Define o enum para os itens
// O array 'Itens' armazena a lista de itens disponíveis no jogo. Cada item é representado por uma string.
export const Itens = [
    "Garrafa d’água",
    "Lata de RedBull",
    "Barra de cereal",
    "Garrafa de isotônico",
    "Jatinho para o tênis",
    "Hélice para os pés",
    "Balão de ar",
    "Pizza",
    "Pedaço de pano velho",
    "Elástico"
] as const;

/**
 * Tipo que representa o nome de um item, baseado no array de itens.
 * 
 * @type {typeof Itens[number]}
 */
export type ItemName = typeof Itens[number];

/**
 * Interface que define a estrutura dos efeitos de um item.
 * 
 * A chave é a descrição do efeito e o valor é o impacto numérico do efeito.
 * 
 * @interface
 */
export interface EfeitoItem {
    [descricao: string]: number;
}

/**
 * Interface que define a estrutura de um item no jogo.
 * 
 * @interface
 */
export interface Item {
    /**
     * Lista de efeitos que o item pode causar.
     * 
     * @type {EfeitoItem[]}
     */
    efeitos: EfeitoItem[];

    /**
     * Lista de histórias associadas ao item.
     * 
     * @type {string[]}
     */
    historias: string[];
}

/**
 * Array de itens, cada um com seus efeitos e histórias associados.
 * 
 * @constant {Item[]} itens
 */
export const itens: Item[] = [
    {
        efeitos: [
            { "Essa água me deu um gás": 1 },
            { "Que porcaria, entrou água do mar na garrafa": -1 },
            { "Que puta sol, essa água vai dar uma refrescada": 1 },
            { "Mas que tampa dura de abrir, que merda a garrafa caiu": 0 },
        ],
        historias: [
            "Olha ali, alguém está me oferecendo uma Garrafa d’água.",
            "Alguém jogou uma Garrafa d’água bem aqui do meu lado.",
            "O que é aquilo, tem um balão com uma Garrafa d’água amarrada nele.",
            "Olha ali, alguém amarrou uma Garrafa d’água naquela árvore."
        ]
    },
    {
        efeitos: [
            { "Essa bebida me deu asas!": 2 },
            { "Estou me sentindo acelerado": 1 },
            { "Fiquei enjoado, que droga!": -1 },
            { "Me deu energia, mas e agora?": 0 },
        ],
        historias: [
            "O que é aquilo caído ali no chão, parece uma Lata de RedBull.",
            "Tem alguma coisa boiando ali, me parece uma Lata de RedBull.",
            "O que tem nesse buraco, me parece uma Lata de RedBull.",
            "O que tem na mão daquele cara me oferecendo alguma coisa, parece uma Lata de RedBull."
        ]
    },
    {
        efeitos: [
            { "Isso vai me dar energia!": 1 },
            { "Essa barra está meio velha...": -1 },
            { "É melhor que nada!": 0 },
            { "Acho que me sinto mais forte!": 1 },
        ],
        historias: [
            "Olha ali, alguém está me oferecendo uma Barra de cereal.",
            "Alguém jogou uma Barra de cereal bem aqui do meu lado.",
            "O que é aquilo, tem um balão com uma Barra de cereal amarrada nele.",
            "Olha ali, alguém amarrou uma Barra de cereal naquela árvore."
        ]
    },
    {
        efeitos: [
            { "Que reposição maravilhosa!": 2 },
            { "Acho que exagerei...": -1 },
            { "Perfeito para o calor!": 1 },
            { "Melhor que água!": 1 },
        ],
        historias: [
            "O que é aquilo caído ali no chão, parece uma Garrafa de isotônico.",
            "Tem alguma coisa boiando ali, me parece uma Garrafa de isotônico.",
            "O que tem nesse buraco, me parece uma Garrafa de isotônico.",
            "O que tem na mão daquele cara me oferecendo alguma coisa, parece uma Garrafa de isotônico."
        ]
    },
    {
        efeitos: [
            { "Estou voando!": 3 },
            { "Isso foi rápido demais!": -1 },
            { "Fiquei sem controle": -2 },
            { "Incrível, passei por todos!": 2 },
        ],
        historias: [
            "Olha ali, alguém está me oferecendo um Jatinho para o tênis.",
            "Alguém jogou um Jatinho para o tênis bem aqui do meu lado.",
            "O que é aquilo, tem um balão com um Jatinho para o tênis amarrado nele.",
            "Olha ali, alguém amarrou um Jatinho para o tênis naquela árvore."
        ]
    },
    {
        efeitos: [
            { "Estou girando!": 2 },
            { "Que vertigem...": -1 },
            { "Consegui ir mais rápido!": 1 },
            { "Isso foi útil na água!": 2 },
        ],
        historias: [
            "O que é aquilo caído ali no chão, parece uma Hélice para os pés.",
            "Tem alguma coisa boiando ali, me parece uma Hélice para os pés.",
            "O que tem nesse buraco, me parece uma Hélice para os pés.",
            "O que tem na mão daquele cara me oferecendo alguma coisa, parece uma Hélice para os pés."
        ]
    },
    {
        efeitos: [
            { "Flutuei para longe!": 2 },
            { "Isso foi uma boa ideia?": -1 },
            { "Que altura!": 1 },
            { "Melhor que caminhar!": 1 },
        ],
        historias: [
            "Olha ali, alguém está me oferecendo um Balão de ar.",
            "Alguém jogou um Balão de ar bem aqui do meu lado.",
            "O que é aquilo, tem um balão com um Balão de ar amarrado nele.",
            "Olha ali, alguém amarrou um Balão de ar naquela árvore."
        ]
    },
    {
        efeitos: [
            { "Que delícia, me senti renovado!": 2 },
            { "Comi demais, agora estou pesado...": -2 },
            { "Que maravilha!": 1 },
            { "Isso foi uma pausa saborosa!": 1 },
        ],
        historias: [
            "O que é aquilo caído ali no chão, parece uma Pizza.",
            "Tem alguma coisa boiando ali, me parece uma Pizza.",
            "O que tem nesse buraco, me parece uma Pizza.",
            "O que tem na mão daquele cara me oferecendo alguma coisa, parece uma Pizza."
        ]
    },
    {
        efeitos: [
            { "Consegui me proteger do sol!": 1 },
            { "Isso é inútil...": -1 },
            { "Talvez possa usar para limpar algo": 0 },
            { "Acho que não ajudou muito": -1 },
        ],
        historias: [
            "Olha ali, alguém está me oferecendo um Pedaço de pano velho.",
            "Alguém jogou um Pedaço de pano velho bem aqui do meu lado.",
            "O que é aquilo, tem um balão com um Pedaço de pano velho amarrado nele.",
            "Olha ali, alguém amarrou um Pedaço de pano velho naquela árvore."
        ]
    },
    {
        efeitos: [
            { "Isso me deu uma vantagem!": 1 },
            { "Quase me machuquei com isso!": -1 },
            { "Isso foi uma ótima ideia!": 1 },
            { "Inútil, mas divertido!": 0 },
        ],
        historias: [
            "O que é aquilo caído ali no chão, parece um Elástico.",
            "Tem alguma coisa boiando ali, me parece um Elástico.",
            "O que tem nesse buraco, me parece um Elástico.",
            "O que tem na mão daquele cara me oferecendo alguma coisa, parece um Elástico."
        ]
    }
];
