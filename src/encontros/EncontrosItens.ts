import { Itens, Item, itens } from "../itens/index.js";
import { IEncontro, ITipo } from "./index.js";

/**
 * Array de encontros relacionados a itens no jogo.
 * 
 * Este array contém uma lista de encontros onde cada encontro é associado a um item
 * específico do jogo. Cada item é representado por um encontro que inclui um tipo, nome,
 * histórias relacionadas e um evento com uma pergunta e uma ação associada.
 * 
 * @constant {IEncontro[]} EncontrosItens - Array de encontros relacionados a itens, cada um com um nome de item, histórias e um evento.
 */
export const EncontrosItens: IEncontro[] = [];

/**
 * Preenche o array `EncontrosItens` com encontros baseados nos itens fornecidos.
 * 
 * Para cada item na lista `itens`, um encontro é criado com o tipo "item", nome do item, 
 * histórias associadas e um evento com uma pergunta e uma ação que define o índice do item.
 * 
 * @function
 */
itens.forEach((item, index) => {
    // Cria um encontro para cada item
    const encontroItem = {
        tipo: "item" as ITipo, // Define o tipo do encontro como "item"
        nome: Itens[index], // Define o nome do item baseado no índice
        historias: item.historias, // Atribui as histórias associadas ao item
        evento: {
            pergunta: "Deseja pegar?", // Pergunta ao jogador se deseja pegar o item
            acao: {
                ganha: index // Define a ação que ganha o índice do item
            },
        }
    };

    // Adiciona o encontro criado ao array `EncontrosItens`
    EncontrosItens.push(encontroItem);
});
