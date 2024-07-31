import prompts from "prompts";
import { Itens } from "../itens/index.js";

/**
 * Permite ao usuário selecionar um item de uma lista de itens.
 * 
 * Esta função apresenta ao usuário uma lista de itens para seleção usando a biblioteca 
 * `prompts`. O usuário pode escolher um item da lista ou optar por não selecionar nenhum. 
 * A função retorna o índice do item selecionado ou -1 se o usuário optar por não selecionar 
 * nenhum item.
 *
 * @param {number[]} itensJogador - Lista de índices dos itens disponíveis para o jogador.
 * @returns {Promise<number>} - O índice do item selecionado, ou -1 se nenhum item for selecionado.
 *
 * @example
 * // Permite ao usuário selecionar um item da lista
 * const itemSelecionado = await selecionarItem([0, 1, 2]);
 * console.log(itemSelecionado); // Índice do item selecionado ou -1
 */
export async function selecionarItem(itensJogador: number[]): Promise<number> {
  // Inicializa a lista de opções com a opção de não selecionar nenhum item
  const choices = [{ title: "Não selecionar nenhum, sair", value: -1 }];

  // Adiciona os itens disponíveis à lista de opções
  for (let i = 0; i < itensJogador.length; i++) {
    choices.push({ title: Itens[itensJogador[i]] as unknown as string, value: i });
  }

  // Define a configuração do prompt para seleção de item
  const pergunta: prompts.PromptObject = {
    type: 'select', // Tipo de prompt que permite selecionar um item de uma lista
    name: 'resposta', // Nome da propriedade que armazenará a resposta
    message: 'Selecione o item que deseja utilizar', // Mensagem exibida para o usuário
    choices, // Lista de opções a serem apresentadas ao usuário
  };

  // Exibe o prompt e aguarda a resposta do usuário
  const { resposta } = await prompts(pergunta);

  // Retorna o índice do item selecionado ou -1 se a resposta for indefinida
  return resposta == undefined ? -1 : resposta;
}
