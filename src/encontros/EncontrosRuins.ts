import { IEncontro } from "./index.js";

/**
 * Array de encontros classificados como "ruins" no jogo.
 * 
 * Cada encontro representa uma situação adversa que pode ocorrer durante o jogo, 
 * com histórias associadas e uma ação que afeta o progresso do jogador.
 * 
 * @constant {IEncontro[]} EncontrosRuins - Array de encontros que são classificados como "ruins", 
 * contendo histórias e ações que causam retrocessos ou impedem o avanço do jogador.
 */
export const EncontrosRuins: IEncontro[] = [
    {
        tipo: "ruim", // Tipo do encontro, indicando que é um encontro ruim
        historias: [
            "Correndo, um estranho começou a me segurar, atrasando meu progresso.", // História do encontro
            "Enquanto nadava, uma onda gigante veio do nada, me empurrando para trás.", // História do encontro
            "Na escalada, escorreguei em uma rocha lisa, quase caí.", // História do encontro
            "Pedalando, uma pedra grande surgiu no caminho, quase bati." // História do encontro
        ],
        acao: {
            descricao: "Regride 1 nível", // Descrição da ação associada ao encontro
            nivel: -1 // Efeito da ação, que é reverter um nível
        }
    },
    {
        tipo: "ruim", // Tipo do encontro, indicando que é um encontro ruim
        historias: [
            "Correndo, escorreguei em uma poça d'água, perdendo um pouco de tempo.", // História do encontro
            "Nadando, as ondas estavam muito fortes, me fazendo perder o ritmo.", // História do encontro
            "Na escalada, uma pedra lisa me fez escorregar um pouco.", // História do encontro
            "Pedalando, um atolador me fez perder o equilíbrio." // História do encontro
        ],
        acao: {
            descricao: "Continua no mesmo nível", // Descrição da ação associada ao encontro
            nivel: 0 // Efeito da ação, que é permanecer no mesmo nível
        }
    },
    {
        tipo: "ruim", // Tipo do encontro, indicando que é um encontro ruim
        historias: [
            "Correndo, fui atingido por um vento forte que me fez perder o ritmo.", // História do encontro
            "Nadando, senti uma cãibra que me fez parar por um momento.", // História do encontro
            "Na escalada, uma pedra caiu e quase me acertou.", // História do encontro
            "Pedalando, um buraco no caminho quase me fez cair." // História do encontro
        ],
        acao: {
            descricao: "Regride 1 nível", // Descrição da ação associada ao encontro
            nivel: -1 // Efeito da ação, que é reverter um nível
        }
    },
    {
        tipo: "ruim", // Tipo do encontro, indicando que é um encontro ruim
        historias: [
            "Correndo, um cachorro começou a me seguir, me desconcentrando.", // História do encontro
            "Nadando, senti uma correnteza forte me puxando para trás.", // História do encontro
            "Na escalada, uma trilha estava bloqueada, tive que dar a volta.", // História do encontro
            "Pedalando, o vento contra estava muito forte, dificultando o avanço." // História do encontro
        ],
        acao: {
            descricao: "Continua no mesmo nível", // Descrição da ação associada ao encontro
            nivel: 0 // Efeito da ação, que é permanecer no mesmo nível
        }
    },
    {
        tipo: "ruim", // Tipo do encontro, indicando que é um encontro ruim
        historias: [
            "Correndo, tropecei em uma raiz de árvore, quase caí.", // História do encontro
            "Nadando, engoli água e perdi o ritmo.", // História do encontro
            "Na escalada, uma corda quebrei e quase caí.", // História do encontro
            "Pedalando, um pneu furou, me atrasando." // História do encontro
        ],
        acao: {
            descricao: "Regride 1 nível", // Descrição da ação associada ao encontro
            nivel: -1 // Efeito da ação, que é reverter um nível
        }
    }
];
