import { Modalidade, imagens } from "../modalidades/index.js";
import { Competidor } from "../competidor/index.js";
import { IEncontro } from "../encontros/index.js";

/**
 * Função que gerencia a execução de uma modalidade para um competidor.
 * 
 * @param {number} modalidade - O índice da modalidade a ser jogada.
 * @param {Competidor} competidor - O competidor que está jogando a modalidade.
 * @param {number} niveis - O número total de níveis na modalidade.
 * @param {IEncontro[]} encontros - A lista de encontros possíveis durante a modalidade.
 * 
 * @returns {Promise<void>} - Retorna uma Promise que resolve quando a modalidade termina.
 * 
 * @async
 */
export async function modalidadeJogar(modalidade: number, competidor: Competidor, niveis: number, encontros: IEncontro[]): Promise<void> {
  // Se o competidor já perdeu, não faz nada
  if (competidor.perdeu) {
    return;
  }

  // Inicia a modalidade para o competidor
  competidor.iniciaModalidade(modalidade);

  // Se o competidor é o jogador, exibe informações sobre a modalidade
  if (competidor.tipo == "jogador") {
    console.log(`Iniciando a modalidade ${Modalidade[modalidade]}`);
    console.log("");
    console.log(imagens[modalidade]); // Exibe a imagem da modalidade
    console.log("");
  }

  // Loop para jogar a modalidade até o competidor atingir o último nível ou perder
  while (competidor.modalidades[modalidade].nivel <= niveis) {
    if (competidor.perdeu) {
      break; // Sai do loop se o competidor perdeu
    }

    let nivelAtual = competidor.modalidades[modalidade].nivel;

    // Verifica se o competidor pode usar um item
    if (competidor.itens.length > 0) {
      nivelAtual += await competidor.selecionarItem(modalidade); // Atualiza o nível com base no item selecionado
      if (nivelAtual <= 0) nivelAtual = 0; // Garante que o nível não seja negativo
      if (nivelAtual != competidor.modalidades[modalidade].nivel) {
        competidor.atualizarNivel(modalidade, nivelAtual, true); // Atualiza o nível do competidor
      }
      if (nivelAtual > niveis) {
        break; // Sai do loop se o nível atual exceder o número de níveis
      }
    }

    // Verifica se o competidor encontrou um encontro
    const encontrou = Math.random() > 0.1;
    if (encontrou) {
      const random = Math.floor(Math.random() * encontros.length); // Seleciona um encontro aleatório
      const encontro = encontros[random];
      nivelAtual += await competidor.encontros(encontro, modalidade); // Atualiza o nível com base no encontro
    } else {
      nivelAtual++; // Avança para o próximo nível se não houver encontro
    }

    // Se o competidor é o jogador, exibe uma linha em branco para separar as informações
    if (competidor.tipo == "jogador") {
      console.log("");
    }
    if (nivelAtual <= 0) nivelAtual = 0; // Garante que o nível não seja negativo
    competidor.atualizarNivel(modalidade, nivelAtual); // Atualiza o nível do competidor
  }

  // Atualiza o tempo total e a distância total percorrida na modalidade
  competidor.atualizarTempoDistanciaTotal(modalidade);

  // Verifica se o competidor perdeu após o loop
  if (competidor.perdeu) {
    if (competidor.tipo == "jogador") {
      console.log(`${competidor.nome} perdeu na modalidade ${Modalidade[modalidade]} e foi desclassificado da competição`);
    }
    return;
  }

  // Se o competidor é o jogador, exibe uma mensagem indicando que a modalidade foi finalizada
  if (competidor.tipo == "jogador") {
    console.log(`Modalidade ${Modalidade[modalidade]} finalizada`);
    console.log("");
  }
}
