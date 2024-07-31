import { Modalidade } from "./modalidades/index.js";
import { nomeJogo } from "./utils/nomeJogo.js";

/**
 * Função de apresentação do jogo.
 * Exibe uma história introdutória sobre o Quadriatlon Muito Louco, 
 * incluindo as modalidades de competição e o nome do jogo.
 */
export function apresentacao() {
    console.log(`
    Bem-vindo ao ${nomeJogo}!

    Em um mundo onde a loucura reina, os desafios são inimagináveis e as recompensas são inestimáveis.
    Você está prestes a embarcar em uma jornada que combina quatro modalidades extremas: ${Modalidade.join(", ")}.

    Prepare-se para enfrentar obstáculos insanos, utilizar itens mágicos e competir contra outros competidores loucos.
    O objetivo é simples: completar todas as modalidades antes que sua energia se esgote.

    Boa sorte, competidor! Você vai precisar.
    `);
}
