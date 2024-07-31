import { IEncontro } from "./index.js";

/**
 * Array de encontros bons para o jogo.
 * 
 * Este array contém uma lista de encontros classificados como "bons" para o jogo.
 * Cada encontro é representado por um objeto que inclui histórias relacionadas ao
 * encontro e um evento com uma pergunta e uma ação associada.
 * Histórias é uma array que cada indice se relaciona a uma modalidade
 * 
 * @constant {IEncontro[]} EncontrosBons - Array de encontros bons, cada um com uma lista de histórias e um evento.
 */
export const EncontrosBons: IEncontro[] = [
    {
        tipo: "bom",
        historias: [
            "Correndo, um motociclista ofereceu uma carona para avançar mais rápido.",
            "Nadando, um jet ski apareceu e o piloto ofereceu ajuda.",
            "Na escalada, alguém jogou uma corda e ofereceu ajuda para subir mais rápido.",
            "Durante a pedalada, um caminhoneiro ofereceu uma carona na carroceria."
        ],
        evento: {
            pergunta: "Aceita ajuda?",
            acao: {
                descricao: "Você avançou 3 níveis",
                nivel: 3
            }
        }
    },
    {
        tipo: "bom",
        historias: [
            "Durante a corrida, vi um atalho que parecia cortar bastante o caminho.",
            "Nadando, avistei um jet ski rebocando uma corda.",
            "Na escalada, notei uma corda fácil de usar para subir mais rápido.",
            "Durante a pedalada, vi uma rampa que cortava um bom trecho da pista."
        ],
        evento: {
            pergunta: "Deseja usar o atalho?",
            acao: {
                descricao: "Você avançou 2 níveis",
                nivel: 2
            }
        }
    },
    {
        tipo: "bom",
        historias: [
            "Correndo, alguém ofereceu uma bebida energética para dar mais energia.",
            "Nadando, um barco de apoio ofereceu uma carona até a próxima bóia.",
            "Na escalada, um guia ofereceu uma rota mais rápida e segura.",
            "Durante a pedalada, um ciclista experiente sugeriu um atalho."
        ],
        evento: {
            pergunta: "Aceita a ajuda?",
            acao: {
                descricao: "Você avançou 1 nível",
                nivel: 1
            }
        }
    },
    {
        tipo: "bom",
        historias: [
            "Enquanto corria, um ventilador foi ligado para refrescar os competidores.",
            "Nadando, uma correnteza favorável surgiu para ajudar a avançar mais rápido.",
            "Na escalada, um vento favorável facilitou a subida.",
            "Durante a pedalada, uma descida suave apareceu, facilitando o caminho."
        ],
        evento: {
            pergunta: "Aproveita a situação?",
            acao: {
                descricao: "Você avançou 1 nível",
                nivel: 1
            }
        }
    },
    {
        tipo: "bom",
        historias: [
            "Correndo, uma multidão começou a torcer, dando mais energia.",
            "Nadando, uma correnteza suave ajudou a avançar mais rápido.",
            "Na escalada, uma trilha segura foi descoberta.",
            "Durante a pedalada, uma brisa refrescante ajudou a continuar."
        ],
        evento: {
            pergunta: "Continua com mais energia?",
            acao: {
                descricao: "Avança 1 nível",
                nivel: 1
            }
        }
    }
];
