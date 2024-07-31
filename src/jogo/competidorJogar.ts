import { Encontros } from "../encontros/index.js";
import { Modalidade } from "../modalidades/index.js";
import { modalidadeJogar } from "./modalideJogar.js";
import { Competidor } from "../competidor/index.js";

/**
 * Função que permite que um competidor jogue todas as modalidades disponíveis.
 * 
 * @param {Competidor} competidor - O competidor que está jogando. Deve ser um objeto que implementa a interface `Competidor`.
 * @param {number} niveis - O número de níveis que o competidor deve enfrentar em cada modalidade.
 * 
 * @returns {Promise<void>} - Retorna uma Promise que resolve quando todas as modalidades forem jogadas.
 * 
 * @async
 */
export async function competidorJogar(competidor: Competidor, niveis: number): Promise<void> {
  // Verifica se o competidor já perdeu, se sim, encerra a função sem prosseguir
  if (competidor.perdeu) {
    return;
  }

  // Obtém a lista de encontros do módulo de encontros
  const encontros = Encontros;

  // Itera sobre todas as modalidades disponíveis
  for (let modalidade = 0; modalidade < Modalidade.length; modalidade++) {
    // Chama a função modalidadeJogar para cada modalidade, passando o competidor, o número de níveis e a lista de encontros
    await modalidadeJogar(
      modalidade,   // Índice da modalidade atual
      competidor,   // Competidor que está jogando
      niveis,       // Número de níveis a serem enfrentados
      encontros     // Lista de encontros para a modalidade
    );
  }
}
